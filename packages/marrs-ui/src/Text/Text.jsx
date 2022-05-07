import * as React from 'react';
import { useTheme } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import {
  assert,
  generateClassesKey,
  generateShouldForwardProp
} from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Text');

const useUtilityClasses = (styleProps) => {
  const { classes, tl = 'inherit' } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey({ tl })]
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const TextContainer = styled('span', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => {
  const { tl, color } = styleProps;
  return {
    ...(tl !== 'inherit' && {
      ...theme.typography.textLevel[tl]
    }),
    fontSize: theme.sizing(theme.typography.fontSize),
    color: theme.palette.getColor(color).color()
  };
});

const Text = React.forwardRef(function Text(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    include: []
  });

  const theme = useTheme();

  const {
    children,
    color = theme.palette.text.primary,
    component = 'span',
    tl = 'inherit',
    ...other
  } = props;

  assert(
    typeof children === 'string',
    `Text组件内只能是string类型节点, 但你给了个${typeof children}`
  );
  const styleProps = { tl, color };
  const classes = useUtilityClasses(styleProps);
  return (
    <TextContainer
      as={component}
      className={classes.root}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {children}
    </TextContainer>
  );
});

export default Text;
