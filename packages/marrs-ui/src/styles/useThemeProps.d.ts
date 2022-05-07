import { GlobalProps } from '../types/components';
import { Components } from './types/components';

export const globalPropKeys: Array<keyof GlobalProps>;
export interface ThemeWithProps {
  components?: Components;
}

export type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  components: Record<Name, { defaultProps: infer Props }>;
}
  ? Props
  : {};

export default function useThemeProps<
  Theme extends ThemeWithProps,
  Props,
  Name extends keyof any
>(params: {
  props: Props;
  name: Name;
  include: Array<keyof GlobalProps>;
  customProps: { [key: string]: any };
}): Props & ThemedProps<Theme, Name>;
