const isPercentNum = (str) => /\d%$/.test(str);

export default function createRadius(radius, sizing) {
  const { create: inputCreate, step = 1 } = radius;

  const create = (...args) => {
    return []
      .concat(...args)
      .map((arg) => {
        if (isPercentNum(arg)) {
          return arg;
        }
        if (arg)
          if (isNaN(arg)) {
            arg = 0;
          }
        const output = arg * step;
        return typeof output === 'number' ? `${sizing(output)}` : output;
      })
      .join(' ');
  };

  return { create: inputCreate || create };
}
