import clsx from 'clsx';
import { forwardRef } from 'react';
import Popup from '../Popup';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateClassesKey, generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Drawer');

const useUtilityClasses = (styleProps) => {
  const { position, classes } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey([{ position }, 'position'])],
    ...normalizeClasses('backdrop', 'popupRoot')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const DrawerRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize),
    padding: theme.spacing(8)
  };
});

const Drawer = forwardRef(function Drawer(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    classes: classesProps,
    children,
    visible,
    contentSpace = '80%',
    position = 'left',
    onClose = noop
  } = props;

  const classes = useUtilityClasses({
    position,
    classes: classesProps
  });
  return (
    <Popup
      visible={visible}
      position={position}
      contentSpace={contentSpace}
      onClose={onClose}
      classes={classes}
      ref={ref}
    >
      <DrawerRoot className={clsx(classes.root, className)}>
        {children}
      </DrawerRoot>
    </Popup>
  );
});
Drawer.displayName = ComponentName;
Drawer.name = ComponentName;
export default Drawer;
