import { EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export interface BackTopComponent {
  // 是否顺滑跳跃
  smooth?: boolean;
  // 是否可以拖拽
  draggable?: boolean;
  // 开始显示的时机 window.scrollY > edge
  edge?: number;
  // 初始化位置,可选值 "top"|"bottom"|"left"|"right"
  offset?: 'top' | 'bottom' | 'left' | 'right';
}
export interface BackTopAction {
  // 点击触发
  onClick?: EventHandler<any>;
}
export interface BackTopClasses {
  root?: string;
  button?: string;
  icon?: string;
}

export type BackTopProps = ClassesProps<BackTopClasses> &
  BackTopComponent &
  BackTopAction;

declare const BackTop: React.FC<BackTopProps>;
export default BackTop;
