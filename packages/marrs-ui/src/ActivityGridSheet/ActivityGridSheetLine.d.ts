import React from 'react';
import { ClassesProps } from '../types/components';

/**
 * @description ActivityGridSheetLine 子组件,独占一行，用户自定义内容
 */
export interface ActivityGridSheetLineClasses {
  root?: string;
}

export type ActivityGridSheetLineProps =
  ClassesProps<ActivityGridSheetLineClasses>;

declare const ActivityGridSheetLine: React.FC<ActivityGridSheetLineProps>;
export default ActivityGridSheetLine;
