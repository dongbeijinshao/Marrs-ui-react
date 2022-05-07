import React from 'react';
import { GlobalProps } from '../types/components';

type TabbarProps = GlobalProps & {
  // 当前是哪个name被选中
  current?: string | number;
};

declare const Tabbar: React.FC<TabbarProps>;

export default Tabbar;
