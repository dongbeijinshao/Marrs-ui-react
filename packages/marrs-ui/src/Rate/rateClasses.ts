import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface RateClasses {
  root: string;
  disabled: string;
}

export type RateClassKey = keyof RateClasses;

export function getRateUtilityClass(slot: string): string {
  return generateUtilityClass('marrs-rate', slot);
}

const rateClasses: RateClasses = generateUtilityClasses('marrs-rate', [
  'root',
  'disabled'
]);

export default rateClasses;
