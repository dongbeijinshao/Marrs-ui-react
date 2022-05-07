import { FC, EventHandler } from 'react';
import { ClassesProps } from '../types/components';

export interface FormComponent {
  // 表单项 label 宽度，默认单位为px
  labelWidth: string | number;
  // 初始值
  initialValues: any;
  // 表单项 label对齐方式
  labelAlign: string;
  // 是否在 label 后面添加冒号
  colon?: boolean;
}
export interface FormAction {
  // 触发表单change事件
  onChange?: EventHandler<any>;
  // 提交表单且验证通过后触发
  onSubmit?: EventHandler<any>;
  // 提交表单且验证不通过后触发
  onFailed?: EventHandler<any>;
}

export interface FormClasses {
  root?: string;
}

export type FormProps = ClassesProps<FormClasses> & FormComponent & FormAction;

declare const Form: FC<FormProps>;
export default Form;
