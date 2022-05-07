import { FC, EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export type SidebarItemProps = {
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
  // 点击事件
  onClick?: EventHandler<any>;
};

declare const SidebarItem: FC<SidebarItemProps>;

export default SidebarItem;
