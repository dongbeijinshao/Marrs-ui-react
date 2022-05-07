import clsx from 'clsx';
import { forwardRef } from 'react';
import { composeClasses } from '../dependencies/utilityClasses';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import buttonBaseClasses, {
  getButtonBaseUtilityClass
} from './buttonBaseClasses';
const ComponentName = getComponentName('ButtonBase');

const useUtilityClasses = (styleProps) => {
  const { disabled, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  const composedClasses = composeClasses(
    slots,
    getButtonBaseUtilityClass,
    classes
  );

  return composedClasses;
};

export const ButtonBaseRoot = styled('button', {
  name: ComponentName,
  // slot如果为空或者Root，则该组件的prop.classes、styleProps、theme、xs、as会默认传递下去
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    exclude: ['classes', 'styleProps', 'volume', 'color', 'face']
  }),
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none'
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    cursor: 'default'
  }
});

const ButtonBase = forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });
  const {
    children,
    className,
    classes: classesProps,
    component = 'button',
    disabled = false,
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    // onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    type = 'button',
    ...other
  } = props;

  const styleProps = {
    ...props,
    component,
    disabled,
    tabIndex,
    className,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <ButtonBaseRoot
      as={component}
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      onBlur={onBlur}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onDragLeave={onDragLeave}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      ref={ref}
      tabIndex={disabled ? -1 : tabIndex}
      type={type}
      {...other}
    >
      {children}
    </ButtonBaseRoot>
  );
});
ButtonBase.displayName = ComponentName;
export default ButtonBase;
