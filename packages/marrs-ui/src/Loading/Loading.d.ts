import { FC, ReactNode } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

/**
 * @description Loading
 */
export interface LoadingComponent {
  // 自定义icon
  icon?: ReactNode;
  // 加载文案
  text?: ReactNode;
}

/**
 * Loading classes-slot
 */
export interface LoadingClasses {
  root?: string;
  icon?: string;
  text?: string;
}

export type LoadingProps = GlobalProps &
  ClassesProps<LoadingClasses> &
  LoadingComponent;

declare const Loading: FC<LoadingProps>;
export default Loading;
