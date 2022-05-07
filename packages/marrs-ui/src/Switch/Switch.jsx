import { IconLoading } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import { alpha } from '../dependencies/system';
import Icon from '../Icon';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { useEventCallback } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';

const ComponentName = getComponentName('Switch');
const useUtilityClasses = (styleProps) => {
  const { disabled, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SwitchRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(
  ({
    theme,
    styleProps: {
      color,
      uncheckedColor,
      checkedColor,
      disabled,
      checkedState
      // volume
    }
  }) => ({
    fontSize: theme.sizing(theme.typography.fontSize),
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'content-box',
    width: theme.sizing(34),
    height: theme.sizing(18),
    borderRadius: theme.sizing(10),
    backgroundColor: uncheckedColor
      ? theme.palette.getColor(uncheckedColor).color()
      : '#C4C4C4',
    border: `${theme.sizing(1)} solid ${alpha(
      theme.palette.action.active,
      theme.palette.action.hoverOpacity
    )}`,
    ...(checkedState && {
      backgroundColor: theme.palette
        .getColor(checkedColor, checkedColor || color)
        .color(),
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shortest
      })
    }),
    ...(disabled && {
      opacity: theme.palette.action.disabledOpacity
    })
  })
);

const SwitchNode = styled('div', {
  name: ComponentName,
  slot: 'trigger'
})(
  ({
    theme,
    styleProps: { checkedColor, uncheckedColor, checkedState, color }
  }) => ({
    position: 'absolute',
    top: 0,
    left: theme.sizing(2),
    width: theme.sizing(14),
    height: theme.sizing(14),
    borderRadius: '100%',
    marginTop: theme.sizing(2),
    lineHeight: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      uncheckedColor ||
      alpha(
        checkedColor || theme.palette.getColor(color).color(),
        theme.palette.action.disabledOpacity
      ),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['transform', 'color'], {
      duration: theme.transitions.duration.shortest
    }),
    ...(checkedState && {
      color: checkedColor || theme.palette.getColor(color).color(),
      transform: `translateX(${theme.sizing(16)})`
    })
  })
);

const Switch = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    color = 'primary',
    // class
    className,
    // defaultValue,
    // 是否选中
    checked = props.checked === undefined ? props.defaultValue : false,
    // 是否禁用
    disabled,
    // 自定义选中颜色，默认color对应主色
    checkedColor,
    // 自定义非选中颜色，暂不支持颜色名, 默认计算checkColor的0.38
    uncheckedColor,
    // 自定义大小,暂时取消
    // volume = 'small',
    // 是否用loading
    loading = false,
    // click 事件
    onClick = noop,
    // change 事件
    onChange = noop,
    // 覆盖class
    classes: classesProps,
    ...other
  } = props;

  const [checkedState, setCheckedState] = useState(checked);

  useEffect(() => {
    onChange(checkedState);
  }, [checkedState, onChange]);

  const styleProps = {
    classes: classesProps,
    color,
    // volume,
    checked,
    disabled,
    checkedColor,
    uncheckedColor,
    checkedState
  };

  const classes = useUtilityClasses(styleProps);

  const handleClick = useEventCallback((e) => {
    if (disabled || loading) return;

    setCheckedState(!checkedState);

    onClick(e);
  });

  const renderLoading = loading && (
    <Icon
      sx={{ fontSize: (theme) => theme.sizing(8) }}
      spin
      icon={<IconLoading />}
    />
  );

  return (
    <SwitchRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      onClick={handleClick}
      ref={ref}
      {...other}
    >
      <SwitchNode styleProps={styleProps}>{renderLoading}</SwitchNode>
    </SwitchRoot>
  );
});

Switch.displayName = ComponentName;
Switch.name = ComponentName;

export default Switch;
