import capitalize from './capitalize';

type kvProps = { [key: string]: any };
type generatorProps = [kvProps, string, string] | kvProps;

const make = (keys: string[], origin: kvProps, config: any) => {
  return [
    config.prefix,
    ...keys.map((key, idx) => {
      const startCapiIdx = config.prefix ? 0 : 1;
      let result = origin[key];

      if (typeof result === 'boolean') {
        result = key;
      }

      if (idx >= startCapiIdx) {
        return capitalize(result);
      }
      return result;
    }),
    config.suffix
  ].join('');
};

const generator = (...propsInputs: generatorProps[]) => {
  return propsInputs.map((input) => {
    let props, prefix, suffix;
    if (Array.isArray(input)) {
      [props, prefix, suffix] = [...input, '', ''];
    } else {
      [props, prefix, suffix] = [input, '', ''];
    }
    const sortedKeys = Object.keys(props).sort();
    const fullClasses = make(sortedKeys, props, {
      prefix,
      suffix
    });
    return fullClasses;
  });
};

export default generator;
