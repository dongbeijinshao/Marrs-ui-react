import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ProgressClasses {}

export type ProgressClassKey = keyof ProgressClasses;

export function getProgressUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsProgress', slot);
}

const progressClasses: ProgressClasses = generateUtilityClasses(
  'MarrsProgress',
  ['root', 'line', 'outerLabel', 'innerLabel']
);

export default progressClasses;
