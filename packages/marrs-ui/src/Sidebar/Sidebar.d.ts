import { FC, EventHandler } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface SidebarComponent {
  // 内容宽度
  width?: number;
  // 默认当前导航项的索引
  value?: number;
}
export interface SidebarAction {
  // 点击时触发
  onChange?: EventHandler<any>;
}

export interface SidebarClasses {
  root?: string;
  badge?: string;
}

/**
 * SiderBar 中每一项的 SidebarItem 属性
 */
export interface SidebarItemProps {
  // 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning`, 默认值为 `primary`
  color?: string;
  // 唯一标识，默认索引
  name?: string | number;
  // 是否选中
  selected?: boolean;
  // 名称内容
  title?: string;
  // 是否显示右上角小红点
  dotOnly?: boolean;
  // 图标右上角徽标的内容
  badge?: number | string;
  // 是否禁用该项
  disabled?: boolean;
}

/**
 * SiderBar 中每一项的 SidebarItem 方法
 */

export interface SidebarItemAction {
  // 点击事件
  onClick?: EventHandler<any>;
}

export type SidebarProps = Pick<GlobalProps, 'color'> &
  ClassesProps<SidebarClasses> &
  SidebarComponent &
  SidebarAction;

declare const Sidebar: FC<SidebarProps>;
export default Sidebar;
