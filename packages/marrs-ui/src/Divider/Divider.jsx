import clsx from 'clsx';
import * as React from 'react';
import FlexBox from '../FlexBox';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Divider');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    vertical: ['vertical'],
    horizontal: ['horizontal'],
    line: ['line'],
    tip: ['tip']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const DividerRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(() => {
  return { overflow: 'hidden' };
});

const DividerHorizontal = styled(DividerRoot, {
  name: ComponentName,
  slot: 'horizontal'
})(({ styleProps, theme }) => {
  return {
    display: 'block',
    fontSize: theme.sizing(12),
    borderRadius: styleProps.thickness,
    marginTop: theme.sizing(6),
    marginBottom: theme.sizing(8),
    color: theme.palette
      .getColor(styleProps.color, theme.palette.divider)
      .color()
  };
});

const DividerVertical = styled(DividerRoot, {
  name: ComponentName,
  slot: 'vertical'
})(({ styleProps, theme }) => {
  return {
    display: 'inline-block',
    height: theme.sizing(12),
    fontSize: theme.sizing(theme.typography.fontSize - 2),
    borderRadius: styleProps.thickness,
    width: styleProps.thickness,
    transform: `scaleX(0.5)`,
    color: theme.palette
      .getColor(styleProps.color, theme.palette.divider)
      .color(),
    background: theme.palette
      .getColor(styleProps.color, theme.palette.divider)
      .color(),
    ...(styleProps.lineColor && {
      background: styleProps.lineColor
    })
  };
});

const DividerLine = styled('div', {
  name: ComponentName,
  slot: 'line'
})(({ styleProps, theme }) => {
  return {
    alignSelf: 'center',
    display: 'inline-block',
    ...(styleProps.tipStart
      ? {
          width: styleProps.tipStart,
          flexShrink: 0
        }
      : {
          width: '100%'
        }),

    height: styleProps.thickness,
    transform: `scaleY(0.5)`,
    background: theme.palette
      .getColor(styleProps.color, theme.palette.divider)
      .color(),
    ...(styleProps.lineColor && {
      background: styleProps.lineColor
    })
  };
});

const DividerTip = styled('div', { name: ComponentName, slot: 'tip' })(
  ({ theme, styleProps }) => {
    return {
      display: 'inline-block',
      flexShrink: 0,
      marginLeft: theme.spacing(styleProps.gap),
      marginRight: theme.spacing(styleProps.gap)
    };
  }
);

const Divider = React.forwardRef(function Divider(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    className,
    children,
    gap = 12,
    thickness = 1,
    tipStart,
    color,
    vertical,
    lineColor,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    tipStart,
    gap,
    thickness, // 线厚度
    color, // primary | secondary | warning | info | success,
    lineColor,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  if (!vertical) {
    return (
      <DividerHorizontal
        className={clsx(className, classes.root, classes.horizontal)}
        styleProps={styleProps}
        ref={ref}
        {...other}
      >
        <FlexBox container wrap="nowrap">
          <DividerLine className={classes.line} styleProps={styleProps} />
          <DividerTip className={classes.tip} styleProps={styleProps}>
            {children}
          </DividerTip>
          <DividerLine
            className={classes.line}
            styleProps={{ ...styleProps, tipStart: undefined }}
          />
        </FlexBox>
      </DividerHorizontal>
    );
  }

  return (
    <DividerVertical
      className={clsx(className, classes.root, classes.vertical)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    ></DividerVertical>
  );
});

Divider.displayName = ComponentName;
Divider.name = ComponentName;
export default Divider;
