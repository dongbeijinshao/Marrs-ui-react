import { FC, ReactNode } from 'react';
import { Size, GlobalProps, ClassesProps } from '../types/components';

export interface EmptyComponent {
  // 自定义内容控件
  contentControl?: ReactNode;
  // 描述文字
  description?: string;
  // 补充文案
  text?: string;
  // 自定义底部内容
  actionControl?: ReactNode;
  // 自定义尺寸
  size?: Size;
}

export interface EmptyClasses {
  root?: string;
  contentControl?: string;
  description?: string;
  content?: string;
  text?: string;
  actionControl?: string;
}

export type EmptyProps = Pick<GlobalProps, 'volume'> &
  ClassesProps<EmptyClasses> &
  EmptyComponent;

declare const Empty: FC<EmptyProps>;
export default Empty;
