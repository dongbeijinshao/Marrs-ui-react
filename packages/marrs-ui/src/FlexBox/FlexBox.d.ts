import { FC } from 'react';
import { ClassesProps } from '../types/components';

export interface FlexBoxComponent {
  // 换行方式
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  // 是否所有子元素自动成为容器成员
  container?: boolean;
  // 是否是容器中的子元素
  item?: boolean;
  // 间隔, 4px 的倍数, 默认 0
  gap?: number;
  // 对齐方式
  textAlign?: string;
  // 交叉轴上如何对齐
  alignItems?: string;
  // 主轴上的对齐方式
  justifyContent?: string;
  // 占据多少位置，24 等分取整数
  space?: number;
  // 行间隔
  rowGap?: string;
  // 列间隔
  columnGap?: string;
}

export interface FlexBoxClasses {
  root?: string;
  container?: string;
  item?: string;
}

export type FlexBoxProps = ClassesProps<FlexBoxClasses> & FlexBoxComponent;

declare const FlexBox: FC<FlexBoxProps>;
export default FlexBox;
