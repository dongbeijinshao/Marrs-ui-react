import { useThemeProps as systemUseThemeProps } from '../dependencies/system';
import defaultGlobalProps from './defaultGlobalProps';
import defaultTheme from './defaultTheme';
import useTheme from './useTheme';

export const globalPropKeys = Object.keys(defaultGlobalProps);

export default function useThemeProps({
  props,
  name,
  include = globalPropKeys,
  customProps
}) {
  const theme = useTheme();
  const globalProps = Object.entries(theme.globalProps).reduce(
    (rs, [key, value]) => {
      return {
        ...rs,
        ...(include.includes(key) && { [key]: value })
      };
    },
    {}
  );

  const themeProps = systemUseThemeProps({
    props: {
      ...customProps,
      ...props
    },
    name,
    defaultTheme
  });

  const output = { ...globalProps, ...themeProps };

  return output;
}
