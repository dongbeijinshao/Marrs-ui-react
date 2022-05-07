import { generateUtilityClass } from '../dependencies/utilityClasses';

export function getSwitchUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsSwitch', slot);
}
