import { ReactNode } from 'react';
import { CellProps } from '../Cell';
import { ClassesProps } from '../types/components';

/**
 *  Collapse 继承 Cell
 */
export interface CollapseComponent {
  // 标题右侧展/开收起按钮
  rightControl?: ReactNode | string;
  // 唯一标识符，默认为索引值
  name?: string | number;
  // 是否展开
  expand?: boolean;
  // 自定义面板内容
  contentControl?: ReactNode;
}

/**
 * Collapse classes-slot
 */
export interface CollapseClasses {
  root?: string;
  cell?: string;
  wrapper?: string;
  content?: string;
}

export type CollapseProps = CellProps &
  ClassesProps<CollapseClasses> &
  CollapseComponent;

declare const Collapse: React.FC<CollapseProps>;
export default Collapse;
