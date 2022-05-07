const path = require('path');
const recast = require('recast');
const { namedTypes: n, visit } = require('ast-types');
const typescriptParse = require('recast/parsers/typescript.js');
const cloneDeep = require('lodash/cloneDeep');

let CONFIG = require(path.join(process.cwd(), 'ts2md.config'));
// 标示所有全局属性
const GLOBAL_BUILT_IN_PROPS = [
  'Pick',
  'Partial',
  'Record',
  'Exclude',
  'Extract',
  'Omit',
  'Readonly',
  'Required'
];
// 自定义的全局属性
const GLOBAL_CUSTOM_PROPS = Object.keys(CONFIG.compile.globalType);
const GLOBAL_PROPS_ARR = GLOBAL_BUILT_IN_PROPS.concat(GLOBAL_CUSTOM_PROPS);

let schema = [];

// 根据传进来的 ast 中 ts 的token ，返回对应具体的 ts 类型（非字面量，函数，联合，数组）
const getType = (tsType) => {
  let type = '';
  switch (tsType) {
    case 'TSAnyKeyword':
      type = 'any';
      break;
    case 'TSNumberKeyword':
      type = 'number';
      break;
    case 'TSStringKeyword':
      type = 'string';
      break;
    case 'TSUnknownKeyword':
      type = 'any';
      break;
    case 'TSBooleanKeyword':
      type = 'boolean';
      break;
    case 'TSVoidKeyword':
      type = 'void';
      break;
    default:
      break;
  }
  return type;
};

const getTSQualifiedNameString = (typeName) => {
  let name = [];
  if (n.TSQualifiedName.check(typeName)) {
    if (typeName.right.type === 'Identifier') {
      name.push(typeName.right.name);
    }
    if (typeName.left.type === 'Identifier') {
      name.push(typeName.left.name);
    }
    if (typeName.left.type === 'TSQualifiedName') {
      name = name.concat(getTSQualifiedNameString(typeName.left));
    }
  }
  return name.reverse().join('.');
};

const formatTypeParameterInstantiation = (node) => {
  const typeParameters = [];
  if (n.TSTypeReference.check(node) && node.typeParameters?.params) {
    node.typeParameters.params.forEach((s) => {
      let props = {};
      formateTypeAnnotation(s, props);
      typeParameters.push(props);
    });
  }
  return typeParameters;
};

const formatTypeParameterDeclaration = (node) => {
  const typeParameters = [];
  if (n.TSTypeAliasDeclaration.check(node) && node.typeParameters) {
    node.typeParameters.params.forEach((s) => {
      let type = '';
      switch (s.default?.type) {
        case 'TSAnyKeyword':
          type = 'any';
          break;
        case 'TSNumberKeyword':
          type = 'number';
          break;
        case 'TSStringKeyword':
          type = 'string';
          break;
        case 'TSUnknownKeyword':
          type = 'any';
          break;
        case 'TSBooleanKeyword':
          type = 'boolean';
          break;
        case 'TSVoidKeyword':
          type = 'void';
          break;
        default:
          break;
      }
      typeParameters.push({
        name: s.name,
        default: type
      });
    });
  }
  return typeParameters;
};

// 解析 ts 注释
// node 是注释
// property 是属性 ，如 visible
const formateTypeAnnotation = (node, property) => {
  if (n.TSTypeReference.check(node)) {
    // 如果是引用 reference
    if (node.typeName.type === 'Identifier') {
      property.type = node.typeName.name;
    } else if (node.typeName.type === 'TSQualifiedName') {
      property.type = getTSQualifiedNameString(node.typeName);
    }
  } else if (n.TSTypeLiteral.check(node)) {
    // 如果是字面量
    property.type = property.name;
    formatTypeLiteral(node, property.name);
  } else if (n.TSFunctionType.check(node)) {
    // 如果是函数
    // TODO 如果是函数，就应该直接把 ast 转成code 直接返回;
    // TODO 现在临时写成 function 返回
    property.type = 'function';

    // 临时注释
    // formatFunctionType(node, property.name);
  } else if (n.TSUnionType.check(node)) {
    // 联合类型
    const properties = [];
    node.types.forEach((s) => {
      const tempProperty = { name: property.name };
      formateTypeAnnotation(s, tempProperty);
      properties.push(tempProperty);
      property.type = properties.map((s) => s.type).join('|');
    });
  } else if (n.TSLiteralType.check(node)) {
    property.type = formatLiteralType(node);
  } else if (n.TSArrayType.check(node)) {
    formateTypeAnnotation(node.elementType, property);
    property.type = `${property.type}[]`;
  } else {
    // 其他
    property.type = getType(node.type);
  }
};

