import { EventHandler, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

/**
 * @description CheckboxGroup
 */
export interface CheckboxGroupComponent {
  // 是否横向排列方向
  row?: boolean;
  //  最大可选数量
  max?: number;
  // 自定义icon
  icon?: ReactNode;
  // 是否禁用所有单选框
  disabled?: boolean;
  // 默认值
  defaultValue?: string | number;
  // 初始值 Array<string | number>
  value?: Array<string | number>;
  // 子元素排列margin间距
  gap?: number;
}

/**
 * CheckboxGroup 操作
 */
export interface CheckboxGroupAction {
  // change 事件
  onChange?: EventHandler<any>;
}

/**
 * CheckboxGroup classes-slot
 */
export interface CheckboxGroupClasses {
  root?: string;
}

export type CheckboxGroupProps = GlobalProps &
  ClassesProps<CheckboxGroupClasses> &
  CheckboxGroupComponent &
  CheckboxGroupAction;

declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
