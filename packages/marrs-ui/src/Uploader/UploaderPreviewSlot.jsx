import clsx from 'clsx';
import { forwardRef } from 'react';
import SpaceSlot from '../SpaceSlot';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('UploaderPreviewSlot');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const UploaderPreviewSlotRoot = styled(SpaceSlot, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    marginTop: theme.sizing(8)
    // marginTop: 100
  };
});

const UploaderPreviewSlot = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <UploaderPreviewSlotRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    ></UploaderPreviewSlotRoot>
  );
});

UploaderPreviewSlot.name = ComponentName;
export default UploaderPreviewSlot;