const formatLiteralType = (node) => {
  let type = '';
  if (n.TSLiteralType.check(node)) {
    if (n.StringLiteral.check(node.literal)) {
      type = `"${node.literal.value}"`;
    } else if (n.NumericLiteral.check(node.literal)) {
      type = `${node.literal.value}`;
    } else if (n.BooleanLiteral.check(node.literal)) {
      type = `${node.literal.value}`;
    }
  }
  return type.toString();
};

const formatTypeLiteral = (node, typeName, typeParameters = []) => {
  if (n.TSTypeLiteral.check(node)) {
    const properties = [];
    node.members.forEach((s) => {
      if (s.type === 'TSPropertySignature') {
        const property = {
          optional: s.optional
        };
        if (s.key.type === 'Identifier') {
          property.name = s.key.name;
        }
        if (s.typeAnnotation?.type === 'TSTypeAnnotation') {
          formateTypeAnnotation(s.typeAnnotation.typeAnnotation, property);
        }
        if (s.comments) {
          const comments = [];
          s.comments.forEach((c) => {
            if (c.leading) {
              comments.push(c.value);
            }
          });
          property.comments = comments;
        }
        properties.push(property);
      }
    });
    schema.push({
      name: typeName,
      type: 'literal',
      typeParameters: typeParameters,
      properties: properties
    });
  }
};

// 遍历接口的方法体
const formatInterfaceBody = (
  node,
  typeName,
  typeParameters = [],
  leadingComments = []
) => {
  if (n.TSInterfaceBody.check(node)) {
    const properties = [];
    let interfaceComments = [];
    node.body.forEach((s) => {
      if (n.TSPropertySignature.check(s)) {
        // 如果是属性签名

        // 定义了一个属性,收集相关信息
        // 可选项  optional : true
        const property = {
          optional: s.optional
        };

        // 如果是标识符
        if (s.key.type === 'Identifier') {
          // name :visible
          property.name = s.key.name;
        }

        // 如果是 ts 的类型转化
        if (s.typeAnnotation?.type === 'TSTypeAnnotation') {
          formateTypeAnnotation(s.typeAnnotation.typeAnnotation, property);
        }

        // 如果是评论
        if (s.comments) {
          const comments = [];
          // 注释有多行情况
          s.comments.forEach((c) => {
            if (c.leading) {
              comments.push(c.value);
            }
          });
          // 注释内容 comments : ['是否显示动作面板 ']
          property.comments = comments;
        }
        properties.push(property);
      }
    });

    if (leadingComments.length > 0) {
      interfaceComments = leadingComments[0].value;
      interfaceComments = interfaceComments
        .replace(/\*/gm, '')
        .trim()
        .split('\n')
        .map((s) => s.trim());
    }
    schema.push({
      name: typeName, //  typeName 就是 ActionSheetComponent
      type: 'literal',
      typeParameters: typeParameters, // typeParameters 就是 []
      properties: properties,
      interfaceComments
      // 一堆属性
      // properties 就是 {
      //   optional: true,
      //   name: "visible",
      //   type: "boolean",
      //   comments: [
      //     " 是否显示动作面板 ",
      //   ],
      // }
    });
  }
};

