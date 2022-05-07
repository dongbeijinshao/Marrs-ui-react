import React, { useLayoutEffect, useState } from 'react';
import { styled, useTheme, useThemeProps } from '../styles';

/** 这个写的不好 */

const AnimationRoot = styled('div', {
  name: 'MarrsAnimation',
  slot: 'Root'
})(({ theme, styleProps }) => {
  return {
    opacity: 0,
    transition: theme.transitions.create(['opacity'], {
      duration: styleProps.duration || theme.transitions.duration.complex
    }),
    ...(styleProps.fade && {
      opacity: 1
    })
  };
});
/**
 * @param {*} inProps
 * @deprecated
 */
const Animation = (inProps) => {
  const props = useThemeProps({ name: 'Animation', props: inProps });

  const theme = useTheme();

  const {
    children,
    keep = false,
    duration = theme.transitions.duration.complex,
    fade
  } = props;

  const styleProps = {
    fade,
    duration
  };

  const [fadeState, toggleFadeIn] = useState(false);

  useLayoutEffect(() => {
    toggleFadeIn(fade);
  }, [fade]);

  return (
    <AnimationRoot styleProps={{ ...styleProps, fade: fadeState }}>
      {children}
    </AnimationRoot>
  );
};

export default Animation;
