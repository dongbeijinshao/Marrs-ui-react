import { FC, ReactNode, EventHandler } from 'react';
import { GlobalProps, ClassesProps } from '../types/components';

export interface RateComponent {
  // 是否禁用
  disabled?: boolean;
  // 自定义空icon
  emptyIcon?: ReactNode;
  // 自定义icon
  icon?: ReactNode;
  // 自定义数量
  num?: number;
  // 自定义间距
  gap?: number | string;
  // 是否只读,默认false
  readonly?: boolean;
  // 设置展示值
  value?: number;
}

export interface RateAction {
  // 值改变触发
  onChange?: EventHandler<any>;
}

export interface RateClasses {
  root?: string;
  box?: string;
  iconCom?: string;
  halfIcon?: string;
}

export type RateProps = Pick<GlobalProps, 'color'> &
  ClassesProps<RateClasses> &
  RateComponent &
  RateAction;

declare const Rate: FC<RateProps>;
export default Rate;
