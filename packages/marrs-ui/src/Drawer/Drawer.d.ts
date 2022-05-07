import { EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export interface DrawerComponent {
  // Drawer 是否可见
  visible: boolean;
  // Drawer 位置
  position?: 'top' | 'bottom' | 'left' | 'right';
  // Drawer 内容空间大小
  contentSpace?: string;
}

export interface DrawerAction {
  // 关闭弹窗
  onClose?: EventHandler<any>;
}

export interface DrawerClasses {
  root?: string;
  backdrop?: string;
  popupRoot?: string;
}

export type DrawerProps = ClassesProps<DrawerClasses> &
  DrawerComponent &
  DrawerAction;

declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
