import clsx from 'clsx';
import React from 'react';
import { getComponentName } from '../styles/topSet';
import { assert } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import Circle from './Circle';
import Line from './Line';

const ComponentName = getComponentName('Progress');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const defaultOverrideLable = (percent) => {
  return percent + '%';
};

const Progress = React.forwardRef((props, ref) => {
  const {
    className,
    classes: classesProps,
    overrideLabel = defaultOverrideLable,
    volume = 4,
    // line | circle
    type = 'line',
    color = 'primary',
    radius,
    value,
    labelPlace = 'none',
    ...other
  } = props;

  assert(
    !isNaN(value),
    `进度条的数值不可以为非数字， 这里接收到的 '${value}' 是个 ${typeof value}`
  );

  const styleProps = {
    className,
    classes: classesProps,
    volume,
    type,
    color,
    radius: radius || volume * 2,
    labelPlace,
    percent: value || 0
  };

  const Painter = type === 'circle' ? Circle : Line;

  const classes = useUtilityClasses(styleProps);

  return (
    <Painter
      styleProps={styleProps}
      overrideLabel={overrideLabel}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    ></Painter>
  );
});

export default Progress;
