import clsx from 'clsx';
import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { alpha } from '../dependencies/system';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Toast');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('icon', 'text')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const ToastRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  position: 'fixed',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',

  ...(styleProps.position === 'middle' && {
    top: '50%'
  }),
  ...(styleProps.position === 'top' && {
    top: '10%'
  }),
  ...(styleProps.position === 'bottom' && {
    bottom: '10%'
  }),
  zIndex: theme.zIndex.modal,
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(14, 24),
  borderRadius: theme.radius.create(4),
  transition: theme.transitions.create(['opacity']),
  opacity: styleProps.visible ? 1 : 0,
  width: 'fit-content',
  boxSizing: 'content-box',
  ...(styleProps.type === 'iconToast' && {
    minWidth: theme.sizing(72),
    minHeight: theme.sizing(64),
    padding: 0
  })

  // visibility: styleProps.visible ? 'visible' : 'hidden'
}));

const ToastText = styled('div', {
  name: ComponentName,
  slot: 'text'
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  color: theme.palette.common.white,
  padding: theme.spacing(0, 10),
  ...(styleProps.type === 'iconToast' && {
    fontSize: theme.sizing(theme.typography.fontSize - 2)
  })
}));

const UpIcon = styled('span', {
  name: ComponentName,
  slot: 'icon'
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize * 2),
  color: theme.palette.common.white,
  marginBottom: theme.sizing(6)
}));

const Toast = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    type,
    className,
    classes: classesProps,
    children,
    visible,
    icon,
    message,
    duration = 2000,
    position = 'middle',
    destroy = noop,
    ...other
  } = props;

  const styleProps = { type, visible, position, classes: classesProps };

  const classes = useUtilityClasses(styleProps);

  useEffect(() => {
    if (duration === 0) {
      return;
    }

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [destroy, duration]);

  if (!visible) {
    return null;
  }

  return createPortal(
    <ToastRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children || (icon && <UpIcon as={icon} />)}
      {message && <ToastText styleProps={styleProps}>{message}</ToastText>}
    </ToastRoot>,
    document.body
  );
});
Toast.displayName = ComponentName;
Toast.name = ComponentName;
export default Toast;
