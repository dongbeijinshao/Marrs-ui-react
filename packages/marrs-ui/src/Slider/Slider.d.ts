import { FC, EventHandler } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface SliderComponent {
  // 设置方向,可选值 `vertical` `horizontal`
  vertical?: 'vertical' | 'horizontal';
  // 宽度
  width?: number | string;
  // 高度
  height?: number;
  // 圆角,默认4
  borderRadius?: number | string;
  // 选中的高度
  trackHeight?: number;
  // 移动点大小
  thumbSize?: number | string;
  // 移动点颜色
  thumbColor?: string;
  // 最小值
  min?: number | string;
  // 最大值
  max?: number | string;
  // 步长，默认1
  step?: number | string;
  // 默认值
  value?: number | string;
  // 是否禁用
  disabled?: boolean;
}

export interface SliderAction {
  // 值改变时候触发
  onChange?: EventHandler<any>;
}
export interface SliderClasses {
  root?: string;
  rail?: string;
  track?: string;
  thumb?: string;
}

export type SliderProps = Pick<GlobalProps, 'color'> &
  ClassesProps<SliderClasses> &
  SliderComponent &
  SliderAction;

declare const Slider: FC<SliderProps>;
export default Slider;
