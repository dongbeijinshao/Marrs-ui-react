/**
 * 计算spacing, 默认4px的倍数, 会处理所有入参
 * @param {*}
 * @returns string
 */
export default function createSpacing({ step = 1 }, sizing) {
  const spacing = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args
      .map((argument) => {
        if (isNaN(argument)) return argument;
        const output = step * argument;
        return typeof output === 'number' ? `${sizing(output)}` : output;
      })
      .join(' ');
  };

  return spacing;
}
