import clsx from 'clsx';
import { forwardRef, useRef, useState } from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { useEventCallback, useForkRef } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Slider');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('rail', 'track', 'thumb')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SliderRoot = styled('span', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  display: 'inline-block',
  boxSizing: 'content-box',
  position: 'relative',
  touchAction: 'none',
  width: '100%',
  height: theme.sizing(styleProps.height),
  borderRadius: theme.radius.create(styleProps.borderRadius),
  userSelect: 'none',
  padding: theme.spacing(20, 0),
  ...(styleProps.vertical && {
    width: theme.sizing(styleProps.height),
    height: theme.sizing(styleProps.width),
    padding: theme.spacing(0, 80)
  }),
  ...(styleProps.disabled && {
    pointerEvents: 'none'
  })
}));

const SliderRail = styled('span', {
  name: ComponentName,
  slot: 'Rail'
})(({ theme, styleProps }) => {
  return {
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    backgroundColor: theme.palette.getColor(styleProps.color).color(),
    opacity: 0.1,
    width: '100%',
    height: 'inherit',
    top: '50%',
    transform: 'translateY(-50%)',
    ...(styleProps.vertical && {
      height: '100%',
      width: 'inherit',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)'
    })
  };
});

const SliderTrack = styled('span', {
  name: ComponentName,
  slot: 'Track'
})(({ theme, styleProps }) => {
  let padHeight = 0;
  let height;
  if (styleProps.height > styleProps.trackHeight) {
    padHeight =
      styleProps.trackHeight &&
      (styleProps.height - styleProps.trackHeight) / 2;
    height = styleProps.trackHeight;
  } else {
    height = 'inherit';
  }
  return {
    display: 'block',
    position: 'absolute',
    width: '50%',
    height: theme.sizing(height),
    borderRadius: theme.radius.create(styleProps.borderRadius),
    backgroundColor: theme.palette.getColor(styleProps.color).color(),
    ...(styleProps.trackHeight && {
      height: theme.sizing(styleProps.trackHeight),
      marginTop: theme.sizing(padHeight),
      marginLeft: theme.sizing(padHeight)
    }),
    ...(styleProps.disabled && {
      opacity: theme.palette.action.disabledOpacity
    }),
    ...(styleProps.vertical && {
      width: theme.sizing(height)
    })
  };
});

const SliderThumb = styled('span', {
  name: ComponentName,
  slot: 'Thumb'
})(({ theme, styleProps }) => ({
  position: 'absolute',
  borderRadius: '50%',
  outline: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '0',
  color: theme.palette.getColor('primary').color(),
  transform: 'translate(-50%, -50%)',
  width: theme.sizing(styleProps.thumbSize),
  height: theme.sizing(styleProps.thumbSize),
  boxShadow: theme.shadows.create(1),
  background: theme.palette.getColor(styleProps.thumbColor).color(),
  ...(styleProps.vertical && {
    top: 'none',
    left: '50%',
    transform: 'translate(-50%, 50%)'
  })
}));

const axisProps = {
  horizontal: {
    offset: (percent) => ({ left: `${percent}%` }),
    leap: (percent) => ({ width: `${percent}%` })
  },
  vertical: {
    offset: (percent) => ({ bottom: `${percent}%` }),
    leap: (percent) => ({ height: `${percent}%` })
  }
};

function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

function valueToPercent(value, min, max) {
  return Math.min(((value - min) * 100) / (max - min), max);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function trackFinger(event) {
  return {
    x: event.clientX || event.touches[0].clientX,
    y: event.clientY || event.touches[0].clientY
  };
}

function asc(a, b) {
  return a - b;
}

function findCloseet(values, currentValue) {
  const { index: closestIndex } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null);
  return closestIndex;
}

function setValueIndex(values, newValue, index) {
  const output = values.slice();
  output[index] = newValue;
  return output;
}

function getFingerNewValue({
  finger,
  axis,
  rootRef,
  min,
  max,
  step,
  range,
  values
}) {
  // 1. 根据手势位置计算出当前位置 在 滑块总长度的百分比
  const rootNode = rootRef.current;
  const { width, height, bottom, left } = rootNode.getBoundingClientRect();
  let percent;
  let resultValues;
  if (axis === 'vertical') {
    percent = (bottom - finger.y) / height;
  } else {
    percent = (finger.x - left) / width;
  }
  // 2. 根据percent，min， max计算实际对应的数值
  let currentValue = percentToValue(percent, min, max);
  currentValue = Math.round(clamp(currentValue, min, max));
  // 3. 将数值换算成step的整数
  if (step !== 1) {
    currentValue = Math.round((currentValue - min) / step) * step + min;
  }

  // 4. 如果是双滑块
  let activeIndex;
  if (range) {
    activeIndex = findCloseet(values, currentValue);
    resultValues = setValueIndex(values, currentValue, activeIndex).sort(asc);
  } else {
    resultValues = [currentValue];
  }

  return resultValues;
}

const Slider = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    className,
    classes: classesProps,
    vertical = false,
    color = 'primary',
    width = '100%',
    height = 4,
    borderRadius = 16,
    trackHeight = height,
    thumbSize = 20,
    thumbColor = 'white',
    min = 0,
    max = 100,
    step = 1,
    value = min,
    disabled = false,
    onChange = noop,
    ...other
  } = props;

  const styleProps = {
    className,
    classes: classesProps,
    vertical,
    color,
    width,
    height,
    borderRadius,
    trackHeight,
    thumbSize,
    thumbColor,
    disabled,
    ...other
  };

  const rootRef = useRef();
  const handleRef = useForkRef(ref, rootRef);
  const axis = vertical ? 'vertical' : 'horizontal';

  // 1. 单、双滑块处理
  const range = Array.isArray(value);
  let arr = range ? value.slice().sort(asc) : [value];
  arr = arr.map((value) => clamp(value, min, max));

  const [values, setValues] = useState(arr);

  // 2. 换算出轨迹left width
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap =
    valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const trackStyle = {
    ...axisProps[axis].offset(trackOffset),
    ...axisProps[axis].leap(trackLeap)
  };

  const handleMove = useEventCallback((event) => {
    requestAnimationFrame(() => {
      const finger = trackFinger(event);
      const newValues = getFingerNewValue({
        finger,
        axis,
        rootRef,
        min,
        max,
        step,
        range,
        values
      });
      setValues(newValues);
    });
  });

  const handleEnd = useEventCallback((event) => {
    onChange(event, values);
  });

  const classes = useUtilityClasses(styleProps);

  return (
    <SliderRoot
      ref={handleRef}
      styleProps={styleProps}
      onTouchMove={handleMove}
      onClick={handleMove}
      onTouchEnd={handleEnd}
      className={clsx(classes.root, className)}
      {...other}
    >
      <SliderRail styleProps={styleProps} className={classes.rail}></SliderRail>
      <SliderTrack
        style={trackStyle}
        styleProps={styleProps}
        className={classes.track}
      ></SliderTrack>
      {values.map((value, idx) => {
        const percent = valueToPercent(value, min, max);
        const thumbStyle = axisProps[axis].offset(percent);
        return (
          <SliderThumb
            key={idx}
            style={thumbStyle}
            styleProps={styleProps}
            className={classes.thumb}
          >
            {/* {value} */}
          </SliderThumb>
        );
      })}
    </SliderRoot>
  );
});
Slider.displayName = ComponentName;
export default Slider;
