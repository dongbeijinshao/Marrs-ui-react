import React from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface ActionSheetComponent {
  /* 是否显示动作面板 */
  visible?: boolean;
  /* 选项上方的描述信息 */
  title?: string;
  /* 副标题 */
  description?: string;
  /* 是否显示关闭按钮 */
  showCancelButton?: boolean;
  /* 关闭按钮文案 */
  cancelButtonText?: string;
  items?: ActionSheetItem[];
  /* 是否显示关闭图标,如果有关闭图标，headStartBtnText，headEndBtnText 无效 */
  closeable?: boolean;
  /* 头部左侧自定义模块 */
  headStartBtnText?: React.ReactNode;
  /* 头部右侧自定义模块 */
  headEndBtnText?: React.ReactNode;
  /* 弹窗圆角 */
  radius?: number;
}

/**
 * ActionSheet操作
 */
export interface ActionSheetAction {
  // 点击关闭的回调
  onClose?: React.EventHandler<any>;
  // 点击某一项的回调
  onClickItem?: React.EventHandler<any>;
}

export interface ActionSheetItem {
  /* 标题，默认主题色 */
  title?: string;
  /* 副标题 */
  label?: string;
  icon?: React.ReactNode;
  /* 不可点击 */
  disabled?: boolean;
}

export interface ActionSheetClasses {
  root?: string;
  header?: string;
  footer?: string;
  body?: string;
  title?: string;
  item?: string;
  description?: string;
  itemLabel?: string;
  itemTitle?: string;
  backdrop?: string;
  popupRoot?: string;
}

export type ActionSheetProps = Pick<GlobalProps, 'color'> &
  ClassesProps<ActionSheetClasses> &
  ActionSheetComponent &
  ActionSheetAction;

declare const ActionSheet: React.FC<ActionSheetProps>;
export default ActionSheet;
