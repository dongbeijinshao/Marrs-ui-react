import { useThemeProps } from '@wemo-ui/marrs-core/system';
import clsx from 'clsx';
import React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('SpaceSlot');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SpaceSlotRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({})
})(({ theme, styleProps }) => ({}));

const SpaceSlot = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });
  const { ...other } = props;
  const classes = useUtilityClasses({});

  return (
    <SpaceSlotRoot className={clsx(classes.root)} {...other}></SpaceSlotRoot>
  );
});

SpaceSlot.name = ComponentName;

export default SpaceSlot;
