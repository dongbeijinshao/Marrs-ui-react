import { EventHandler, FC } from 'react';
import { ClassesProps } from '../types/components';

/**
 * @description Dialog
 */
export interface DialogComponent {
  // 是否展示Dialog
  visible?: boolean;
  // 标题
  title?: string;
  // 内容，只在 Dialog 的指令式调用中使用
  content?: string;
  // 是否展示取消按钮
  showCancelButton?: boolean;
  // 确认文案
  confirmText?: string;
  // 取消文案
  cancelText?: string;
  // 是否隐藏底部
  hideFooter?: boolean;
}

/**
 * Dialog 操作
 */
export interface DialogAction {
  // 确认触发
  onConfirm?: EventHandler<any>;
  // 取消触发
  onCancel?: EventHandler<any>;
  // 关闭触发
  onClose?: EventHandler<any>;
}

/**
 * Dialog classes-slot
 */
export interface DialogClasses {
  root?: string;
  header?: string;
  divider?: string;
  footer?: string;
  backdrop?: string;
  popupRoot?: string;
  body?: string;
}

export type DialogProps = ClassesProps<DialogClasses> &
  DialogComponent &
  DialogAction;

declare const Dialog: FC<DialogProps> & {
  confirm: (option: Omit<DialogProps, 'visible'>) => void;
  alert: (option: Omit<DialogProps, 'visible' | 'onCancel'>) => void;
};
export default Dialog;
