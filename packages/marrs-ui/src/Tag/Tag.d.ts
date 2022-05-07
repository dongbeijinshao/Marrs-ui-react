import { FC } from 'react';
import { ButtonProps } from '../Button';
import { ClassesProps, GlobalProps } from '../types/components';

/**
 * @description Tag 继承 Button
 */
export type TagComponent = ButtonProps;
/**
 * Tag classes-slot
 */
export interface TagClasses {
  root?: string;
  startIcon?: string;
  endIcon?: string;
  content?: string;
  color?: string;
  radius?: number | number[];
}

export type TagProps = Pick<GlobalProps, 'color'> &
  ClassesProps<TagClasses> &
  TagComponent;

declare const Tag: FC<TagProps>;
export default Tag;
