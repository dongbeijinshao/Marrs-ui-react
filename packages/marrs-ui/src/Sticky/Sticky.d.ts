import { FC, EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export type StickyProps = ClassesProps & {
  // 层级
  zIndex?: number;
  // 位置
  position?: string;
  // 偏移量
  offset?: any;
  // 容器
  container?: boolean;
  //onChange
  onChange?: EventHandler;
};

declare const Sticky: FC<StickyProps>;

export default Sticky;
