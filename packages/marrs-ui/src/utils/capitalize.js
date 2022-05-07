import warning from './warning';

const capitalize = (str = '') => {
  warning(
    typeof str === 'string',
    `capitallize函数参数需要是一个string, 这里拿到的 ${str} 是个 ${typeof str}, 仅返回原数据`
  );
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export default capitalize;
