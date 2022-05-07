import IconItem from '@wemo-ui/marrs/Icon/IconItem';
import clsx from 'clsx';
import React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsActionIcon');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsActionIconRoot = styled(IconItem, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => ({
  padding: theme.spacing(0, 8)
}));

const GoodsActionIcon = React.forwardRef((props, ref) => {
  const { className, classes: classesProps, ...other } = props;

  const styleProps = { classes: classesProps };

  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsActionIconRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    />
  );
});
GoodsActionIcon.name = ComponentName;
GoodsActionIcon.displayName = ComponentName;
export default GoodsActionIcon;
