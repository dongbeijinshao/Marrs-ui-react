import clsx from 'clsx';
import { forwardRef } from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { alwaysGetSelf, alwaysGetTrue } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Badge');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('content')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const BadgeRoot = styled('span', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => {
  return {
    display: 'inline-flex',
    position: 'relative',
    flexWrap: 'nowrap',
    flexShrink: 0,
    fontSize: theme.sizing(theme.typography.fontSize)
  };
});

const BadgeMain = styled('span', {
  name: ComponentName,
  slot: 'main'
})(({ theme, styleProps }) => {
  return {
    position: 'absolute',
    top: 0,
    right: theme.sizing(4),
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    border: `${theme.sizing(1)} solid ${theme.palette.getFixedContrastText(
      styleProps.color
    )}`,
    background: theme.palette.getColor(styleProps.color).color(),
    color: theme.palette.getFixedContrastText(styleProps.color),
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    ...(styleProps.dotOnly
      ? {
          borderRadius: theme.sizing(6),
          height: theme.sizing(6),
          minWidth: theme.sizing(6)
        }
      : {
          borderRadius: theme.sizing(12),
          padding: theme.spacing(2),
          height: theme.sizing(10),
          display: 'flex',
          placeContent: 'center',
          minWidth: theme.sizing(10),
          lineHeight: theme.sizing(10),
          fontSize: theme.sizing(9),
          ...(!styleProps.showBadge && {
            transform: 'scale(0) translate(50%, -50%)'
          })
        })
  };
});

const Badge = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    include: ['size', 'color']
  });

  const {
    className,
    classes: classesProps,
    color,
    showBadge: showBadgeProps = alwaysGetTrue,
    formatter: formatterProps = alwaysGetSelf,
    content,
    dotOnly = false,
    volume,
    children,
    ...other
  } = props;

  const styleProps = {
    className,
    classes: classesProps,
    color,
    showBadge: content && showBadgeProps(content),
    volume,
    dotOnly
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <BadgeRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
      <BadgeMain styleProps={styleProps} className={classes.content}>
        {dotOnly ? '' : formatterProps(content)}
      </BadgeMain>
    </BadgeRoot>
  );
});
Badge.name = ComponentName;
Badge.displayName = ComponentName;
export default Badge;
