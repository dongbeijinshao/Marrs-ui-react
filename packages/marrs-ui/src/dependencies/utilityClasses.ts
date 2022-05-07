import { topic } from '../styles/topSet';

const globalPseudoClassesMapping: { [key: string]: string } = {
  active: `${topic}-active`,
  checked: `${topic}-checked`,
  completed: `${topic}-completed`,
  disabled: `${topic}-disabled`,
  error: `${topic}-error`,
  expanded: `${topic}-expanded`,
  focused: `${topic}-focused`,
  focusVisible: `${topic}-focusVisible`,
  required: `${topic}-required`,
  selected: `${topic}-selected`,
  hidden: `${topic}-hidden`
};
export function generateUtilityClass(
  componentName: string,
  slot: string
): string {
  const globalPseudoClass = globalPseudoClassesMapping[slot];
  return globalPseudoClass || `${componentName}-${slot}`;
}

export function generateUtilityClasses<T extends string>(
  componentName: string,
  slots: T[]
): Record<T, string> {
  const result = {} as Record<T, string>;
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

export function composeClasses(
  slots: Record<string, ReadonlyArray<string | false | undefined | null>>,
  getUtilityClass: (slot: string) => string,
  classes: Record<string, string> | undefined
): Record<string, string> {
  const output = {} as Record<string, string>;
  Object.keys(slots).forEach((slot) => {
    output[slot] = slots[slot]
      .reduce((acc: any, key: any) => {
        if (key) {
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }

          acc.push(getUtilityClass(key));
        }

        return acc;
      }, [])
      .join(' ');
  });
  return output;
}
