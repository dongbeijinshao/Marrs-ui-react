import { FC, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface IconComponent {
  // 是否旋转
  spin?: boolean;
  // icon名称
  icon?: ReactNode;
  // icon大小
  size?: number;
}

/**
 * Icon classes-slot
 */
export interface IconClasses {
  root?: string;
}

export type IconProps = GlobalProps & ClassesProps<IconClasses> & IconComponent;

declare const Icon: FC<IconProps>;
export default Icon;
