import React from 'react';
import { ClassesProps } from '../types/components';

export interface DatePickerComponent {
  // 最大可选时间
  maxDate?: string | Date;
  // 最小可选时间
  minDate?: string | Date;
  // 默认值
  defaultValue?: any[];
  // 默认值
  value?: any[];
  // 默认值
  height?: number;
}

export interface DatePickerAction {
  // 值改变触发
  onChange?: React.EventHandler<any>;
}

export interface DatePickerClasses {
  root?: string;
}
export type DatePickerProps = ClassesProps<DatePickerClasses> &
  DatePickerComponent &
  DatePickerAction;

declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
