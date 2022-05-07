import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Backdrop from '../Backdrop';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp, useEventCallback } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import createBorderRadius from './createBorderRadius';
import createTransform from './createTransform';

const ComponentName = getComponentName('Popup');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    ...normalizeClasses('backdrop', 'popupRoot')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const PopupRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(18),
  position: 'fixed',
  width: theme.sizing(styleProps.contentSpace),
  backgroundColor: theme.palette.common.white,
  transition: 'none',
  ...createBorderRadius(styleProps),
  ...(!styleProps.offset && createTransform(styleProps))
}));

export default function Popup(inProps) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    children,
    className,
    classes: classesProps,
    visible,
    position = 'middle',
    contentSpace = 280,
    onClose,
    radius = 8,
    offset,
    ...others
  } = props;
  const classes = useUtilityClasses({
    classes: classesProps
  });
  const [backdropVisible, setBackdropVisible] = useState(false);

  const [popupVisible, setPopupVisible] = useState(false);
  const [isShowChildren, setIsShowChildren] = useState(false);

  const styleProps = {
    className,
    classes,
    visible: popupVisible,
    position,
    contentSpace,
    radius,
    offset
  };

  const handleClick = useEventCallback((e) => {
    e.stopPropagation();
  });

  const transitionEnd = () => {
    setIsShowChildren(visible);
  };

  useEffect(() => {
    let timer;

    if (visible) {
      setBackdropVisible(visible);
      setIsShowChildren(visible);
      timer = setTimeout(() => {
        setPopupVisible(visible);
      }, 0);
    } else {
      setPopupVisible(visible);
      timer = setTimeout(() => {
        setBackdropVisible(visible);
      }, 0);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [visible]);
  return (
    <Backdrop
      visible={backdropVisible}
      afterClose={onClose}
      className={classes.backdrop}
      offset={offset}
      // styleProps={styleProps}
    >
      <PopupRoot
        styleProps={styleProps}
        onClick={handleClick}
        className={clsx(classes.popupRoot, className)}
        onTransitionEnd={transitionEnd}
        {...others}
      >
        {isShowChildren ? children : null}
      </PopupRoot>
    </Backdrop>
  );
}
