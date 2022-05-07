import clsx from 'clsx';
import React, { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsListCardColumn');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardColumnRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(() => {
  //书写样式
});

const GoodsListCardColumn = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardColumnRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    ></GoodsListCardColumnRoot>
  );
});

GoodsListCardColumn.name = ComponentName;
export default GoodsListCardColumn;
