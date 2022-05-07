import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface FlexBoxClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type FlexBoxClassKey = keyof FlexBoxClasses;

export function getFlexBoxUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsFlexBox', slot);
}

const flexBoxClasses: FlexBoxClasses = generateUtilityClasses('MarrsFlexBox', [
  'root'
]);

export default flexBoxClasses;
