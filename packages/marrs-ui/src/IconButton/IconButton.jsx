import clsx from 'clsx';
import * as React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('IconButton');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('icon')
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const IconButtonRoot = styled(Button, {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  width: theme.sizing(24),
  height: theme.sizing(24),
  minWidth: theme.sizing(24),
  transition: theme.transitions.create(['padding', 'font-size'], {
    duration: theme.transitions.duration.shortest
  }),
  ...{
    tiny: { padding: theme.sizing(10), fontSize: theme.sizing(10) },
    small: { padding: theme.sizing(15), fontSize: theme.sizing(15) },
    medium: { padding: theme.sizing(20), fontSize: theme.sizing(20) },
    large: { padding: theme.sizing(25), fontSize: theme.sizing(25) }
  }[styleProps.volume || 'medium']
}));

const IconButton = React.forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    classes: classesProps,
    spin,
    radius,
    icon,
    ...other
  } = props;

  const styleProps = {
    volume: props.volume,
    className,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  other.radius = radius || '50%';

  return (
    <IconButtonRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      <Icon className={classes.icon} icon={icon} spin={spin === true} />
    </IconButtonRoot>
  );
});
IconButton.displayName = ComponentName;

export default IconButton;
