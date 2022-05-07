import { EventHandler, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface UploaderComponent {
  // 上传区域icon组件,图片组件等
  icon?: ReactNode;
  // 上传区域文字提示
  text?: string;
  // 是否禁用文件上传
  disabled?: boolean;
  // 是否开启图片多选
  multiple?: boolean;
  // 文件上传数量限制, 0代表无限制
  maxCount?: number;
  // 自定义上传控件
  uploaderControl?: ReactNode;
  // 是否展示预览图
  showPreview?: boolean;
  // 已上传的文件列表,
  value?: valueItem[];
  // 预览删除icon
  deleteIconControl?: ReactNode;
}

/**
 * value 数据结构
 * value 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值
 */
interface valueItem {
  // 文件的地址
  url?: string;
  // 文件的base64
  dataUrl?: string;
  // 状态(pending(上传中), failed(失败)，success（成功))
  status?: string;
  // 提示信息
  message?: string;
}

export interface UploaderAction {
  // 上传change事件,回调参数 { event, file, fileList}
  onChange?: EventHandler<any>;
  // 删除事件，回调参数 {file}
  onDelete?: EventHandler<any>;
}

export interface UploaderClasses {
  root?: string;
  icon?: string;
  input?: string;
  text?: string;
  wrapper?: string;
  previewRoot?: string;
  uploader?: string;
}

export type UploaderProps = Pick<GlobalProps, 'volume'> &
  ClassesProps<UploaderClasses> &
  UploaderComponent &
  UploaderAction;

declare const Uploader: React.FC<UploaderProps>;
export default Uploader;
