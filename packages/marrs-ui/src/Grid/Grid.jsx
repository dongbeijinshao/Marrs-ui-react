import clsx from 'clsx';
import { Children, forwardRef } from 'react';
import { useThemeProps } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';

export const ComponentName = getComponentName('Grid');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GridRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ styleProps, theme }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize),
    display: 'grid',
    gridTemplateColumns: `repeat(${styleProps.column}, 1fr)`,
    gap: theme.spacing(styleProps.gap)
  };
});

const Grid = forwardRef(function Grid(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    className,
    sx,
    gap = 0,
    column,
    children,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    gap,
    column: column || Children.toArray(children).length,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);
  return (
    <GridRoot
      sx={sx}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </GridRoot>
  );
});

Grid.displayName = ComponentName;
Grid.name = ComponentName;
export default Grid;
