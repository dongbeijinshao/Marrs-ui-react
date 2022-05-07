import clsx from 'clsx';
import React from 'react';
import Button from '../Button';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('GoodsActionButton');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsActionButtonRoot = styled(Button, {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => {
  return {
    width: '100%',
    fontSize:
      styleProps?.volume === 'small' ? theme.sizing(13) : theme.sizing(14),
    height: styleProps?.volume === 'small' ? theme.sizing(32) : theme.sizing(40)
  };
});

const GoodsActionButton = React.forwardRef((props, ref) => {
  const { className, text, volume, classes: classesProps, ...other } = props;

  const styleProps = {
    volume,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsActionButtonRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    >
      {text}
    </GoodsActionButtonRoot>
  );
});
GoodsActionButton.name = ComponentName;
GoodsActionButton.displayName = ComponentName;
export default GoodsActionButton;
