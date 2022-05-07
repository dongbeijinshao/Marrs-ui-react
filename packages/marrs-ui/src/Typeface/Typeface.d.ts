import React from 'react';
import { Variant } from '../styles/createTypography';
import { ColorNameOrValue } from '../types/components';
import { ClassesProps } from '../types/components';

/**
 * @description Typeface
 */
export interface TypefaceComponent {
  // 默认展示样式体
  face?: Variant;
  // 颜色
  color?: ColorNameOrValue;
  // 组件被编译成的原生元素
  component?: React.ElementType;
}

/**
 * Typeface classes-slot
 */
export interface TypefaceClasses {
  root?: string;
}

export type TypefaceProps = ClassesProps<TypefaceClasses> & TypefaceComponent;

declare const Typeface: React.FC<TypefaceProps>;
export default Typeface;
