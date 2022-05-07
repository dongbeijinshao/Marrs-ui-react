const { resolve } = require('path');

// 配置全局属性
const GLOBAL_PROPS = {
  GlobalProps: {
    color: {
      name: 'color',
      description: '组件色调',
      type: '`primary | secondary | success | error | info | warning`',
      required: false
    },
    volume: {
      name: 'volume',
      description: '尺寸规格',
      type: '`tiny | small | medium | big | large`',
      required: false
    }
  },
  Size: {
    width: {
      name: 'width',
      description: '长度',
      type: 'string | number',
      required: false
    },
    height: {
      name: 'height',
      description: '高度',
      type: 'string | number',
      required: false
    }
  }
};

module.exports = {
  // 需要编译的路径
  basedir: resolve(__dirname, 'packages/marrs-ui/src'),
  files: {
    entry: '**/*.d.ts',
    // entry: [
    //   '/Users/jerome/weimob/marrs-ui/packages/marrs-ui/src/Badge/Badge.d.ts'
    // ],
    // entry: [
    //   '/Users/jerome/weimob/marrs-ui/packages/marrs-ui/src/ActionSheet/ActionSheet.d.ts'
    // ],
    ignore: ['**/index.d.ts', 'utils', 'types', 'styles', 'colors'],
    ignoreFile: ['ButtonBase'],
    output: {
      fileName: 'dts'
    }
  },
  // 编译配置
  compile: {
    // debug: ({ schema, code, md, template }) => {
    //   console.log('schema: ', schema);
    // },
    log: true,
    globalType: GLOBAL_PROPS,
    beforeRender(schema) {
      schema.forEach((item) => {
        /*eslint-disable*/
        item.properties.forEach((property) => {
          property.type = property.type
            .replace(/\|/g, '\\|')
            .replace(/\`/g, '_');
        });
        /*eslint-disable*/
      });
      return schema;
    }
  },
  // 导出配置
  output: {
    extraMdFile: { demo: 'demo.md' },
    order: ['demo', 'dts'],
    dist: 'README.md'
  },
  // 保留标识符的配置
  tsDoc: {}
};
