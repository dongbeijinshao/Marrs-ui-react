import {
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export interface PopupClasses {
  root: string;
}

export type PopupClassKey = keyof PopupClasses;

export function getPopupUtilityClass(slot: string): string {
  return generateUtilityClass('MarrsPopup', slot);
}

export default generateUtilityClasses('MarrsPopup', ['root']);
