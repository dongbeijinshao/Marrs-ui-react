import { FC, EventHandler } from 'react';
import { GlobalProps } from '../types/components';

type TabBarProps = GlobalProps & {
  /** 当前是哪个name被选中 */
  current?: string | number;
  /** 当前item被选中触发 */
  onSelect?: EventHandler<any>;
};

declare const TabBarItem: FC<TabBarProps>;

export default TabBarItem;
