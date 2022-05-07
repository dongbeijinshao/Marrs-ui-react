import { FC, EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export interface PickerComponent {
  // picker 标示名称
  name: string;
  // 显示高度
  height?: string;
  // 每项宽度
  itemHeight?: string;
  // 默认值
  defaultValue?: number | string;
}
export interface PickerAction {
  // 值改变触发
  onChange?: EventHandler<any>;
}

export interface PickerClasses {
  root?: string;
  mask?: string;
  column?: string;
}

export type PickerProps = ClassesProps<PickerClasses> &
  PickerComponent &
  PickerAction;

declare const Picker: FC<PickerProps>;
export default Picker;
