import React from 'react';
import styled from '../styles/styled';
import { customUtils, useEventCallback } from '../utils';

const { toRGB } = customUtils;

const CalendarDayRoot = styled('div', {
  name: 'MarrsCalendarDay',
  slot: 'Root'
})(({ theme, styleProps }) => ({
  width: '14.285%',
  position: 'relative',
  height: theme.sizing(50),
  fontSize: theme.sizing(16),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: theme.radius.create(4),
  ...(styleProps.index === 0 && {
    marginLeft: `${(100 * styleProps.offset) / 7}%`
  }),
  ...(styleProps.type === 'disabled' && {
    color: theme.palette.action[styleProps.type]
  }),
  ...(styleProps.type === 'selected' && {
    backgroundColor: theme.palette.getColor(styleProps.color).color(),
    color: theme.palette[styleProps.color].contrastText
  }),
  ...(styleProps.type === 'start' && {
    backgroundColor: theme.palette.getColor(styleProps.color).color(),
    color: theme.palette[styleProps.color].contrastText
    // borderTopRightRadius: 0,
    // borderBottomRightRadius: 0
  }),
  ...(styleProps.type === 'end' && {
    backgroundColor: theme.palette.getColor(styleProps.color).color(),
    color: theme.palette[styleProps.color].contrastText
    // borderTopLeftRadius: 0,
    // borderBottomLeftRadius: 0
  }),
  ...(styleProps.type === 'middle' && {
    backgroundColor: toRGB(
      theme.palette.getColor(styleProps.color).color(),
      0.1
    ),
    color: theme.palette.getColor(styleProps.color).color(),
    borderRadius: 0
  })
}));

const CalendarDayText = styled('div', {
  name: 'MarrsCalendarDay',
  slot: 'Text'
})(({ theme }) => ({
  // maxWidth: theme.sizing(50),
  // width: '100%',
  height: theme.sizing(50),
  // height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // borderRadius: theme.radius.create(1),
  // ...(styleProps.type === 'selected' && {
  //   backgroundColor: theme.palette.getColor(styleProps.color).color(),
  //   color: theme.palette[styleProps.color].contrastText
  // })
  // ...(styleProps.type === 'start' && {
  //   backgroundColor: theme.palette.getColor(styleProps.color).color(),
  //   color: theme.palette[styleProps.color].contrastText
  //   // borderTopRightRadius: 0,
  //   // borderBottomRightRadius: 0
  // }),
  // ...(styleProps.type === 'end' && {
  //   backgroundColor: theme.palette.getColor(styleProps.color).color(),
  //   color: theme.palette[styleProps.color].contrastText
  //   // borderTopLeftRadius: 0,
  //   // borderBottomLeftRadius: 0
  // })
  // ...(styleProps.type === 'middle' && {
  //   backgroundColor: toRGB(
  //     theme.palette.getColor(styleProps.color).color(),
  //     0.1
  //   ),
  //   color: theme.palette.getColor(styleProps.color).color(),
  //   borderRadius: 0
  // })
}));

const CalendarDayPlace = styled('div', {
  name: 'MarrsCalendarDay',
  slot: 'Placeholder'
})(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: theme.sizing(50)
}));

const CalendarDayTop = styled('div', {
  name: 'MarrsCalendarDay',
  slot: 'Top'
})(({ theme, styleProps }) => {
  return {
    position: 'absolute',
    right: 0,
    left: 0,
    top: theme.sizing(2),
    fontSize: theme.sizing(10),
    color: theme.palette.action.active,
    ...((styleProps.type === 'selected' ||
      styleProps.type === 'start' ||
      styleProps.type === 'end') && {
      backgroundColor: theme.palette.getColor(styleProps.color).color(),
      color: theme.palette[styleProps.color].contrastText
    })
  };
});

const CalendarDayBottom = styled('div', {
  name: 'MarrsCalendarDay',
  slot: 'Bottom'
})(({ theme }) => ({
  position: 'absolute',
  right: 0,
  left: 0,
  bottom: theme.sizing(2.5),
  fontSize: theme.sizing(10)
}));

const CalendarDay = React.forwardRef((props, ref) => {
  const { item, index, offset, color, handleDayChange } = props;
  const { text, type, topInfo, bottomInfo } = item;
  const styleProps = {
    index,
    offset,
    color,
    type
  };

  const handleClick = useEventCallback((event) => {
    if (type === 'disabled') {
      return;
    }
    handleDayChange(event, item);
  });

  // placeholder占位样式
  return type === 'placeholder' ? (
    <CalendarDayPlace />
  ) : (
    <CalendarDayRoot ref={ref} styleProps={styleProps} onClick={handleClick}>
      <CalendarDayText styleProps={styleProps}>
        {topInfo && (
          <CalendarDayTop styleProps={styleProps}>{topInfo}</CalendarDayTop>
        )}
        {text}
        {bottomInfo && (
          <CalendarDayBottom styleProps={styleProps}>
            {bottomInfo}
          </CalendarDayBottom>
        )}
      </CalendarDayText>
    </CalendarDayRoot>
  );
});
export default CalendarDay;
