import { FC, ReactNode } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface CellComponent {
  /* 左侧标题 */
  title: string;
  /* 右侧内容 */
  content?: ReactNode;
  /* 标题下方的描述信息 */
  label?: string | ReactNode;
  /* 是否在 label 后面添加冒号 */
  colon?: boolean;
  /* label对齐方式，可选值为 center right left */
  labelAlign?: 'center' | 'right' | 'left';
  /* 是否使内容居中 */
  center?: boolean;
  /* title 宽度 */
  titleWidth?: number;
  /* label 宽度*/
  labelWidth?: number;
  /* 是否省略点点，默认换行,(点点点时候指定宽度，否则无效) */
  ellipsis?: boolean;
  /* 右边icon showArrow存在时，优先showArrow */
  rightIcon?: ReactNode;
  /* 导航 */
  showArrow?: boolean;
  /* 右边控件,包括按钮、徽章、开关、图片、头像等控件。 */
  rightControl?: ReactNode;
  /* 左侧控件 */
  leftControl?: ReactNode;
  /* 左侧控件相对于标题的位置,left,right */
  leftControlPosition?: 'left' | 'right';
  /* 左边icon标题class */
  leftControlClass?: string;
  /* 单元格背景色 */
  backgroundColor?: string;
}

export interface CellClasses {
  root?: string;
  control?: string;
  title?: string;
  content?: string;
  icon?: string;
}

export type CellProps = GlobalProps & ClassesProps<CellClasses> & CellComponent;

declare const Cell: FC<CellProps>;
export default Cell;
