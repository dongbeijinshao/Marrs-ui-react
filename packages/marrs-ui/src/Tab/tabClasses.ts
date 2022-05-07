import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface TabClasses {}

export type TabClassKey = keyof TabClasses;

export function getTabUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsTab', slot);
}

const tabClasses: TabClasses = generateUtilityClasses('MarrsTab', ['root']);

export default tabClasses;
