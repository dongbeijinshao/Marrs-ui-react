import { FC } from 'react';
import { Color } from '../types/components';

type BaseSelectorProps<T> = {
  multiple?: boolean;
  // 最大个数
  max?: number;
  // 最小个数
  min?: number;
  // 选中的颜色
  color?: Color;
  // 是否禁用所有单选框
  disabled?: boolean;
  // 初始值
  value?: T[];
  // 子元素排列间距
  // change 事件
  onChange?: (v: T) => void;
};

declare const BaseSelector: FC<BaseSelectorProps<any>>;

export default BaseSelector;
