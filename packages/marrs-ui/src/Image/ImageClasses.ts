import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface ImageClasses {
  /** Styles applied to the root element. */
  root: string;
  broken: string;
}

export type ImageClassKey = keyof ImageClasses;

export function getImageUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsImage', slot);
}

const imageClasses: ImageClasses = generateUtilityClasses('MarrsImage', [
  'root',
  'broken',
  'hidden'
]);

export default imageClasses;
