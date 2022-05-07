let successComArr = [];
let errorComArr = { length: 0 };

const ERR_CODE = {
  NO_MD: '没有 readme.md 文件',
  COMPLIER_ERR: '编译 dts 失败',
  NO_DEMO: '没有 demo 文件'
};

function printLog(isLog) {
  console.log(
    `😄😄😄 共成功写入 ${successComArr.length} 个组件  ${
      isLog ? successComArr.join(',') : ' '
    }\n`
  );

  let errCom = Object.assign({}, errorComArr);
  delete errCom.length;
  console.log(
    `😈😈😈 共失败写入 ${errorComArr.length} 个组件  ${
      isLog ? JSON.stringify(errCom, null, 2) : ''
    }`
  );
}

function success(componentName) {
  successComArr.push(componentName);
}

function err(reason, componentName) {
  if (reason in errorComArr) {
    errorComArr[reason].push(componentName);
    errorComArr.length = errorComArr.length + 1;
    return;
  }
  errorComArr[reason] = [componentName];
  errorComArr.length = 1;
}

function cleanLog() {
  successComArr = [];
  errorComArr = { length: 0 };
}

module.exports = {
  printLog,
  success,
  err,
  cleanLog,
  ERR_CODE
};
