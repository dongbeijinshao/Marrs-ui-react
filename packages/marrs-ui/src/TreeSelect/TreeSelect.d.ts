import React from 'react';
import { Color, ClassesProps } from '../types/components';

interface TreeSelectClasses {
  root?: string;
}

type TreeSelectProps<T> = ClassesProps<TreeSelectClasses> & {
  value?: T;
  // 颜色
  color?: Color;
  // 左边导航的change事件
  onTabChange?: (name: T) => void;
  //sidebar宽度
  sidebarWidth?: number;
};

declare const TreeSelect: React.FC<TreeSelectProps<any>>;

export default TreeSelect;
