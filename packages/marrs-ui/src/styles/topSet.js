import capitalize from '../utils/capitalize';

export const topic = 'Marrs';

export const getComponentName = (componentName, prefix = topic) => {
  return `${prefix}${capitalize(componentName)}`;
};
