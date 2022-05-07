import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ButtonClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsButton', slot);
}

const buttonClasses: ButtonClasses = generateUtilityClasses('MarrsButton', [
  'root',
  'disabled'
]) as ButtonClasses;

export default buttonClasses;
