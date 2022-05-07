import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface CheckboxClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CheckboxClassKey = keyof CheckboxClasses;

export function getCheckboxUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsCheckbox', slot);
}

const checkboxClasses: CheckboxClasses = generateUtilityClasses(
  'MarrsCheckbox',
  ['root', 'disabled']
) as CheckboxClasses;

export default checkboxClasses;
