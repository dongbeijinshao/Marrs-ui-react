import { generateUtilityClass } from '../dependencies/utilityClasses';

export function getRadioGroupUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsRadioGroup', slot);
}
