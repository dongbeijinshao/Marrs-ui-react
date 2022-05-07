import { SxProps } from '@wemo-ui/marrs-core/system';
import { Theme } from '../styles';

export type PaletteMode = string;

interface ComponentsThemeProps {
  defaultProps?: { [p: string]: any };
  styleOverrides?: { [so: string]: any };
  variants?: { [v: string]: any };
}
export interface Components {
  [componentName: string]: ComponentsThemeProps;
}

export type Offset = {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
};

/** 组件大小preset */
export type Volume = 'tiny' | 'small' | 'medium' | 'big' | 'large';

/** 组件色调preset */
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

/** 自定义颜色 */
export type ColorNameOrValue = Color | string;

export interface GlobalProps {
  // 尺寸规格
  volume?: ColorNameOrValue;
  // 颜色
  color?: Color;
}

export interface Size {
  width?: string | number;
  height?: string | number;
}
export type ClassesProps<T> = {
  classes?: Partial<T>;
  className?: string;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
  ref?: React.RefObject<any>;
  // sx?: React.CSSProperties;
};
