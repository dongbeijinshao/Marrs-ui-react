import { FC } from 'react';
import { ClassesProps } from '../types/components';

export interface GridComponent {
  // 间距
  gap?: number;
  // 单行展示个数
  column?: number;
}
export interface GridClasses {
  root?: string;
}

export type GridProps = ClassesProps<GridClasses> & GridComponent;

declare const Grid: FC<GridProps>;
export default Grid;
