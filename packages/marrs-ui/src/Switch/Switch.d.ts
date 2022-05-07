import { EventHandler } from 'react';
import {
  ClassesProps,
  GlobalProps,
  ColorNameOrValue
} from '../types/components';

export interface SwitchComponent {
  // 默认值
  defaultValue?: boolean;
  // 是否选中
  checked?: boolean;
  // 是否禁用
  disabled?: boolean;
  // 自定义选中颜色，默认color对应主色
  checkedColor?: ColorNameOrValue;
  // 自定义非选中颜色，暂不支持颜色名, 默认计算checkColor的0.38
  uncheckedColor?: ColorNameOrValue;
  // 是否用loading
  loading?: boolean;
}

export interface SwitchAction {
  // click 事件
  onClick?: EventHandler<any>;
  // change 事件
  onChange?: EventHandler<any>;
}

export interface SwitchClasses {
  root?: string;
  disabled?: string;
}

export type SwitchProps = GlobalProps &
  ClassesProps<SwitchClasses> &
  SwitchComponent &
  SwitchAction;

declare const Switch: React.FC<SwitchProps>;
export default Switch;
