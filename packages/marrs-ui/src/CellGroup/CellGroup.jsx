import clsx from 'clsx';
import { Children, cloneElement, forwardRef } from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('CellGroup');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
    // ...normalizeClasses('control')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CellGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  // backgroundColor: theme.palette.background.paper,
  ...theme.mixins,
  position: 'relative'
}));

const CellGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    // 自定义className
    className,
    // 背景色
    backgroundColor,
    // 子元素
    children,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    backgroundColor,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <CellGroupRoot
      styleProps={styleProps}
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          backgroundColor
        });
      })}
    </CellGroupRoot>
  );
});
CellGroup.displayName = ComponentName;
CellGroup.name = ComponentName;
export default CellGroup;
