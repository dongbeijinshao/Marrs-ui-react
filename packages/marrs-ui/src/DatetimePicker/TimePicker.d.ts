import React from 'react';
import { ClassesProps } from '../types/components';

export interface TimePickerComponent {
  // 最大可选小时
  minHour?: string | number;
  // 最小可选小时
  maxHour?: string | number;
  // 最大可选分钟
  minMinute?: string | number;
  // 最小可选分钟
  maxMinute?: string | number;
  // 默认值
  defaultValue?: any[];
  // 默认值
  value?: any[];
  // 默认值
  height?: 300;
}

export interface TimePickerAction {
  // 值改变触发
  onChange?: React.EventHandler<any>;
}

export interface TimePickerClasses {
  root?: string;
}
export type TimePickerProps = ClassesProps<TimePickerClasses> &
  TimePickerComponent &
  TimePickerAction;

declare const TimePicker: React.FC<TimePickerProps>;
export default TimePicker;
