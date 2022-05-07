import { ElementType, EventHandler } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface ButtonBaseComponent {
  // Button 样式类
  className?: string;
  //
  tabIndex?: number;
  // 原生 Button 标签的 type 属性
  component?: ElementType;
  // 是否禁用
  disabled?: boolean;
}

export interface ButtonBaseAction {
  // 失去焦点触发
  onBlur?: EventHandler<any>;
  // 点击触发
  onClick?: EventHandler<any>;
  //
  onContextMenu?: EventHandler<any>;
  //
  onDragLeave?: EventHandler<any>;
  // 获取焦点触发
  onFocus?: EventHandler<any>;
  //
  onFocusVisible?: EventHandler<any>;
  // 按下键盘触发
  onKeyDown?: EventHandler<any>;
  // 键盘弹起触发
  onKeyUp?: EventHandler<any>;
  // 鼠标移入触发
  onMouseDown?: EventHandler<any>;
  // 鼠标移出触发
  onMouseLeave?: EventHandler<any>;
  onMouseUp?: EventHandler<any>;
  //
  onTouchEnd?: EventHandler<any>;
  //
  onTouchMove?: EventHandler<any>;
  //
  onTouchStart?: EventHandler<any>;
}

export interface ButtonBaseClasses {
  root?: string;
}

export type ButtonBaseProps = GlobalProps &
  ClassesProps<ButtonBaseClasses> &
  ButtonBaseComponent &
  ButtonBaseAction;

declare const ButtonBase: React.FC<ButtonBaseProps>;
export default ButtonBase;
