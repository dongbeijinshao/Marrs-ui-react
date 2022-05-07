import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { alpha } from '../dependencies/system';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import {
  generateShouldForwardProp,
  helperFunctions,
  useEventCallback
} from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Backdrop');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const { noop, resolved } = helperFunctions;

const BackdropRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  overflow: 'hidden',
  position: 'fixed',
  top: styleProps.offset || 0,
  bottom: 0,
  left: 0,
  right: 0,
  transition: theme.transitions.create(['opacity']),
  zIndex: theme.zIndex.drawer,
  ...(!styleProps.show && { opacity: 0 }),
  ...(!styleProps.show && { pointerEvents: 'none' }),
  backgroundColor: alpha(theme.palette.grey[900], styleProps.alpha)
}));

const Backdrop = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    classes: classesProps,
    visible,
    container = document.body,
    alpha = 0.8,
    beforeOpen = resolved,
    afterOpen = noop,
    beforeClose = resolved,
    afterClose = noop,
    onClick = noop,
    closeOnTap = true,
    offset,
    ...others
  } = props;

  const [show, setShow] = useState(false);

  const styleProps = { show, alpha, className, classes: classesProps, offset };

  const handleClick = useEventCallback(async (e) => {
    onClick(e);

    if (!closeOnTap) return;

    await beforeClose(e);
    document.body.style.overflow = 'auto';
    afterClose();
  });

  const handleOpen = useEventCallback(async (e) => {
    await beforeOpen(e);
    afterOpen();
  });
  useEffect(() => {
    if (visible) {
      handleOpen();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setShow(visible);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible, handleOpen]);

  const classes = useUtilityClasses(styleProps);

  return createPortal(
    <BackdropRoot
      styleProps={styleProps}
      onClick={handleClick}
      className={clsx(classes.root, className)}
      ref={ref}
      {...others}
    />,
    container
  );
});
Backdrop.name = ComponentName;
Backdrop.displayName = ComponentName;

export default Backdrop;
