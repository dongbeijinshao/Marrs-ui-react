import { ReactNode, EventHandler } from 'react';
import { ClassesProps } from '../types/components';

/**
 *  Toast 指令式调用，提供 info , success , fail , loading 调用
 */
export interface ToastComponent {
  // Toast 是否可见
  visible?: boolean;
  // 显示文案
  message?: string;
  // 持续时间，默认毫秒；设置为 0 时，需要手动关闭
  duration?: number;
  // 自定义Icon
  icon?: ReactNode;
  // Toast 显示的位置,默认 middle
  position?: 'top' | 'bottom' | 'middle';
}

export interface ToastAction {
  // 当toast显示时触发
  onOpened?: EventHandler<any>;
  // 取消触发
  onClose?: EventHandler<any>;
  // 销毁时回调
  destroy?: EventHandler<any>;
}

/**
 * Toast classes-slot
 */
export interface ToastClasses {
  root?: string;
  icon?: string;
  text?: string;
}

/**
 * Toast 调用完返回的实例方法
 */
export interface TypeShowToast {
  destroy: () => void;
  update: (message: any) => void;
}

export type ToastProps = ClassesProps<ToastClasses> &
  ToastComponent &
  ToastAction;

declare const Toast: {
  info: (option: ToastProps) => TypeShowToast;
  success: (option: ToastProps) => TypeShowToast;
  fail: (option: ToastProps) => TypeShowToast;
  loading: (option: ToastProps) => TypeShowToast;
};
export default Toast;
