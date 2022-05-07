// 解析路径，并大写首字母, path -> '/example'
export const upperCasePath = (path) => {
  const dir = path.split('/')[1];

  return dir.replace(dir[0], dir[0].toUpperCase());
};
