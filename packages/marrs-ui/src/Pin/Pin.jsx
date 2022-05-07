import clsx from 'clsx';
import * as React from 'react';
import Draggable from 'react-draggable';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import {
  generateShouldForwardProp,
  helperFunctions,
  useForkRef
} from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
// import pinClasses from './PinClasses';

const { noop } = helperFunctions;
const getOffset = (styleProps) => {
  return {
    top: styleProps.offset.top,
    right: styleProps.offset.right,
    bottom: styleProps.offset.bottom,
    left: styleProps.offset.left
  };
};

const ComponentName = getComponentName('Pin');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const PinRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ styleProps, theme }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize),
    position: 'fixed',
    zIndex: theme.zIndex.pin,
    ...getOffset(styleProps)
  };
});

const Pin = React.forwardRef(function Pin(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    // tip,
    draggable = true,
    onClick = noop,
    className,
    classes: classesProps,
    offset = {},
    ...other
  } = props;

  const styleProps = {
    className,
    classes: classesProps,
    offset // 位置信息
  };

  const classes = useUtilityClasses(styleProps);

  const [dragging, setDragging] = React.useState(false);

  const handleDrag = () => {
    setDragging(true);
  };

  const handleStop = (e) => {
    if (!dragging) {
      onClick(e);
    }
    setDragging(false);
  };

  const draggerRef = React.useRef();
  const handleRef = useForkRef(ref, draggerRef);

  const core = (
    <PinRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={handleRef}
      {...other}
    ></PinRoot>
  );

  const contained = draggable ? (
    <Draggable
      onDrag={handleDrag}
      onStop={handleStop}
      nodeRef={draggerRef}
      bounds="parent"
    >
      {core}
    </Draggable>
  ) : (
    core
  );

  return contained;
});

export default Pin;
