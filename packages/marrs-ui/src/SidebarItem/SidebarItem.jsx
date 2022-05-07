import clsx from 'clsx';
import { forwardRef, useCallback, useContext } from 'react';
import Badge from '../Badge/Badge';
import { SidebarContext } from '../Sidebar';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

function isPlainObject(item) {
  return (
    item !== null &&
    typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
    item.constructor === Object
  );
}

const ComponentName = getComponentName('SidebarItem');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('badge')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SidebarItemRoot = styled('a', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { selected, disabled, isPrev, isNext, color } }) => ({
  position: 'relative',
  display: 'block',
  boxSizing: 'border-box',
  padding: theme.spacing(19, 14),
  overflow: 'hidden',
  fontSize: theme.sizing(13),
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['background-color', 'color']),
  borderRadius: theme.radius.create(0, isNext ? 8 : 0, isPrev ? 8 : 0, 0),
  backgroundColor: theme.palette.neutral.N3,
  ...(selected && {
    backgroundColor: 'transparent',
    color: theme.palette.getColor(color).color(),
    fontWeight: 500
    // '&::before': {
    //   position: 'absolute',
    //   top: '50%',
    //   left: 0,
    //   width: 4,
    //   height: 16,
    //   transition: theme.transitions.create(['background-color']),
    //   backgroundColor: theme.palette.getColor(color).color(),
    //   transform: 'translateY(-50%)',
    //   content: '""'
    // }
  }),
  lineHeight: theme.sizing(16),
  userSelect: 'none',
  '&:not(:last-child)::after': {
    borderBottomWidth: 1
  },
  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  })
}));

const SidebarItemBadge = styled(Badge, {
  name: ComponentName,
  slot: 'Badge'
})(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  wordBreak: 'break-all',
  fontSize: theme.sizing(13)
}));

const SidebarItem = forwardRef((inProps, ref) => {
  const { emitValue, next, prev, ...inheritProps } = useContext(SidebarContext);

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });
  const {
    className,
    // 唯一标识，默认索引
    name,
    // 颜色
    color,
    // 是否选中
    selected,
    // 名称内容
    title,
    // 是否显示右上角小红点
    // dotOnly,
    // 图标右上角徽标的内容
    badge,
    // 是否禁用该项
    disabled,
    // 点击事件
    onClick = noop,
    ...other
  } = props;

  const handleClick = useCallback(
    (e) => {
      if (disabled) {
        return;
      }

      emitValue(name);

      onClick(e, name);
    },
    [disabled, name, onClick, emitValue]
  );

  const styleProps = {
    disabled,
    selected,
    isPrev: prev === name,
    isNext: next === name,
    color
  };

  const badgeProps = isPlainObject(badge) ? badge : { content: badge };

  const classes = useUtilityClasses(styleProps);

  const renderBadge = (
    <SidebarItemBadge {...badgeProps} color={color} className={classes.badge}>
      {title}
    </SidebarItemBadge>
  );

  return (
    <SidebarItemRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      onClick={handleClick}
      ref={ref}
      {...other}
    >
      {renderBadge}
    </SidebarItemRoot>
  );
});

SidebarItem.displayName = ComponentName;
export default SidebarItem;
