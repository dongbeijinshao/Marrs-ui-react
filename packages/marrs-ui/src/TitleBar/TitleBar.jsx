import { IconHome, IconRightArrow } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import Icon from '../Icon';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import Typeface from '../Typeface';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import TitleBarClasses from './TitleBarClasses';

const ComponentName = getComponentName('TitleBar');

const volumeVal = {
  lagre: 40,
  middle: 36,
  small: 30
};

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    ...normalizeClasses('icon', 'text', 'desc')
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const TitleBarRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({ include: ['classes'] })
})(({ theme, styleProps }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.paper,
    height: theme.sizing(volumeVal[styleProps.volume] || 40),
    padding: theme.spacing(0, 12),
    fontSize:
      styleProps.volume === 'small'
        ? theme.sizing(12)
        : styleProps.volume === 'middle'
        ? theme.sizing(14)
        : theme.sizing(16),
    [`& .${TitleBarClasses.icon}`]: {
      fontSize:
        styleProps.volume === 'small' ? theme.sizing(16) : theme.sizing(20)
    }
  };
});

const TitleBarRightContainer = styled('div', {
  name: ComponentName,
  slot: 'RightText'
})(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  };
});
const RightIconContainer = styled(Icon, {
  name: ComponentName,
  slot: 'rightIcon'
})(({ theme }) => {
  return {
    fontSize: theme.sizing(12),
    marginLeft: 1,
    color: theme.palette.text.disabled
  };
});
const TitleBar = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });
  const {
    className,
    volume = 'large',
    title = '标题',
    desc = '',
    startIcon,
    showStartIcon = true,
    showRightArrow = false,
    rightClick = noop,
    children,
    ...other
  } = props;

  const styleProps = {
    volume
  };
  const classes = useUtilityClasses(styleProps);

  return (
    <TitleBarRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children || (
        <React.Fragment>
          {showStartIcon && (
            <Icon
              sx={{ marginRight: (theme) => theme.spacing(8) }}
              icon={startIcon || <IconHome className={classes.icon} />}
            />
          )}
          <Typeface>{title}</Typeface>
        </React.Fragment>
      )}

      <TitleBarRightContainer onClick={rightClick}>
        <Typeface
          color="primary"
          sx={{
            fontSize: (theme) => theme.sizing(12)
          }}
        >
          {desc}
        </Typeface>
        {showRightArrow && <RightIconContainer icon={<IconRightArrow />} />}
      </TitleBarRightContainer>
    </TitleBarRoot>
  );
});

export default TitleBar;
