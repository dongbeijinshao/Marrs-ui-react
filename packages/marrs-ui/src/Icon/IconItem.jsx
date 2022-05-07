import React from 'react';
import Badge from '../Badge';
import Icon from '../Icon';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { recoveryColor } from '../utils/customUtils';

export const ComponentName = getComponentName('IconItem');

const IconItemRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => {
  return {
    padding: theme.spacing(16),
    textAlign: 'center',
    fontSize: theme.sizing(16)
  };
});

const IconItemContent = styled('div', {
  name: ComponentName,
  slot: 'content'
})(({ theme, styleProps }) => {
  return {
    display: 'flex',
    placeContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.getColor(styleProps.color).color()
  };
});

const IconItemIcon = styled(Icon)(({ theme }) => {
  return {
    fontSize: theme.sizing(28),
    transition: theme.transitions.create('color')
  };
});

const IconItemText = styled('div')(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontSize: theme.sizing(12),
    marginTop: theme.sizing(4)
  };
});

const IconItem = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    name: ComponentName,
    props: inProps
  });
  const {
    // volume,
    badge: badgeProps,
    icon,
    text,
    color,
    textSx,
    iconSx,
    ...other
  } = props;
  const styleProps = {
    color
  };

  const badge =
    badgeProps && typeof badgeProps === 'object'
      ? {
          ...badgeProps
        }
      : {
          content: badgeProps
        };

  const badgePropsForward = {
    color: recoveryColor(color),
    ...badge
  };
  return (
    <IconItemRoot {...other} ref={ref}>
      <Badge {...badgePropsForward}>
        <IconItemContent styleProps={styleProps}>
          <IconItemIcon sx={iconSx} icon={icon} />
          <IconItemText sx={textSx} styleProps={styleProps}>
            {text}
          </IconItemText>
        </IconItemContent>
      </Badge>
    </IconItemRoot>
  );
});

IconItem.displayName = ComponentName;
IconItem.name = ComponentName;
export default IconItem;