const formatFunctionType = (node, typeName, typeParameters = []) => {
  if (n.TSFunctionType.check(node)) {
    const properties = [];
    if (node.parameters.length > 0) {
      node.parameters.forEach((s) => {
        if (n.Identifier.check(s)) {
          const property = {
            optional: s.optional,
            name: s.name
          };
          formateTypeAnnotation(s.typeAnnotation?.typeAnnotation, property);
          if (s.comments) {
            const comments = [];
            s.comments.forEach((c) => {
              if (c.leading) {
                comments.push(c.value);
              }
            });
            property.comments = comments;
          }
          properties.push(property);
        }
      });
    }
    const returnType = {
      name: typeName
    };
    formateTypeAnnotation(node.typeAnnotation?.typeAnnotation, returnType);
    schema.push({
      name: typeName,
      type: 'function',
      typeParameters: typeParameters,
      properties: properties,
      returnType: returnType.type
    });
  }
};

// 针对 交叉类型
const formatIntersectionType = (node, typeName) => {
  if (n.TSIntersectionType.check(node)) {
    const extraProperties = [];
    if (node.types.length > 0) {
      node.types.forEach((s) => {
        let extra = {};
        if (n.TSTypeReference.check(s)) {
          formateTypeAnnotation(s, extra);
          extra.values = formatTypeParameterInstantiation(s);
        }
        extraProperties.push(extra);
      });
    }
    schema.push({
      name: typeName,
      type: 'intersection',
      extraProperties: extraProperties
    });
  }
};

// 格式化别名声明类型
const formatTypeAliasDeclaration = (node) => {
  if (n.TSTypeAliasDeclaration.check(node)) {
    const name = node.id.name;
    const typeParameters = formatTypeParameterDeclaration(node);
    if (node.typeAnnotation.type === 'TSTypeLiteral') {
      // 如果 别名 是字面量类型
      formatTypeLiteral(node.typeAnnotation, name, typeParameters);
    } else if (node.typeAnnotation.type === 'TSFunctionType') {
      // 如果 别名 是函数类型
      formatFunctionType(node.typeAnnotation, name, typeParameters);
    } else if (node.typeAnnotation.type === 'TSIntersectionType') {
      // 如果 别名 是交叉类型
      formatIntersectionType(node.typeAnnotation, name, typeParameters);
    }
  }
};

// 格式化 接口声明 语句
// 解析出 name 和 typeParameters
const formatInterfaceDeclaration = (node) => {
  if (n.TSInterfaceDeclaration.check(node)) {
    const name = node.id.type === 'Identifier' ? node.id.name : ''; // ActionSheetComponent
    const typeParameters = formatTypeParameterDeclaration(node);
    // node.body 是里面实现的函数体
    // name 就是 ActionSheetComponent
    // typeParameters 就是  []
    formatInterfaceBody(node.body, name, typeParameters, node.leadingComments);
  }
};

// 格式化 schema
const formatSchema = (data) => {
  const formattedSchema = [];
  data.forEach((s) => {
    let name = s.name || '';
    // 类名注释
    let interfaceComments = s.interfaceComments || [];
    if (s.typeParameters && s.typeParameters.length > 0) {
      const arr = s.typeParameters.map((s) => {
        if (s.default) {
          return `${s.name} = ${s.default}`;
        } else {
          return s.name;
        }
      });
      name = `${name}<${arr.join(', ')}>`;
    }
    if (s.type === 'literal') {
      // 如果是字面量，直接 push 到 formattedSchema
      formattedSchema.push({
        name: name,
        interfaceComments: interfaceComments,
        properties:
          s.properties?.map((p) => {
            let description = '';
            if (p.comments?.length) {
              description = p.comments
                .map((c) => {
                  let comment = c;
                  const match = c.match(/(@description).*/);
                  if (match?.length) {
                    comment = match[0].replace('@description', '').trim();
                  }
                  return comment;
                })
                .join('，');
            }
            return {
              name: p.name,
              description: description,
              type: `\`${p.type}\``,
              required: p.optional !== true
            };
          }) || []
      });
    } else if (s.type === 'function') {
      // 如果是函数
      name = `${name}`;
      let properties = [];
      if (s.properties && s.properties.length > 0) {
        properties = s.properties.map((p) => {
          let description = '';
          if (p.comments?.length) {
            description = p.comments
              .map((c) => {
                let comment = c;
                const match = c.match(/(@description).*/);
                if (match?.length) {
                  comment = match[0].replace('@description', '').trim();
                }
                return comment;
              })
              .join('，');
          }
          return {
            name: p.name,
            description: description,
            type: `\`${p.type}\``,
            required: p.optional !== true
          };
        });
      }
      formattedSchema.push({
        name: name,
        properties: [
          ...properties,
          {
            name: '`--`',
            description: '返回值',
            type: `\`${s.returnType}\`` || '',
            required: false
          }
        ]
      });
    }
  });
  return formattedSchema;
};

