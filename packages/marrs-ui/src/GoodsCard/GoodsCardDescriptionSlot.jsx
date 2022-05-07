import clsx from 'clsx';
import React, { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsCardDescriptionSlot');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsCardDescriptionSlotRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    marginTop: theme.sizing(8)
  };
});

const GoodsCardDescriptionSlot = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsCardDescriptionSlotRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    ></GoodsCardDescriptionSlotRoot>
  );
});

GoodsCardDescriptionSlot.name = ComponentName;
export default GoodsCardDescriptionSlot;
