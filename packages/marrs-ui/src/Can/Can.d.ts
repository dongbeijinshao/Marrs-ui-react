import { FC } from 'react';
import { ClassesProps, Size } from '../types/components';
export interface CanComponent {
  // 具体大小
  size?: Size;
  // 3D高度层级, 0-25
  elevation?: number;
  // 是否圆形
  circle?: boolean;
  // 圆角, 基础（默认4px) 的倍数
  radius?: string | number;
}
export interface CanClasses {
  root?: string;
}

export type CanProps = ClassesProps<CanClasses> & CanComponent;

declare const Can: FC<CanProps>;
export default Can;
