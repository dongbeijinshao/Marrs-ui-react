import clsx from 'clsx';
import React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import progressClasses from './progressClasses';

const ComponentName = getComponentName('Line');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('box', 'rail', 'track', 'inner', 'outer')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const LineRoot = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'Root'
})(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.sizing(theme.typography.fontSize)
  // fontSize: theme.spacing(styleProps.volume / 1.2)
}));

const LineBox = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'Box'
})(({ theme, styleProps }) => ({
  width: '100%',
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
  borderRadius: theme.radius.create(styleProps.radius),
  height: theme.spacing(styleProps.volume)
}));

const LineRail = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'Rail'
})(({ theme, styleProps }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.getColor(styleProps.color).color(),
  opacity: 0.1
}));

const LineTrack = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'Track'
})(({ theme, styleProps }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  transition: theme.transitions.create(['width']),
  backgroundColor: theme.palette.getColor(styleProps.color).color(),
  borderRadius: theme.radius.create(styleProps.radius),
  width: `${clamp(styleProps.percent, 0, 100)}%`
}));

const InnerLabelContainer = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'InnerLabelContainer'
})(({ styleProps, theme }) => {
  return {
    opacity: 0,
    ...(!(styleProps.volume < 3) && {
      opacity: 1,
      position: 'absolute',
      display: 'inline-flex',
      left: 0,
      top: 0,
      width: `${clamp(styleProps.percent, 0, 100)}%`,
      whiteSpace: 'nowrap',
      alignItems: 'center',
      height: '100%',
      background: 'transparent',
      color: theme.palette[styleProps.color].contrastText,
      ...(styleProps.label === 'inner' && {
        color: theme.palette[styleProps.color].contrastText
      }),
      [`&>.${progressClasses.innerLabel}`]: {
        width: `calc(100% - ${theme.spacing(8)})`
      },

      [`&>.${progressClasses.outerLabel}`]: {
        width: '100%'
      }
    })
  };
});

const LineLabel = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'Label'
})(() => ({
  textAlign: 'right'
}));

const OuterLabelContainer = styled('div', {
  name: 'MarrsProgressLine',
  slot: 'OuterLabelContainer'
})(({ theme, styleProps }) => {
  return {
    color: theme.palette.getColor(styleProps.color).color()
  };
});

function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

const Line = (props) => {
  const { styleProps, overrideLabel, className } = props;

  const { labelPlace, percent } = styleProps;

  const text = overrideLabel(percent);

  const placeOuter = labelPlace === 'outer';
  const placeInner = labelPlace === 'inner';

  const labelComp = React.useMemo(
    () => (
      <LineLabel
        className={clsx(
          placeOuter ? progressClasses.outerLabel : progressClasses.innerLabel
        )}
        styleProps={styleProps}
      >
        {text}
      </LineLabel>
    ),
    [text, styleProps, placeOuter]
  );

  const classes = useUtilityClasses(styleProps);

  return (
    <LineRoot styleProps={styleProps} className={clsx(classes.root, className)}>
      <LineBox styleProps={styleProps} className={classes.box}>
        <LineRail styleProps={styleProps} className={classes.rail} />
        <LineTrack styleProps={styleProps} className={classes.track} />
        <InnerLabelContainer styleProps={styleProps} className={classes.inner}>
          {placeInner && labelComp}
        </InnerLabelContainer>
      </LineBox>
      <OuterLabelContainer styleProps={styleProps} className={classes.outer}>
        {placeOuter && labelComp}
      </OuterLabelContainer>
    </LineRoot>
  );
};

export default Line;
