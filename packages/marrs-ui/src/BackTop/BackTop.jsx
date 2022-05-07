import { IconBackTop } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import * as React from 'react';
import Pin from '../Pin';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useTheme from '../styles/useTheme';
import useThemeProps from '../styles/useThemeProps';
import { debounce, generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import warning from '../utils/warning';
import backTopClasses from './BackTopClasses';

const ComponentName = getComponentName('BackTop');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    ...normalizeClasses('button', 'icon')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const BackTopRoot = styled(Pin, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => {
  return {
    transition: theme.transitions.create(['opacity']),
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: '100%',
    fontSize: theme.sizing(theme.typography.fontSize),
    [`&.${backTopClasses.hidden}`]: {
      opacity: 0,
      pointerEvents: 'none'
    }
  };
});

const BackTopButton = styled('span', {
  name: ComponentName,
  slot: 'Button'
})(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    backgroundColor: '#fff',
    boxShadow: `${theme.spacing(0, 4, 10, 0)} rgb(0 0 0 / 6%)`,
    // border: `${theme.sizing(1)} solid #F2F2F2`,
    ...theme.createBorder({ radius: 100, color: '#F2F2F2', width: 1 }),
    // padding: theme.spacing(2, 2),
    width: theme.sizing(48),
    height: theme.sizing(48),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    minHeight: 0,
    minWidth: 0
  };
});

const BackTopIcon = styled(IconBackTop, {
  name: ComponentName,
  slot: 'Icon'
})(({ theme }) => {
  return {
    fontSize: theme.sizing(24)
  };
});

const BackTop = React.forwardRef(function BackTop(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const theme = useTheme();
  const {
    className,
    smooth = false,
    draggable = true,
    onClick = noop,
    edge = 0,
    offset = {
      right: theme.sizing(14),
      bottom: theme.sizing(50)
    },
    children,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = { draggable, offset, classes: classesProps };

  const classes = useUtilityClasses(styleProps);

  const [isShown, togglePin] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedScroll = React.useCallback(
    debounce(() => {
      togglePin(window.scrollY > edge);
    }, 200),
    []
  );

  React.useEffect(() => {
    warning(
      !smooth,
      `[${ComponentName}]移动端可能未完全支持smooth属性, 可以自行使用 smoothscroll-polyfill 解决`
    );
  }, [smooth]);

  const backTopHandler = React.useCallback(
    (e) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
      onClick(e);
    },
    [onClick, smooth]
  );
  React.useLayoutEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [debouncedScroll]);

  return (
    <BackTopRoot
      onClick={backTopHandler}
      className={clsx(
        classes.root,
        className,
        backTopClasses.root,
        backTopClasses.vertical,
        !isShown ? backTopClasses.hidden : ''
      )}
      offset={offset}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {children || (
        <BackTopButton className={classes.button}>
          <BackTopIcon className={classes.icon} />
        </BackTopButton>
      )}
    </BackTopRoot>
  );
});
BackTop.name = ComponentName;
BackTop.displayName = ComponentName;
export default BackTop;
