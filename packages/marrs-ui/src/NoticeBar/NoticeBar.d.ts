import { FC, ReactNode } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface NoticeBarComponent {
  // 左边控件
  leftSlot?: ReactNode;
  // 右边控件
  rightSlot?: ReactNode;
  // 文案
  text?: string;
  // 是否居中
  center?: boolean;
  // 最大宽度
  maxWidth?: string;
  // 速度
  speed?: number;
  // 是否滚动
  scrollable?: boolean;
  // 是否显示
  visible?: boolean;
  // 延迟
  delay?: number;
  // 方向
  direction?: string;
}

export interface NoticeBarClasses {
  root?: string;
  verticalRoot?: string;
  vertical?: string;
  text?: string;
  content?: string;
  noticeText?: string;
  leftSlot?: string;
  rightSlot?: string;
}

export type NoticeBarProps = Pick<GlobalProps, 'color'> &
  ClassesProps<NoticeBarClasses> &
  NoticeBarComponent;

declare const NoticeBar: FC<NoticeBarProps>;
export default NoticeBar;
