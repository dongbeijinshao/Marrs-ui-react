import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ProgressClasses {}

export type ProgressClassKey = keyof ProgressClasses;

export function getProgressUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsTitleBar', slot);
}

const TitleBarClasses: ProgressClasses = generateUtilityClasses(
  'MarrsTitleBar',
  ['icon', 'text', 'desc']
);

export default TitleBarClasses;
