import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses
} from '../dependencies/utilityClasses';

export const generateUtilityClassByName =
  (componentName: string) => (slot: string) =>
    generateUtilityClass(componentName, slot);

export const generateUtilityClassesByName =
  (componentName: string) => (slot: string[]) =>
    generateUtilityClasses(componentName, slot);

export const composeClassesByName = (
  ComponentName: string,
  slots: Record<string, ReadonlyArray<string | false | undefined | null>>,
  classes: Record<string, string> | undefined
): Record<string, string> => {
  const composedClasses = composeClasses(
    slots,
    generateUtilityClassByName(ComponentName),
    classes
  );
  return composedClasses;
};

export const normalizeClasses = (...classNames: any) => {
  const result: any = {};
  classNames.forEach((cls: any) => {
    result[cls] = [cls];
  });
  return result;
};
