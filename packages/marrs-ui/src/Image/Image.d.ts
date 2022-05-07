import { EventHandler, FC, ReactNode } from 'react';
import { ImageBaseProps } from '../ImageBase/ImageBase';
import { ClassesProps, Size } from '../types/components';

/**
 * 增强版的 img 标签,原生 img 支持的属性，该组件会支持
 */
export interface ImageComponent {
  // 是否禁用
  disabled?: boolean;
  // 自定义加载失败,可以是布尔型，默认失败图片；或者自定义失败图片
  fallback?: ReactNode | boolean;
  // 填充模式
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  // 图片路径
  src: string;
  // 自定义尺寸
  size?: Size;
  // 加载内容
  loading?: ReactNode;
  // 指定图片是否按照原始大小展示，如果是 true，设置 size 无效
  origin?: boolean;
  // 圆角值
  radius?: number | number[];
}

export interface ImageAction {
  // 加载触发
  onLoad?: EventHandler<any>;
  // 加载失败
  onError?: EventHandler<any>;
}

export interface ImageClasses {
  root?: string;
  cover?: string;
  img?: string;
}

export type ImageProps = ImageBaseProps &
  ClassesProps<ImageClasses> &
  ImageComponent &
  ImageAction;

declare const Image: FC<ImageProps>;
export default Image;
