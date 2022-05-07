import { FC, ReactNode } from 'react';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
// import { Theme } from '../styles';
import { ClassesProps, GlobalProps } from '../types/components';
// import { ButtonClasses } from './buttonClasses';

/**
 * @description Button 继承 ButtonBase
 */
export interface ButtonComponent extends ButtonBaseProps {
  // 类型
  face?: 'filled' | 'plain' | 'text';
  // 文本内容中字母的类型，可选值为 `none` `uppercase` `capitalize` `lowercase` `inherit`
  textTransform?: `none` | `uppercase` | `capitalize` | `lowercase` | `inherit`;
  // 左侧icon
  startIcon?: ReactNode;
  // 右边图标
  endIcon?: ReactNode;
  // 形状
  radius?: number | number[];
  // 是否禁用高度视觉
  disableElevation?: boolean;
  // 是否100%宽度
  fullWidth?: boolean;
  // 反转颜色
  reverseColor?: boolean;
  // 是否为圆形按钮
  round?: boolean;
  // 是否禁用
  disabled?: boolean;
  // 是否显示为加载状态
  loading?: boolean;
}

/**
 * Button classes-slot
 */
export interface ButtonClasses {
  root?: string;
  disabled?: string;
  startIcon?: string;
  endIcon?: string;
  text?: string;
}

export type ButtonProps = ButtonComponent &
  GlobalProps &
  ClassesProps<ButtonClasses>;

declare const Button: FC<ButtonProps>;
export default Button;
