import { FC } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface BadgeComponent {
  // 徽标内容
  content?: string | number;
  // 是否仅展示小红点
  dotOnly?: boolean;
  // 是否展示badge的逻辑函数
  showBadge?: (p: any) => boolean;
  // 重新格式化内容
  formatter?: (content: string) => string | number;
}
export interface BadgeClasses {
  root?: string;
  content?: string;
}

export type BadgeProps = GlobalProps &
  ClassesProps<BadgeClasses> &
  BadgeComponent;

declare const Badge: FC<BadgeProps>;
export default Badge;
