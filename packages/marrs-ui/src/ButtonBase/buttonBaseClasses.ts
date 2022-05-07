import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ButtonBaseClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: string;
}

export type ButtonBaseClassKey = keyof ButtonBaseClasses;

export function getButtonBaseUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsButtonBase', slot);
}

const buttonBaseClasses: ButtonBaseClasses = generateUtilityClasses(
  'MarrsButtonBase',
  ['root', 'disabled']
);

export default buttonBaseClasses;
