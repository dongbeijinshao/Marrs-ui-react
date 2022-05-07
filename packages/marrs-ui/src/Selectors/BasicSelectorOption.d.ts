import React, { EventHandler } from 'react';
import { ClassesProps, Color } from '../types/components';

// interface BasicSelectorOptionClasses {}
type BasicSelectorOptionProps = ClassesProps<any> & {
  // 标题
  label: string;
  // 是否选中
  checked?: string;
  // 主题色
  color?: Color;
  // 是否禁用
  disabled?: boolean;
  // 初始值
  value?: string | number;
  onChange?: EventHandler<any>;
  onClick?: EventHandler<any>;
};

declare const BasicSelectorOption: React.FC<BasicSelectorOptionProps>;

export default BasicSelectorOption;
