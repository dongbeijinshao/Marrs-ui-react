import React from 'react';
import {
  ActionSheetAction,
  ActionSheetComponent
} from '../ActionSheet/ActionSheet';
import { ClassesProps } from '../types/components';

/**
 * @description ActivityGridSheet 继承 ActionSheet，拥有 ActionSheet 所有属性， ActivityGridSheet 子组件必须是  ActivityGridSheetLine 子组件
 */
export type ActivityGridSheetComponent = ActionSheetComponent;

/**
 * ActivityGridSheet操作
 */
export type ActivityGridSheetAction = ActionSheetAction;

export interface ActivityGridSheetClasses {
  root?: string;
}

export type ActivityGridSheetProps = ClassesProps<ActivityGridSheetClasses> &
  ActivityGridSheetComponent &
  ActivityGridSheetAction;

declare const ActivityGridSheet: React.FC<ActivityGridSheetProps>;
export default ActivityGridSheet;
