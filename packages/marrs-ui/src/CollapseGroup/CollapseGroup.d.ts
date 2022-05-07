import { FC, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

/**
 * @description CollapseGroup
 */
export interface CollapseGroupComponent {
  // 当前展开面板的 name, 数组是手风琴模式，单个字符串或者数字是非手风琴模式
  value?: number[] | string | number;
  // 手风琴
  accordion?: boolean;
  // 是否显示内边框
  border?: boolean;
  showArrow?: boolean;
  rightControl?: ReactNode;
}

/**
 * CollapseGroup 操作
 */
// export interface CollapseGroupAction {}

/**
 * CollapseGroup classes-slot
 */
export interface CollapseGroupClasses {
  root?: string;
}

export type CollapseGroupProps = Pick<GlobalProps, 'volume'> &
  ClassesProps<CollapseGroupClasses> &
  CollapseGroupComponent;

declare const CollapseGroup: FC<CollapseGroupProps>;
export default CollapseGroup;
