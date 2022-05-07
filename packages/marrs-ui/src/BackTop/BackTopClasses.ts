import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface BackTopClasses {
  root?: string;
}

export type BackTopClassKey = keyof BackTopClasses;

export function getBackTopUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsBackTop', slot);
}

const backTopClasses: BackTopClasses = generateUtilityClasses('MarrsBackTop', [
  'root',
  'hidden'
]);

export default backTopClasses;
