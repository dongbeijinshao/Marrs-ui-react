import clsx from 'clsx';
import { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName(
  'GoodsListCardDescriptionBottomSlot'
);

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardDescriptionBottomSlotRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flex: 1
}));

const GoodsListCardDescriptionBottomSlot = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardDescriptionBottomSlotRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    ></GoodsListCardDescriptionBottomSlotRoot>
  );
});

GoodsListCardDescriptionBottomSlot.displayName = ComponentName;
GoodsListCardDescriptionBottomSlot.name = ComponentName;
export default GoodsListCardDescriptionBottomSlot;
