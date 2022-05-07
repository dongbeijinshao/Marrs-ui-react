import clsx from 'clsx';
import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { alpha } from '../dependencies/system';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { useForkRef } from '../utils';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('NoticeBar');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'verticalRoot',
      'vertical',
      'text',
      'content',
      'noticeText',
      'leftSlot',
      'rightSlot'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const NoticeBarRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.sizing(16),
  height: theme.sizing(36),
  padding: `0 ${theme.spacing(14)}`,
  color: theme.palette.getColor(styleProps.color).color(),
  background: alpha(
    theme.palette.getColor(styleProps.color).color(),
    theme.palette.action.backgroundOpacity
  ),
  // background: theme.palette.background.error,
  justifyContent: 'space-between',
  ...(styleProps.center && {
    justifyContent: 'center'
  })
}));

const NoticeLeftSlot = styled('span', {
  name: ComponentName,
  slot: 'LeftSlot'
})(({ theme }) => ({
  fontSize: theme.sizing(18),
  display: 'inline-flex'
}));

const NoticeContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ theme, styleProps }) => ({
  overflow: 'hidden',
  fontSize: theme.sizing(16),
  textAlign: 'left',
  ...(!styleProps.center && {
    flex: 1
  }),
  ...(styleProps.maxWidth && {
    maxWidth: theme.sizing(styleProps.maxWidth)
  })
}));

const NoticeText = styled('div', {
  name: ComponentName,
  slot: 'Text'
})(({ theme }) => ({
  position: 'relative',
  whiteSpace: 'nowrap',
  transitionTimingFunction: 'linear',
  fontSize: theme.sizing(13)
}));

const NoticeRightSlot = styled('div', {
  name: ComponentName,
  slot: 'RightSlot'
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.sizing(15.6)
}));

// 竖轴滚动
const NoticeVerticalRoot = styled('div', {
  name: ComponentName,
  slot: 'VerticalRoot'
})(({ theme, styleProps }) => ({
  height: '100%',
  overflow: 'hidden',
  margin: theme.spacing(0, 6),
  ...(!styleProps.center && {
    flex: 1
  })
}));

const NoticeVertical = styled('div', {
  name: ComponentName,
  slot: 'Vertical'
})(() => ({
  height: '100%'
}));

const NoticeVerticalText = styled('div', {
  name: ComponentName,
  slot: 'VerticalText'
})(({ theme }) => ({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: theme.sizing(13)
}));

const NoticeBar = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      color: inProps.title
    }
  });

  const {
    className,
    color = 'error',
    leftSlot = '',
    rightSlot = '',
    text = '',
    center = false,
    maxWidth = '',
    speed = 60,
    scrollable = false,
    visible = true,
    delay = 0,
    direction = 'horizontal',
    classes: classesProps,
    ...other
  } = props;
  const styleProps = {
    color,
    center,
    maxWidth,
    text,
    classes: classesProps
  };

  const wrapRef = useRef();
  const contentRef = useRef();
  const verticalRef = useRef();
  const handleRef = useForkRef(ref, verticalRef);
  const verticalHeightRef = useRef();

  const [offset, setOffset] = useState(0);
  const [duration, setDuration] = useState(0);

  const scrollBar = useCallback(() => {
    const timer = setTimeout(() => {
      timer && clearTimeout(timer);
      setDuration(verticalHeightRef.current / +speed);
      setOffset((pre) => {
        let offsetY = pre - verticalHeightRef.current;
        let totalH = verticalHeightRef.current * text.length;
        if (offsetY === -totalH) {
          return -totalH;
        } else if (offsetY < -totalH) {
          return -verticalHeightRef.current;
        } else {
          return offsetY;
        }
      });
    }, +speed * 10);
  }, [speed, text]);

  useLayoutEffect(() => {
    const ms = delay ? +delay : 0;
    let initTimer;
    if (scrollable && visible) {
      initTimer = setTimeout(() => {
        if (direction === 'horizontal') {
          const contentNode = contentRef.current;
          const contentRect = contentNode.getBoundingClientRect();
          setOffset(-contentRect.width);
          setDuration(contentRect.width / +speed);
        } else {
          const verticalNode = verticalRef.current;
          const verticalRect = verticalNode.getBoundingClientRect();
          verticalHeightRef.current = verticalRect.height;
          scrollBar();
        }
      }, ms);
    }
    return () => {
      clearTimeout(initTimer);
    };
    /*eslint-disable*/
  }, []);

  const onTransitionEnd = useCallback(() => {
    const wrapNode = wrapRef.current;
    const wrapRect = wrapNode.getBoundingClientRect();
    setOffset(wrapRect.width);
    setDuration(0);

    setTimeout(() => {
      const contentNode = contentRef.current;
      const contentRect = contentNode.getBoundingClientRect();
      setOffset(-contentRect.width);
      setDuration((contentRect.width + wrapRect.width) / +speed);
    }, 0);
  }, [wrapRef, contentRef, speed]);

  const onVerticalTransitionEnd = useCallback(() => {
    let totalH = verticalHeightRef.current * text.length;
    if (offset === -totalH) {
      setOffset(0);
      setDuration(0);
      scrollBar();
    } else {
      scrollBar();
    }
  }, [offset, text, scrollBar]);

  const style = useMemo(() => {
    return {
      transform: offset
        ? direction === 'horizontal'
          ? `translateX(${offset}px)`
          : `translateY(${offset}px)`
        : '',
      transitionDuration: `${duration}s`
    };
  }, [offset, duration, direction]);

  const subStyle = useMemo(() => {
    const totalH = verticalHeightRef.current * text.length;
    if (offset <= -totalH) {
      return {
        transform: `translateY(${totalH}px)`
      };
    }
  }, [offset, text]);

  const classes = useUtilityClasses(styleProps);

  const renderText = () => {
    if (direction === 'vertical' && Array.isArray(text)) {
      return (
        <NoticeVerticalRoot
          styleProps={styleProps}
          ref={handleRef}
          className={classes.verticalRoot}
        >
          <NoticeVertical
            styleProps={styleProps}
            style={style}
            onTransitionEnd={onVerticalTransitionEnd}
            className={classes.vertical}
          >
            {text.map((item, index) => (
              <NoticeVerticalText
                style={index === 0 ? subStyle : {}}
                key={item}
                className={classes.text}
              >
                {item}
              </NoticeVerticalText>
            ))}
          </NoticeVertical>
        </NoticeVerticalRoot>
      );
    }
    return (
      <NoticeContent
        ref={wrapRef}
        styleProps={styleProps}
        className={classes.content}
      >
        <NoticeText
          style={style}
          ref={contentRef}
          onTransitionEnd={onTransitionEnd}
          className={classes.noticeText}
        >
          {text}
        </NoticeText>
      </NoticeContent>
    );
  };

  return (
    visible && (
      <NoticeBarRoot
        styleProps={styleProps}
        className={clsx(classes.root, className)}
        {...other}
      >
        {leftSlot && (
          <NoticeLeftSlot className={classes.leftSlot}>
            {leftSlot}
          </NoticeLeftSlot>
        )}
        {renderText()}
        {rightSlot && (
          <NoticeRightSlot className={classes.rightSlot}>
            {rightSlot}
          </NoticeRightSlot>
        )}
      </NoticeBarRoot>
    )
  );
});
NoticeBar.displayName = ComponentName;
NoticeBar.name = ComponentName;
export default NoticeBar;
