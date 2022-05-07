import { rootShouldForwardProp } from '../styles/styled';
import { globalPropKeys } from '../styles/useThemeProps';

const generateShouldForwardProp =
  ({
    include = [],
    exclude: excludeInput = [],
    base = rootShouldForwardProp
  } = {}) =>
  (prop) => {
    const exclude = globalPropKeys.concat(excludeInput);
    return (base(prop) && !exclude.includes(prop)) || include.includes(prop);
  };
export default generateShouldForwardProp;
