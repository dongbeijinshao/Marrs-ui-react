import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Empty');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'contentControl',
      'description',
      'content',
      'text',
      'actionControl'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const EmptyRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: theme.spacing(30, 0),
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const EmptyContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ theme, styleProps: { volume, size } }) => ({
  // TODO: 后续根据UI确定尺寸
  ...(volume === 'tiny' && {
    width: theme.sizing(60),
    height: theme.sizing(60)
  }),
  ...(volume === 'small' && {
    width: theme.sizing(100),
    height: theme.sizing(100)
  }),
  ...(volume === 'medium' && {
    width: theme.sizing(120),
    height: theme.sizing(120)
  }),
  ...(volume === 'large' && {
    width: theme.sizing(200),
    height: theme.sizing(200)
  }),
  ...(size && {
    width: size.width,
    height: size.height
  })
}));

const EmptyDescription = styled('div', {
  name: ComponentName,
  slot: 'Description'
})(({ theme }) => ({
  marginTop: theme.sizing(16),
  padding: theme.spacing(0, 60),
  textAlign: 'center'
}));

const EmptyDesContent = styled('div', {
  name: ComponentName,
  slot: 'Description'
})(({ theme }) => ({
  height: theme.sizing(17),
  fontSize: theme.sizing(14),
  color: theme.palette.text.secondary,
  lineHeight: theme.sizing(17)
}));

const EmptyDesText = styled('div', {
  name: ComponentName,
  slot: 'Text'
})(({ theme }) => ({
  marginTop: theme.sizing(6),
  height: theme.sizing(14),
  fontSize: theme.sizing(12),
  color: '#C4C4C4',
  lineHeight: theme.sizing(14)
}));

const EmptyControl = styled('div', {
  name: ComponentName,
  slot: 'Control'
})(({ theme }) => ({
  marginTop: theme.sizing(18)
}));

const Empty = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    // 自定义内容控件
    contentControl,
    // 描述文字
    description,
    // 补充文案
    text,
    // 自定义底部内容
    actionControl,
    // image尺寸规格, 默认medium,可选值tiny、small、medium、large
    volume,
    // 自定义尺寸
    size,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    volume,
    size,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  const renderContent = contentControl && (
    <EmptyContent styleProps={styleProps} className={classes.contentControl}>
      {contentControl}
    </EmptyContent>
  );

  const renderDescription = description && (
    <EmptyDescription className={classes.description}>
      <EmptyDesContent className={classes.content}>
        {description}
      </EmptyDesContent>
      {text && <EmptyDesText className={classes.text}>{text}</EmptyDesText>}
    </EmptyDescription>
  );

  const renderActionControl = actionControl && (
    <EmptyControl className={classes.actionControl}>
      {actionControl}
    </EmptyControl>
  );

  return (
    <EmptyRoot ref={ref} {...other} className={clsx(classes.root, className)}>
      {renderContent}
      {renderDescription}
      {renderActionControl}
    </EmptyRoot>
  );
});

Empty.displayName = ComponentName;
Empty.name = ComponentName;
export default Empty;
