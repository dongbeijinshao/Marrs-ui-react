import clsx from 'clsx';
import * as React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateClassesKey, generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Typeface');

const useUtilityClasses = (styleProps) => {
  const { classes, face } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey({ face })]
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const TypefaceContainer = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize),
    ...theme.typography[styleProps.face],
    color: theme.palette
      .getColor(styleProps.color, theme.palette.text.primary)
      .color()
  };
});

const Typeface = React.forwardRef(function Typeface(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    include: []
  });
  // 只有other会被传下去
  const {
    children,
    className,
    classes: classesProps,
    color,
    component = 'div',
    face = 'title',
    ...other
  } = props;

  // 样式相关的属性
  const styleProps = { face, color, className, classes: classesProps };
  const classes = useUtilityClasses(styleProps);
  return (
    <TypefaceContainer
      className={clsx(className, classes.root)}
      as={component}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {children}
    </TypefaceContainer>
  );
});
Typeface.displayName = ComponentName;
Typeface.name = ComponentName;
export default Typeface;
