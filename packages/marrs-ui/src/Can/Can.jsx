import clsx from 'clsx';
import { forwardRef } from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateClassesKey, generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Can');

const useUtilityClasses = (styleProps) => {
  const { circle, classes } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey({ circle })]
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CanContainer = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => {
  const { width, height } = styleProps.size;

  return {
    overflow: 'hidden',
    // display: 'inline-block',
    position: 'relative',
    fontSize: theme.sizing(theme.typography.fontSize),
    ...(styleProps.circle && { borderRadius: '50%' }),
    ...(!styleProps.circle && {
      borderRadius: theme.radius.create(styleProps.radius)
    }),
    ...(styleProps.elevation && {
      boxShadow: theme.shadows.create(styleProps.elevation)
    }),
    ...((width || height) && {
      width: theme.sizing(width || height),
      height: theme.sizing(height || width)
    })
  };
});

const Can = forwardRef(function Can(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    classes: classesProps,
    size = {},
    elevation = 0,
    circle = false,
    radius = 0,
    children,
    ...other
  } = props;

  // 样式相关的属性
  const styleProps = {
    className,
    classes: classesProps,
    circle,
    elevation,
    radius,
    size
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <CanContainer
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {children}
    </CanContainer>
  );
});
Can.name = ComponentName;
Can.displayName = ComponentName;
export default Can;
