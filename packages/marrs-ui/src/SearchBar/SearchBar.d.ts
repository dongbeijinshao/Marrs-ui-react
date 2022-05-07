import { EventHandler, FC, ReactNode } from 'react';
import { ClassesProps } from '../types/components';

/**
 *  SearchBar 继承 Field 组件，Field 相关属性，请查看 Field
 */
export interface SearchBarComponent {
  // 搜索框的值
  value?: any;
  // 搜索框的默认值
  defaultValue?: any;
  // 搜索框的placeholder
  placeholder?: string;
  // 左侧label控件
  leftActionControl?: ReactNode;
  // 左侧搜索控件
  leftIcon?: ReactNode;
  // 搜索框圆角
  radius?: number;
  // 搜索框内右边控件;包括按钮、徽章、开关、图片、头像等控件。
  rightControl?: ReactNode;
  // 是否在搜索框右侧显示
  rightActionControl?: ReactNode;
  // 是否启用清除图标，点击清除图标后会清空输入框
  clearable?: boolean;
  // 是否自动获取焦点
  autoFocus?: boolean;
  // 输入框的内容布局
  textAlign?: 'left' | 'center' | 'right';
}

export interface SearchBarAction {
  // 输入框按下enter时触发;回调参数当前值
  onSearch?: EventHandler<any>;
  // 输入时触发
  onInput?: EventHandler<any>;
  // 聚焦时触发
  onFocus?: EventHandler<any>;
  // 失焦时触发
  onBlur?: EventHandler<any>;
}
export interface SearchBarClasses {
  root?: string;
  leftActionControl?: string;
  content?: string;
  field?: string;
  rightActionControl?: string;
}

export type SearchBarProps = ClassesProps<SearchBarClasses> &
  SearchBarComponent &
  SearchBarAction;

declare const SearchBar: FC<SearchBarProps>;
export default SearchBar;
