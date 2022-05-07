import { EventHandler, FC, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface CheckboxBaseComponent {
  /** 判断类型, radio, checkbox */
  type?: 'checkbox' | 'radio';
  // radio 默认值
  defaultValue?: string | number;
  // radio 值
  value?: string | number;
  // 未选中的checked
  uncheckedIcon?: ReactNode;
  // 勾选中的checked
  icon?: ReactNode;
  // icon的值: checkbox | radio | none
  iconStyle?: 'checkbox' | 'radio' | 'none';
  // 是否选中
  checked?: boolean;
  // 是否默认选中
  defaultChecked?: boolean;
  // label 是否禁用
  labelDisabled?: boolean;
  // 禁用文本和选中框
  disabled?: boolean;
  // 文本内容
  label?: string;
}
export interface CheckboxBaseAction {
  // 模拟点击事件
  onClick?: EventHandler<any>;
  // 模拟change事件
  onChange?: EventHandler<any>;
}
export interface CheckboxBaseClasses {
  root?: string;
  icon?: string;
  label?: string;
}

export type CheckboxBaseProps = GlobalProps &
  CheckboxBaseAction &
  ClassesProps<CheckboxBaseClasses> &
  CheckboxBaseComponent;

declare const CheckboxBase: FC<CheckboxBaseProps>;
export default CheckboxBase;
