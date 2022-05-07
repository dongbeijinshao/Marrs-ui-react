import clsx from 'clsx';
import { forwardRef } from 'react';
import Button from '../Button';
import Divider from '../Divider';
import Popup from '../Popup';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import {
  generateShouldForwardProp,
  helperFunctions,
  useEventCallback
} from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const { noop } = helperFunctions;

const ComponentName = getComponentName('Dialog');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'header',
      'body',
      'divider',
      'footer',
      'backdrop',
      'popupRoot'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const DialogRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  position: 'relative',
  // height: '100%',
  // minHeight: theme.sizing(150),
  // padding: theme.spacing(4, 0, 0, 0),
  overflow: 'hidden',
  fontSize: theme.sizing(theme.typography.fontSize),
  boxSizing: 'border-box'
}));

const DialogHeader = styled('div', {
  name: ComponentName,
  slot: 'header'
})(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(32, 16, 0, 16),
  ...theme.typography.dialogTitle,
  placeContent: 'center',
  color: theme.palette.text.primary,
  lineHeight: theme.sizing(20),
  minHeight: theme.sizing(20)
}));

const DialogBody = styled('div', {
  name: ComponentName,
  slot: 'body'
})(({ styleProps, theme }) => ({
  ...theme.typography.dialogBody,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: theme.sizing(50),
  textAlign: 'center',
  maxHeight: '60vh',
  overflow: 'auto',
  padding: theme.spacing(28),
  ...(styleProps.title && {
    minHeight: 0,
    padding: theme.spacing(9, 28, 28, 28)
  }),
  fontSize: theme.sizing(15),
  lineHeight: theme.sizing(24),
  color: theme.palette.text.primary
}));

const DialogFooter = styled('div', {
  name: ComponentName,
  slot: 'footer'
})(() => ({
  display: 'flex'
}));

const Dialog = forwardRef(function Dialog(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    children,
    className,
    classes: classesProps,
    visible,
    title,
    showCancelButton = false,
    hideFooter = false,
    confirmText = '确认',
    cancelText = '取消',
    onConfirm = noop,
    onCancel = noop,
    onClose = noop
  } = props;

  const handleConfirm = useEventCallback((e) => {
    e.stopPropagation();
    onConfirm();
  });

  const handleCancel = useEventCallback((e) => {
    e.stopPropagation();
    onCancel();
  });

  const classes = useUtilityClasses({ classes: classesProps });
  const styleProps = {
    title
  };

  return (
    <Popup
      width={280}
      visible={visible}
      onClose={onClose}
      // sx={{ borderRadius: (theme) => theme.sizing(2) }}
      ref={ref}
      classes={classes}
    >
      <DialogRoot className={clsx(classes.root, className)}>
        {title && (
          <DialogHeader className={classes.header}>{title}</DialogHeader>
        )}
        <DialogBody styleProps={styleProps} className={classes.body}>
          {children}
        </DialogBody>
        {!hideFooter && (
          <Divider
            className={classes.divider}
            sx={{ marginTop: 0, marginBottom: 0 }}
            gap={0}
            color="inherit"
          />
        )}
        <DialogFooter className={classes.footer}>
          {showCancelButton && (
            <Button
              volume="big"
              face="text"
              color="secondary"
              fullWidth
              onClick={handleCancel}
              sx={{
                fontSize: (theme) =>
                  theme.sizing(theme.typography.fontSize + 1),
                fontWeight: 400,
                height: (theme) => theme.sizing(44),
                color: (theme) => theme.palette.text.secondary
              }}
            >
              {cancelText}
            </Button>
          )}
          {!hideFooter && (
            <Button
              face="text"
              color="primary"
              volume="big"
              fullWidth
              onClick={handleConfirm}
              sx={{
                fontSize: (theme) =>
                  theme.sizing(theme.typography.fontSize + 1),
                fontWeight: 400,
                height: (theme) => theme.sizing(44)
              }}
            >
              {confirmText}
            </Button>
          )}
        </DialogFooter>
      </DialogRoot>
    </Popup>
  );
});
Dialog.displayName = ComponentName;
Dialog.name = ComponentName;
export default Dialog;
