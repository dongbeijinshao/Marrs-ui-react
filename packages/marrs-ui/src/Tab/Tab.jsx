import clsx from 'clsx';
import React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Tab');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};
const TabContent = styled('span', {
  name: ComponentName,
  slot: 'Content'
})(({ styleProps }) => ({
  textAlign: 'center',
  ...(styleProps.ellipsis && {
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    ...(typeof styleProps.children === 'string' && {
      display: '-webkit-box'
    })
  })
}));
const TabRoot = styled('span', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(15),
  lineHeight: theme.sizing(18),
  color: theme.palette.text.secondary,
  padding: theme.spacing(13, 0),
  // minWidth: theme.sizing(60),
  overflow: 'hidden',
  textAlign: 'center',
  ...(styleProps.scrollspy && {
    display: 'inline-flex',
    padding: theme.spacing(13, 18)
  }),

  ...(styleProps.equal && {
    flex: 1
  }),
  ...(styleProps.selected && {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary
  }),
  ...(styleProps.disabled && {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none'
  })
}));

const Tab = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    value,
    children,
    selected,
    color,
    onChange,
    disabled,
    scrollspy = false,
    equal = true,
    ellipsis = true,
    classes: classesProps,
    ...other
  } = props;
  const styleProps = {
    selected,
    color,
    disabled,
    scrollspy,
    equal,
    ellipsis,
    children,
    classes: classesProps
  };
  const handleClick = React.useCallback(
    (event) => {
      if (!selected && onChange) {
        onChange({ event, value, label: children });
      }
    },
    [selected, onChange, value, children]
  );

  const classes = useUtilityClasses(styleProps);

  return (
    <TabRoot
      ref={ref}
      styleProps={styleProps}
      onClick={handleClick}
      className={clsx(classes.root, className)}
      {...other}
    >
      <TabContent styleProps={styleProps}> {children}</TabContent>
    </TabRoot>
  );
});

Tab.displayName = ComponentName;
export default Tab;
