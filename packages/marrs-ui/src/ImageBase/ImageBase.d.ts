import { FC } from 'react';

export type ImageBaseProps = {
  // 加载触发
  onLoad?: Function;
  // 加载失败
  onError?: Function;
};

declare const ImageBase: FC<ImageBaseProps>;

export default ImageBase;
