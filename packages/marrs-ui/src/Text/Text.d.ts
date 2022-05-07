import React from 'react';
import { TextLevel } from '../styles/createTypography';
import { ColorNameOrValue } from '../types/components';
import { GlobalProps, ClassesProps } from '../types/components';

export interface TextComponent {
  // 自定义主题字体, 可选值t1 t2 t3 t4 t5 t6 t7
  tl?: keyof TextLevel;
  // 该组件被编译成那种元素，默认 span
  component?: React.ElementType;
}

export interface TextClasses {
  root?: string;
}

export type TextProps = Pick<GlobalProps, 'color'> &
  ClassesProps<TextClasses> &
  TextComponent;

declare const Text: React.FC<TextProps>;
export default Text;
