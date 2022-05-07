import { FC, EventHandler, ReactNode } from 'react';
import { ClassesProps } from '../types/components';

export type TitleBarProps = ClassesProps & {
  volume?: string;
  // 标题
  title?: string;
  // 描述
  desc?: string;
  // 开始icon
  startIcon?: ReactNode;
  // 是否显示开始icon
  showStartIcon?: boolean;
  // 是否显示右箭头
  showRightArrow?: boolean;
  // 右侧点击
  rightClick?: EventHandler;
};

declare const TitleBar: FC<TitleBarProps>;

export default TitleBar;
