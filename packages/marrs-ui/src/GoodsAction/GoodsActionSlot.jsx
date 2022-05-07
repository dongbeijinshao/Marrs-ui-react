import clsx from 'clsx';
import React, { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsActionSlot');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsActionSlotRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(() => {
  return {};
});

const GoodsActionSlot = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, classes: classesProps, ...other } = props;

  const styleProps = { classes: classesProps };
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsActionSlotRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    ></GoodsActionSlotRoot>
  );
});

GoodsActionSlot.name = ComponentName;
GoodsActionSlot.displayName = ComponentName;

export default GoodsActionSlot;
