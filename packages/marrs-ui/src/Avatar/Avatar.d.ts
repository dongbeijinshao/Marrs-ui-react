import { FC, ReactNode } from 'react';

export type AvatarProps = {
  // Avatar 样式类
  className?: string;
  // 尺寸,可选值为 `tiny` `small` `medium` `large`,默认值为 `medium`
  volume?: string;
  // 指定头像的形状,默认值50%
  radius?: number | string;
  // 头像的自定义图标
  icon?: ReactNode;
};

declare const Avatar: FC<AvatarProps>;

export default Avatar;
