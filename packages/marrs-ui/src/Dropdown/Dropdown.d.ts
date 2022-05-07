import { FC } from 'react';
import { ClassesProps } from '../types/components';

/**
 * @description Dropdown
 */
export interface DropdownComponent {
  // 唯一标识
  name?: string;
  // 选项数组, text:文字, value:标识符
  options?: DropdownOptionsItem[];
  // 在 group 中显示的标题
  title?: string;
  // Dropdown 显示当前选择的值
  value?: string | number;
  // 是否禁用
  disabled?: boolean;
}

/**
 * @description Dropdown 中的每一项 都是DropdownOptionsItem
 */
export interface DropdownOptionsItem {
  // 显示文案
  text: string;
  // 当前的值
  value: string | number;
}

/**
 * Dropdown 操作
 */
// export interface DropdownAction {}

/**
 * Dropdown classes-slot
 */
export interface DropdownClasses {
  root?: string;
  popup?: string;
}

export type DropdownProps = ClassesProps<DropdownClasses> & DropdownComponent;

declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
