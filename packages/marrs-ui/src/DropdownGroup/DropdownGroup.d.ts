import { EventHandler, FC } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

/**
 * @description DropdownGroup
 */
export interface DropdownGroupComponent {
  direction?: boolean;
  color?: string;
}

/**
 * DropdownGroup classes-slot
 */
export interface DropdownGroupClasses {
  root?: string;
  content?: string;
  text?: string;
  item?: string;
}

export interface DrawerAction {
  onChange?: EventHandler<any>;
}

export type DropdownGroupProps = ClassesProps<DropdownGroupClasses> &
  DropdownGroupComponent &
  DrawerAction;

declare const DropdownGroup: FC<DropdownGroupProps>;
export default DropdownGroup;
