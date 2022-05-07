import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface PinClasses {}

export type PinClassKey = keyof PinClasses;

export function getPinUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsPin', slot);
}

const pinClasses: PinClasses = generateUtilityClasses('MarrsPin', ['root']);

export default pinClasses;
