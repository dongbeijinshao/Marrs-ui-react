import { IconPackDown } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, useContext } from 'react';
import { Cell } from '../index';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import CollapseContext from './CollapseContext';

const ComponentName = getComponentName('Collapse');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('wrapper', 'content', 'cell')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};
const CollapseRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { border } }) => ({
  position: 'relative',
  fontSize: theme.sizing(theme.typography.fontSize),
  ...(border && {
    [`&:not(:first-of-type)::after`]: {
      position: 'absolute',
      boxSizing: 'border-box',
      content: '" "',
      pointerEvents: 'none',
      top: 0,
      right: theme.sizing(16),
      left: theme.sizing(16),
      borderTop: `${theme.sizing(1)} solid ${theme.palette.grey[200]}`,
      transform: 'scaleY(0.5)'
    }
  })
}));

const CollapseCell = styled(Cell, {
  name: ComponentName,
  slot: 'cell'
})(({ theme, styleProps: { expand } }) => ({
  fontSize: theme.sizing(14),
  '&:not(:last-child)::after': {
    border: 'none'
  },
  ...(!expand && {
    '&:not(:last-child)::after': {
      display: 'none'
    }
  })
}));

const CollapseRightControl = styled(IconPackDown, {
  name: ComponentName,
  slot: 'IconPackDown'
})(({ theme, styleProps: { expand } }) => ({
  transition: 'transform 0.3s',
  color: theme.palette.action.rightArrow,
  // transitionTimingFunction: 'linear',
  ...(expand && {
    transform: 'rotate(-180deg)'
  })
}));

const CollapseWrapper = styled('div', {
  name: ComponentName,
  slot: 'Wrapper'
})(({ theme, styleProps: { expand } }) => ({
  overflow: 'hidden',
  ...(expand && {
    maxHeight: theme.sizing(999),
    transition: 'max-height 0.40s cubic-bezier(1, 0, 1, 0)'
  }),
  ...(!expand && {
    transition: 'max-height 0.40s cubic-bezier(0, 1, 0, 1)',
    maxHeight: 0
  })
}));

const CollapseContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ theme }) => ({
  padding: theme.spacing(12, 16),
  color: theme.palette.text.secondary,
  fontSize: theme.sizing(12),
  lineHeight: theme.sizing(15),
  backgroundColor: theme.palette.background.paper
}));

const Collapse = forwardRef((inProps, ref) => {
  const { border, EmitToggle, ...inheritProps } = useContext(CollapseContext);

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });

  const {
    className,
    // cell组件属性可用
    // 左侧标题
    rightControl,
    // 自定义面板内容
    contentControl,
    // 唯一标识符，默认为索引值
    name,
    // 是否展开
    expand,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    border,
    expand,
    classes: classesProps,
    ...other
  };
  const classes = useUtilityClasses(styleProps);

  const renderCell = (
    <CollapseCell
      styleProps={styleProps}
      className={classes.cell}
      rightControl={
        rightControl || <CollapseRightControl styleProps={styleProps} />
      }
      {...other}
      onClick={() => {
        EmitToggle(name);
      }}
    />
  );

  const renderContent = contentControl && (
    <CollapseWrapper styleProps={styleProps} className={classes.wrapper}>
      <CollapseContent className={classes.content}>
        {contentControl}
      </CollapseContent>
    </CollapseWrapper>
  );

  return (
    <CollapseRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
    >
      {renderCell}
      {renderContent}
    </CollapseRoot>
  );
});
Collapse.displayName = ComponentName;
Collapse.name = ComponentName;

export default Collapse;
