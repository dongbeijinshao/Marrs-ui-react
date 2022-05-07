import { FC } from 'react';
import { ClassesProps } from '../types/components';

/**
 * @description CellGroup
 */
export interface CellGroupComponent {
  /* 背景色 */
  backgroundColor?: string;
}

/**
 * CellGroup 操作
 */
export interface CellGroupAction {}

/**
 * CellGroup classes-slot
 */
export interface CellGroupClasses {
  root?: string;
}

export type CellGroupProps = ClassesProps<CellGroupClasses> &
  CellGroupComponent &
  CellGroupAction;

declare const CellGroup: React.FC<CellGroupProps>;
export default CellGroup;
