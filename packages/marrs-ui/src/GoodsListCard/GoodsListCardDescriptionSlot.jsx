import clsx from 'clsx';
import { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsListCardDescriptionSlot');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardDescriptionSlotRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    marginTop: theme.sizing(8)
    // marginTop: 100
  };
});

const GoodsListCardDescriptionSlot = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardDescriptionSlotRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    ></GoodsListCardDescriptionSlotRoot>
  );
});

GoodsListCardDescriptionSlot.name = ComponentName;
export default GoodsListCardDescriptionSlot;
