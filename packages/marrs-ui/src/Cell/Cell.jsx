import { IconRightArrow } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, Fragment, isValidElement } from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateClassesKey, generateShouldForwardProp } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

export const ComponentName = getComponentName('Cell');

const useUtilityClasses = (styleProps) => {
  const { classes, color } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey({ color })],
    ...normalizeClasses('control', 'title', 'content', 'icon')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CellRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { center, backgroundColor } }) => ({
  position: 'relative',
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  padding: theme.spacing(18, 14),
  overflow: 'hidden',
  color: theme.palette.getColor(theme.palette.neutral.N9).color(),
  fontSize: theme.sizing(theme.typography.fontSize),
  backgroundColor: backgroundColor || theme.palette.background.paper,

  '&:not(:last-child)::after': {
    position: 'absolute',
    boxSizing: 'border-box',
    content: '""',
    pointerEvents: 'none',
    right: theme.sizing(16),
    bottom: 0,
    left: theme.sizing(16),
    transform: `scaleY(0.5)`,
    borderBottom: `${theme.sizing(1)} solid ${theme.palette.grey[200]}`
  },
  ...(center && {
    alignItems: 'center'
  })
}));

const CellTitle = styled('div', {
  name: ComponentName,
  slot: 'TitleRoot'
})(({ theme, styleProps: { leftControl } }) => ({
  flex: 1,
  lineHeight: theme.sizing(16),
  ...(leftControl && {
    paddingLeft: theme.sizing(6)
  })
}));

const CellTitleSpan = styled('span', {
  name: ComponentName,
  slot: 'title'
})(({ theme, styleProps: { titleWidth, ellipsis, labelAlign, colon } }) => ({
  display: 'inline-block',
  // minHeight: theme.sizing(16),
  // lineHeight: theme.sizing(16),
  ...(colon && {
    '&::after': {
      content: '":"',
      position: 'relative',
      top: theme.sizing(-0.5),
      margin: theme.spacing(0, 8, 0, 2)
    }
  }),
  ...(ellipsis && {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  ...(titleWidth && {
    width: theme.sizing(titleWidth)
  }),
  ...(labelAlign === 'center' && {
    textAlign: 'center'
  }),
  ...(labelAlign === 'right' && {
    textAlign: 'right'
  })
}));

const CellLabel = styled('div', {
  name: ComponentName,
  slot: 'Label'
})(({ theme, styleProps: { labelWidth } }) => ({
  marginTop: theme.sizing(4),
  color: theme.palette.action.active,
  fontSize: theme.sizing(12),
  lineHeight: theme.sizing(18),
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  ...(labelWidth && {
    width: labelWidth
  })
}));

const CellContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ theme, styleProps: { rightIcon } }) => ({
  position: 'relative',
  textAlign: 'right',
  verticalAlign: 'middle',
  wordWrap: 'break-word',
  alignItems: 'center',
  flexWrap: 'wrap',
  flex: 1,
  minHeight: theme.sizing(16),
  lineHeight: theme.sizing(16),

  overflow: 'hidden',
  ...(rightIcon && {
    paddingRight: theme.sizing(4)
  })
}));

const CellControl = styled('div', {
  name: ComponentName,
  slot: 'Control'
})(({ theme, styleProps: { leftControlClass } }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: theme.sizing(16),
  lineHeight: theme.sizing(16),
  ...(leftControlClass && { ...leftControlClass })
}));

const CellIcon = styled('div', {
  name: ComponentName,
  slot: 'Icon'
})(({ theme, styleProps: { center } }) => ({
  display: 'flex',
  cursor: 'pointer',
  color: theme.palette.action.rightArrow,
  fontSize: theme.sizing(14),
  ...(center && {
    alignItems: 'center'
  })
}));

const Cell = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    // 主题颜色
    color,
    // 左侧标题
    title,
    // 右侧内容
    content,
    // 标题下方的描述信息
    label,
    // 是否在 title 后面添加冒号
    colon,
    // label对齐方式，可选值为 center right, left
    labelAlign,
    // 是否使内容居中
    center = true,
    // title 宽度，默认占总长度一半
    titleWidth,
    // label 宽度，默认占总长度一半
    labelWidth,
    // 是否省略点点，默认换行,(点点点时候指定宽度，否则无效)
    ellipsis,
    // 右边icon, showArrow存在时，优先showArrow
    rightIcon,
    // 导航
    showArrow,
    // 右边控件,包括按钮、徽章、开关、图片、头像等控件。
    rightControl,
    // 左侧控件
    leftControl,
    // 左侧控件相对于标题的位置,left,right
    leftControlPosition = 'left',
    // 左边icon标题class
    leftControlClass,
    classes: classesProps,
    backgroundColor,
    ...other
  } = props;

  const styleProps = {
    classes: classesProps,
    leftControlClass,
    rightIcon,
    titleWidth,
    labelWidth,
    labelAlign,
    ellipsis,
    center,
    colon,
    rightControl: isValidElement(rightControl),
    leftControl: isValidElement(leftControl),
    color,
    backgroundColor
  };

  const classes = useUtilityClasses(styleProps);

  const control = (control) => {
    if (control && control !== undefined) {
      return (
        <CellControl styleProps={styleProps} className={classes.control}>
          {control}
        </CellControl>
      );
    }
  };

  const renderTitle = title && (
    <CellTitle styleProps={styleProps} className={classes.title}>
      {title && <CellTitleSpan styleProps={styleProps}>{title}</CellTitleSpan>}
      {label && <CellLabel styleProps={styleProps}>{label}</CellLabel>}
    </CellTitle>
  );

  const renderContent = content && (
    <CellContent styleProps={styleProps} className={classes.content}>
      {content}
    </CellContent>
  );

  const renderRightIcon = (rightIcon || showArrow) && (
    <CellIcon
      styleProps={styleProps}
      {...rightIcon?.props}
      className={classes.icon}
    >
      {showArrow ? <IconRightArrow /> : rightIcon}
    </CellIcon>
  );

  const renderLabel = () => {
    const nodes = [renderTitle];
    if (leftControlPosition === 'left') {
      nodes.unshift(control(leftControl));
    }
    if (leftControlPosition === 'right') {
      nodes.push(control(leftControl));
    }
    return nodes;
  };

  return (
    <CellRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {renderLabel().map((child, index) => (
        <Fragment key={`child-${index}`}>{child}</Fragment>
      ))}
      {renderContent}
      {control(rightControl)}
      {renderRightIcon}
    </CellRoot>
  );
});
Cell.displayName = ComponentName;
Cell.name = ComponentName;

export default Cell;
