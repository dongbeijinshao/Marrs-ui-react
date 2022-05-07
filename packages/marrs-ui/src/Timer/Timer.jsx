import * as React from 'react';
import Can from '../Can';
import { styled } from '../styles';
import useThemeProps from '../styles/useThemeProps';

const TimerContainer = styled('div', {
  name: 'Timer',
  slot: 'Root'
})(({ theme, styleProps }) => {
  return {
    // fontSize: theme.sizing(theme.typography.fontSize),
    display: 'inline-block',
    fontSize: theme.sizing(styleProps.volume)
  };
});

const TimerCount = styled(Can, {
  name: 'Timer',
  slot: 'Count'
})(() => {
  return {
    overflow: 'inherit',
    display: 'inline-block'
  };
});

const TimerUnit = styled('div', {
  name: 'Timer',
  slot: 'Count'
})(() => {
  return {
    display: 'inline-block'
  };
});

const Timer = React.forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MarrsTimer' });
  const {
    className,
    sx,
    // timeEnd,
    volume = 36,
    // format,
    // units = [],
    ...other
  } = props;

  const styleProps = { volume };

  return (
    <TimerContainer
      sx={sx}
      className={className}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      <TimerCount
        styleProps={styleProps}
        circle
        volume={{ width: volume, height: volume }}
      >
        11
      </TimerCount>
      <TimerUnit styleProps={styleProps}>天</TimerUnit>
    </TimerContainer>
  );
});

export default Timer;
