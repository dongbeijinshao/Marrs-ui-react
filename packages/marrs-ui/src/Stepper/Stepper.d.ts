import { ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface StepperComponent {
  // 类型,可选值 `filled` `plain` `text`
  face?: 'filled' | 'plain' | 'text';
  // 默认值
  defaultValue?: number;
  // value值
  value?: number;
  // 小数点个数
  decimal?: number;
  // 步长
  step?: number;
  // 最大范围
  max?: number;
  // 最小范围
  min?: number;
  // 是否禁用
  disabled?: boolean;
  // 主题字体,默认 t7
  tl?: string;
  // 左侧减号图标
  minusIcon?: ReactNode;
  // 右侧加号图标
  addIcon?: ReactNode;
}

export interface StepperAction {
  // 值改变事件
  onChange?: (num: number) => void;
}

export interface StepperClasses {
  root?: string;
}

export type StepperProps = Pick<GlobalProps, 'color'> &
  ClassesProps<StepperClasses> &
  StepperComponent &
  StepperAction;

declare const Stepper: React.FC<StepperProps>;
export default Stepper;
