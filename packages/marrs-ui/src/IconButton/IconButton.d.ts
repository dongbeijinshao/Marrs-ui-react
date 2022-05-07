import { FC, ReactNode } from 'react';

export type IconButtonProps = {
  // IconButton 样式类
  className?: string;
  // 尺寸,可选值为 `tiny` `small` `medium` `large`,默认值为 `medium`
  volume?: string;
  // 指定形状
  radius?: number | string;
  // 是否旋转
  spin?: boolean;
  // 图标
  icon?: ReactNode;
};

declare const IconButton: FC<IconButtonProps>;

export default IconButton;
