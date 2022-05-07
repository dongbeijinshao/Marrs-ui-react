import { EventHandler, FC } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface TabComponent {
  // 是否选中
  selected?: boolean;
  // 是否禁用
  disabled?: boolean;
  // 默认值
  value?: number | string;
  //是否开启滚动
  scrollspy?: boolean;
  //布局是否为等分模式
  equal?: boolean;
  //文字超出是否显示省略号
  ellipsis?: boolean;
}
export interface TabAction {
  // 值改变触发
  onChange?: EventHandler<any>;
}

export interface TabClasses {
  root?: string;
}

export type TabProps = Pick<GlobalProps, 'color'> &
  ClassesProps<TabClasses> &
  TabComponent &
  TabAction;

declare const Tab: FC<TabProps>;
export default Tab;
