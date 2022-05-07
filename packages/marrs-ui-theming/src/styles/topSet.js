import { getComponentName as systemgetComponentName } from '@wemo-ui/marrs/styles/topSet';

export const getComponentName = (name) => {
  return systemgetComponentName(name, 'MarrsTheming');
};
