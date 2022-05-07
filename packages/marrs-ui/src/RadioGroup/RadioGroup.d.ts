import React, { EventHandler } from 'react';
import { GlobalProps } from '../types/components';

type RadioGroupProps = GlobalProps & {
  wrap?: string;
  // 是否横向排列方向
  row?: boolean;
  // 自定义icon
  icon: React.ReactNode;
  // 是否禁用所有单选框
  disabled?: boolean;
  // 默认值
  defaultValue?: string | number;
  // 初始值
  value?: string | number;
  // 子元素排列margin间距
  gap?: number;
  onChange?: EventHandler<any>;
};

declare const RadioGroup: React.FC<RadioGroupProps>;

export default RadioGroup;
