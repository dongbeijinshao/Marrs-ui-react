import clsx from 'clsx';
import React from 'react';
import { styled, useTheme } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { customUtils, useForkRef } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Circle');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('circle', 'label')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const { toRGB } = customUtils;

const CircleRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const CircleLabel = styled('span', {
  name: ComponentName,
  slot: 'Label'
})(({ theme, styleProps }) => {
  return {
    fontSize: theme.sizing(14),
    color: theme.palette.getColor(styleProps.color).color(),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
});

const CreateCircle = (props) => {
  const { volume: volumeProps, color, percent } = props;

  const theme = useTheme();

  const volume = String(theme.spacing(volumeProps)).match(/(\d|\.)+/)[0];

  const radius = 50 - volume / 2;
  const pathString =
    'M 50,50 m 0,-' +
    radius +
    '\n     a ' +
    radius +
    ',' +
    radius +
    ' 0 1 1 0,' +
    2 * radius +
    '\n     a ' +
    radius +
    ',' +
    radius +
    ' 0 1 1 0,-' +
    2 * radius;
  const len = Math.PI * 2 * radius;

  const pathStyle = {
    strokeDasharray: len + 'px ' + len + 'px',
    strokeDashoffset:
      ((100 - Math.min(100, Math.max(percent, 0))) / 100) * len + 'px',
    transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
  };
  return (
    <svg viewBox="0 0 100 100">
      <path
        d={pathString}
        strokeLinecap="round"
        stroke={toRGB(theme.palette[color].main, 0.1)}
        strokeWidth={volume}
        fillOpacity={0}
      ></path>
      <path
        d={pathString}
        strokeLinecap="round"
        stroke={theme.palette[color].main}
        strokeWidth={volume}
        fillOpacity="0"
        style={pathStyle}
      ></path>
    </svg>
  );
};

const Circle = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    styleProps: inStyleProps,
    overrideLabel,
    className,
    classes: classesProps
  } = props;

  const circleRef = React.useRef();
  const handleRef = useForkRef(ref, circleRef);

  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    const circleNode = circleRef.current;
    let { width } = circleNode.getBoundingClientRect();
    setWidth(width);
  }, []);

  const styleProps = {
    ...inStyleProps,
    className,
    classes: classesProps,
    width
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <CircleRoot ref={handleRef} className={clsx(classes.root, className)}>
      <CreateCircle {...styleProps} className={classes.circle} />
      <CircleLabel styleProps={styleProps} className={classes.label}>
        {overrideLabel(styleProps.percent)}
      </CircleLabel>
    </CircleRoot>
  );
});
Circle.displayName = ComponentName;
export default Circle;
