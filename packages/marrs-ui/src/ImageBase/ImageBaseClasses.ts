import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ImageClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ImageClassKey = keyof ImageClasses;

export function getImageUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsImageBase', slot);
}

const imageClasses: ImageClasses = generateUtilityClasses('MarrsImageBase', [
  'root'
]);

export default imageClasses;
