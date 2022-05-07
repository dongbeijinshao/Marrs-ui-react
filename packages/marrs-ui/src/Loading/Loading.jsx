import { IconHubbleBubble } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import { styled } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import Text from '../Text';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';

const ComponentName = getComponentName('Loading');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('icon', 'text')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const LoadingRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  color: theme.palette.getColor(styleProps.color).color(),
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const Loading = React.forwardRef(function Loading(inProps, ref) {
  const props = useThemeProps({
    name: ComponentName,
    props: inProps
  });
  // const icon = <Icon icon={<IconHubbleBubble />} />;
  const {
    color,
    volume,
    icon,
    text,
    className,
    classes: classesProps,
    ...other
  } = props;
  const styleProps = { color, volume, classes: classesProps };

  const classes = useUtilityClasses(styleProps);

  return (
    <LoadingRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <Icon
        {...other}
        icon={icon || <Icon icon={<IconHubbleBubble />} />}
        className={classes.icon}
      />
      {text && <Text className={classes.text}>{text}</Text>}
    </LoadingRoot>
  );
});
Loading.displayName = ComponentName;
Loading.name = ComponentName;
export default Loading;