// 合并 GlobalProps 到该组件内部的 Components 的内容里面
function mergeGlobalPropSchema(formattedSchema, original) {
  // 如果有该组件自身的 dts 属性才能合并 GlobalProp
  if (formattedSchema.length) {
    // 拿到全局的props
    let globalProps = original.filter((prop) => prop.type === 'intersection');
    // console.log('globalProps: ', JSON.stringify(globalProps, null, 2));
    if (globalProps.length > 0 && globalProps[0].extraProperties) {
      // 如果有全局GlobalProps
      // 过滤所有关键字包含关键字的类型，mergeProps 就是需要待编译的类型
      let mergeProps = globalProps[0].extraProperties.filter(
        (item) => GLOBAL_PROPS_ARR.indexOf(item.type) > -1
      );
      // console.log('mergeProps: ', JSON.stringify(mergeProps, null, 2));
      if (mergeProps.length > 0) {
        // 获取本组件基础的类型，将来要合并进去
        let ComponentProp = formattedSchema[0];

        mergeProps.forEach((mergeItem) => {
          if (GLOBAL_CUSTOM_PROPS.includes(mergeItem.type)) {
            // 如果是自定义全局属性
            let global_prop_value_arr = Object.values(
              CONFIG.compile.globalType[mergeItem.type]
            );
            ComponentProp.properties.unshift(
              ...cloneDeep(global_prop_value_arr)
            );
          } else {
            // 含有 ts 关键字的 Pick
            // todo 目前只有 Pick 关键字，只考虑 Pick 的情况 ,如 Pick<GlobalProps,'color'>
            let which_global = mergeItem.values[0].type; //  GlobalProps
            let which_global_key = mergeItem.values[1].type;
            which_global_key = which_global_key.match(/\w+/g)[0]; // color

            // 目前全局对象只有原始类型，不用深拷贝
            // 如果全局的，要附上新对象，要重复使用，防止外部修改该对象
            let globalPropsValue = cloneDeep(
              CONFIG.compile.globalType[which_global][which_global_key]
            );

            ComponentProp.properties.unshift(globalPropsValue);
          }
        });
      }
    }
  }

  return formattedSchema;
}

const compileToSchema = (code) => {
  schema = [];
  // 转化成 ast
  const ast = recast.parse(code, { parser: typescriptParse });
  // 遍历整个 ast，根据对应的语句做相应的处理
  visit(ast, {
    // 导出声明
    visitExportNamedDeclaration(path) {
      this.traverse(path);
    },
    // 别名声明
    visitTSTypeAliasDeclaration(path) {
      formatTypeAliasDeclaration(path.node);
      this.traverse(path);
    },
    // 接口声明
    visitTSInterfaceDeclaration(path) {
      formatInterfaceDeclaration(path.node);
      this.traverse(path);
    }
  });
  let formattedSchema = formatSchema(schema);
  // console.log('schema: ', JSON.stringify(schema, null, 2));

  // todo 合并 GlobalProps 到该组件内部的 Components 的内容里面,,后面要提取到外界使用者的地方
  formattedSchema = mergeGlobalPropSchema(formattedSchema, schema);

  // console.log('合并 mergeGlobalProp 后的formattedSchema: ', formattedSchema);
  // console.log(
  //   '合并 mergeGlobalProp 后的formattedSchema: ',
  //   JSON.stringify(formattedSchema, null, 2)
  // );
  // todo 渲染模板允许业务选择
  if (formattedSchema.length === 0) {
    // 没有渲染的数据
    return {
      schema: []
    };
  }

  return {
    originSchema: formattedSchema
  };
};

module.exports = {
  compileToSchema
};
