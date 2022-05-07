import { FC } from 'react';
import {
  ColorNameOrValue,
  GlobalProps,
  ClassesProps
} from '../types/components';

export interface DividerComponent {
  // spacing tip与线的间隙
  gap?: number;
  // 是否垂直的,默认 false
  vertical?: boolean;
  // 线厚度
  thickness?: number;
  // 勾选中的checked
  color?: ColorNameOrValue;
  // 自定义
  tipStart?: string;
}

export interface DividerClasses {
  root?: string;
  vertical?: string;
  horizontal?: string;
  line?: string;
  tip?: string;
}

export type DividerProps = Pick<GlobalProps, 'color'> &
  ClassesProps<DividerClasses> &
  DividerComponent;

declare const Divider: FC<DividerProps>;
export default Divider;
