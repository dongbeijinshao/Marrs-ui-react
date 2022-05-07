const path = require('path');
const fse = require('fs-extra');
const glob = require('fast-glob');
const { compileToSchema } = require('./compileToSchema.js');
const { renderToMd } = require('./render');
const { template } = require('./template.js');
const { getPath, optimizeOriginalFile } = require('./utils');
const { printLog, success, err, cleanLog, ERR_CODE } = require('./log');

let config = require(path.join(process.cwd(), 'ts2md.config'));

async function start() {
  config = init(config);

  const { compile } = config;

  let components = await readFile(config);

  let debugMode = isDebugMode(compile.debug, components);
  if (debugMode) {
    return;
  }

  writeAllFile(components);

  printLog(compile.log);
}

function init(config) {
  cleanLog();
  return checkConfig(config);
}

async function readFile({ basedir, files }) {
  // 编译后文件的标识符
  const CODE = files.output?.fileName || 'dts';

  const entry = getPath(basedir, files.entry);
  const ignore = files.ignore
    .concat(files.ignoreFile)
    .map((i) => getPath(basedir, i));

  let targetFiles = glob.sync(entry, { ignore });
  targetFiles = filterIllegalDir(targetFiles);

  // 没有合适的文件
  if (targetFiles.length === 0) {
    throw Error(ERR_CODE.NO_DEMO);
  }

  const components = {};

  targetFiles.forEach((dts) => {
    const CName = path.basename(dts, '.d.ts');

    components[CName] = {
      // dts 目录
      dtsPath: dts,
      // 源文件
      originFile: fse.readFileSync(dts, 'utf8'),
      // 其余md
      extraMd: readExtraMd(dts)
    };

    try {
      let compileForm = compileTsFile(components[CName].originFile);
      components[CName][CODE] = compileForm.md;
      components[CName]['compileForm'] = compileForm;
    } catch (error) {
      err(ERR_CODE.COMPLIER_ERR, CName);
      throw Error(ERR_CODE.COMPLIER_ERR);
    }
  });

  return components;
}

// 过滤不合适的目录，如，没有 demo.md 文件
function filterIllegalDir(targetFiles) {
  return targetFiles.filter((file) => {
    const dir = path.dirname(file);
    const demoMd = path.join(dir, 'demo.md');
    return fse.existsSync(demoMd);
  });
}

function isDebugMode(debug, components) {
  // TODO 目前调试模式，只支持单个组件调试，只支持 callback 模式
  let form = components;
  // if (components instanceof Array) {
  // 多组件调试，取第一个显示
  form = Object.values(components)[0].compileForm;
  // }

  if (typeof debug === 'boolean' && debug) {
    console.warn('目前调试模式，只支持单个组件调试，只支持 callback 模式');
    // fse.writeFileSync(
    //   DEBUG_LOG_PATH,
    //   form,
    //   {
    //     encoding: 'utf-8',
    //     flag: 'w+'
    //   }
    // );
    return true;
  } else if (typeof debug === 'function') {
    debug.call(null, form);
    return true;
  }

  return false;
}

/**
 * 合并其他文档
 * @param {*} components
 * @return str
 */
function mergeComponentAllMd(components) {
  const { files, output } = config;

  let strArr = [];

  for (let component of Object.values(components)) {
    output.order.forEach((mdKey) => {
      if (mdKey === files.output.fileName) {
        strArr.push(component[files.output.fileName]);
      } else if (Object.keys(output.extraMdFile).includes(mdKey)) {
        // 是否在 order 序列中
        strArr.push(component['extraMd'][mdKey]['code']);
      } else {
        console.warn(
          '注意:可能配置 files.output.fileName 的值不在 输出 order序列中，请检查!'
        );
      }
    });
  }
  return strArr.join('\n');
}

function writeAllFile(components) {
  const { output } = config;
  for (let CName in components) {
    const dirname = path.dirname(components[CName]['dtsPath']);
    const mdPath = path.join(dirname, output.dist);

    if (fse.pathExistsSync(mdPath)) {
      fse.writeFileSync(
        mdPath,
        mergeComponentAllMd({ components: components[CName] }),
        {
          encoding: 'utf-8'
        }
      );
      success(CName);
    } else {
      err(ERR_CODE.NO_MD, CName);
    }
  }
}

function compileTsFile(file) {
  const compileForm = {};
  if (file) {
    const optimizeFile = optimizeOriginalFile(file);
    const { originSchema } = compileToSchema(optimizeFile);
    const { schema, md } = renderToMd(originSchema);
    // 代码
    compileForm.code = file;
    // 编译后的schema
    compileForm.schema = JSON.stringify(schema, null, 4);
    // 合并的md
    compileForm.md = md;
    // 使用的模板template
    compileForm.template = template;
  }
  return compileForm;
}

function checkConfig(config) {
  if (!config) {
    // 如果没有配置文件
    throw Error('没有找到配置文件，请检查后重试！');
  }
  let newConfig = Object.assign({}, config);

  newConfig.basedir = newConfig.basedir || process.cwd();

  newConfig.files.output = Object.assign(
    {
      fileName: 'dts'
    },
    newConfig.files.output || {}
  );

  if (!newConfig.output.dist) {
    newConfig.output.dist = 'README.md';
  }

  newConfig.output.order = newConfig.output.order || ['dts'];

  return newConfig;
}

/**
 * 读取额外 md 文件
 * @param {string} dts 当前的 dts 文件路径
 * @returns extraMd
 */
function readExtraMd(dts) {
  const { output } = config;
  const dir = path.dirname(dts);

  const extraMd = {};
  for (let [key, value] of Object.entries(output.extraMdFile)) {
    extraMd[key] = {
      identifier: value,
      path: path.resolve(dir, value),
      code: ''
    };

    if (fse.pathExistsSync(extraMd[key].path)) {
      // 如果存在该目录
      extraMd[key].code = fse.readFileSync(extraMd[key].path, 'utf8');
    }
  }

  return extraMd;
}

start()
  .then(() => {
    console.log('😄 自动生成 md 文档成功 ');
  })
  .catch((err) => {
    console.log('😭 自动生成 md 文档失败，请检查后重试: ', err);
  });
module.exports = {
  start
};
