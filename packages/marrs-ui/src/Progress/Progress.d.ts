import { FC } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface ProgressComponent {
  // 覆盖输入值的方法，如 (p) => p + '%'
  overrideLabel?: any;
  // 类型，可选值 `line` `circle`
  type?: 'line' | 'circle';
  // 圆角
  radius?: number | string;
  // 初始值
  value?: number | string;
  // label 放的位置 ，仅在 line 模式下有用
  labelPlace?: 'inner' | 'outer';
}
export interface ProgressClasses {
  root?: string;
  circle?: string;
  label?: string;
  box?: string;
  rail?: string;
  track?: string;
  inner?: string;
  outer?: string;
}
export type ProgressProps = GlobalProps &
  ClassesProps<ProgressClasses> &
  ProgressComponent;

declare const Progress: FC<ProgressProps>;
export default Progress;
