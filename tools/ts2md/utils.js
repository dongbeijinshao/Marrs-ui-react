const path = require('path');
const DEBUG_LOG_PATH = path.resolve(process.cwd(), 'ts2md.debug.txt');

function getPath(basedir, filePath) {
  if (filePath && filePath instanceof Array && filePath.length > 0) {
    return filePath.map((file) => getPath(basedir, file));
  } else {
    return path.isAbsolute(filePath) ? filePath : path.join(basedir, filePath);
  }
}

// 简化文件，变成直接声明的文件
function optimizeOriginalFile(fileStr) {
  return fileStr.replace(/^export\s+(default\s+)?/gm, '');
}

module.exports = {
  getPath,
  optimizeOriginalFile,
  DEBUG_LOG_PATH
};
