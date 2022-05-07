import { EventHandler, FC, ReactNode } from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

/**
 * Field 继承 Cell,相关属性可以参考 Cell
 */
export interface FieldComponent {
  // 标志
  name?: string;
  // Field 的类型
  type?: any;
  // 输入框左侧文本
  label?: string;
  // 是否在 label 后面添加冒号
  colon?: boolean;
  //size
  size?: 'large' | 'medium' | 'small';
  //值
  value?: any;
  // 初始值
  defaultValue?: any;
  // 表单校验规则,数据结构
  rules?: RulesItem[];
  // 左侧文本宽度，默认单位为px,默认值6em
  labelWidth?: string | number;
  // 输入框对齐方式，可选值为 center right, left
  textAlign?: 'center' | 'right' | 'left';
  // label对齐方式，可选值为 center right, left
  labelAlign?: 'center' | 'right' | 'left';
  // 是否只读
  readonly?: boolean;
  // 是否禁用输入框
  disabled?: boolean;
  // 是否启用清除图标，点击清除图标后会清空输入框
  clearable?: boolean;
  // 右边icon
  rightIcon?: boolean | ReactNode;
  // 左侧控件
  leftControl?: boolean | ReactNode;
  // 表单必填项
  required?: boolean;
  // 最大长度
  maxLength?: number;
  // 是否显示字数统计，需要设置maxlength属性
  showWord?: boolean;
  // 是否使内容居中
  center?: boolean;
  // 是否省略点点，默认换行,(点点点时候指定宽度，否则无效)
  ellipsis?: boolean;
  // 导航
  showArrow?: boolean;
  // 是否将输入框标红
  error?: boolean;
  // 错误文案
  errorMessage?: string | ReactNode;
  // 自适应高度
  autoHeight?: boolean;
  // 文本域的行
  rows?: number;
  // 输入框占位提示文字
  placeholder?: string;
  // 右边控件,包括按钮、徽章、开关、图片、头像等控件。
  rightControl?: ReactNode;
  // 是否 关闭input 标签原生的自动完成属性,默认关闭
  autocompleteOff?: boolean;
  // 是否自动获取焦点
  autoFocus?: boolean;
}

/**
 * 每一项的校验规则
 */
export interface RulesItem {
  // 是否为必选字段
  required?: boolean;
  // 错误提示文案
  message?: string;
  // 通过正则表达式进行校验
  pattern?: string;
  // 本项规则的触发时机,可选值为 onChange、onBlur,默认onBlur
  trigger?: string;
}
export interface FieldAction {
  // 输入框内容变化时触发,回调参数:event: Event
  onInput?: EventHandler<any>;
  // 点击清除按钮时触发
  onClear?: EventHandler<any>;
  // 获得焦点触发
  onFocus?: EventHandler<any>;
  // 失去焦点触发
  onBlur?: EventHandler<any>;
  // 键盘回车事件触发
  onKeyPressEnter?: EventHandler<any>;
}
export interface FieldClasses {
  root?: string;
  content?: string;
  input?: string;
  message?: string;
  word?: string;
  icon?: string;
}

export type FieldProps = Pick<GlobalProps, 'color'> &
  ClassesProps<FieldClasses> &
  FieldComponent &
  FieldAction;

declare const Field: FC<FieldProps>;
export default Field;
