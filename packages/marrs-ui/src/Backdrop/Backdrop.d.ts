import { EventHandler, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface BackdropComponent {
  // 背景是否可见
  visible?: boolean;
  // 背景暗影程度
  alpha?: number;
  // 是否开启关闭点击触发 beforeClose、afterClose
  closeOnTap?: boolean;
  // 背景容器
  container?: ReactNode;
}
export interface BackdropAction {
  // 打开之前触发
  beforeOpen?: EventHandler<any>;
  // 打开之后触发
  afterOpen?: EventHandler<any>;
  // 关闭之前触发
  beforeClose?: EventHandler<any>;
  // 关闭之后触发
  afterClose?: EventHandler<any>;
  // 点击触发
  onClick?: EventHandler<any>;
}
export interface BackdropClasses {
  root?: string;
}

// declare const Backdrop: FC<BackdropProps>;

// export default Backdrop;

export type BackdropProps = Pick<GlobalProps, 'color'> &
  ClassesProps<BackdropClasses> &
  BackdropComponent &
  BackdropAction;

declare const Backdrop: React.FC<BackdropProps>;
export default Backdrop;
