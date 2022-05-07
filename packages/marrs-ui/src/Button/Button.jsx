import { IconHubbleBubble } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import * as React from 'react';
import ButtonBase from '../ButtonBase';
import { alpha } from '../dependencies/system';
import { composeClasses } from '../dependencies/utilityClasses';
import Icon from '../Icon';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import {
  capitalize,
  customUtils,
  generateClassesKey,
  generateShouldForwardProp
} from '../utils';
import { noop } from '../utils/helperFunctions';
import buttonClasses, { getButtonUtilityClass } from './buttonClasses';

const { toRGB } = customUtils;
const ComponentName = getComponentName('Button');

const useUtilityClasses = (styleProps) => {
  const { color, disableElevation, fullWidth, volume, face, classes } =
    styleProps;

  const slots = {
    root: [
      'root',
      ...generateClassesKey(
        { face },
        { volume },
        { face, volume },
        { face, volume, color },
        { disableElevation },
        { fullWidth }
      )
    ],
    startIcon: ['startIcon', `iconVolume${capitalize(volume)}`],
    endIcon: ['endIcon', `iconVolume${capitalize(volume)}`]
  };

  // 合并自定义类名(className)
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};

const commonIconStyles = (styleProps, buttonType, theme) => ({
  ...(styleProps.volume === 'tiny' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(10) : theme.sizing(12)
    }
  }),
  ...(styleProps.volume === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(12) : theme.sizing(14)
    }
  }),
  ...(styleProps.volume === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(12) : theme.sizing(14)
    }
  }),
  ...(styleProps.volume === 'big' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(14) : theme.sizing(16)
    }
  }),
  ...(styleProps.volume === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: theme.sizing(18)
    }
  })
});

const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  }),
  name: ComponentName,
  slot: 'Root',
  overridesResolver: noop
})(({ theme, styleProps }) => {
  return {
    ...theme.typography.button,
    ...(styleProps.textTransform && {
      textTransform: styleProps.textTransform
    }),
    // 继承颜色
    // ...(styleProps.color === 'inherit' && {
    color: 'inherit',
    borderColor: 'currentColor',
    // }),
    minWidth: theme.sizing(40),
    padding: theme.spacing(9, 12),
    fontSize: theme.sizing(theme.typography.fontSize),
    borderRadius: theme.radius.create(styleProps.radius),
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color', 'color'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    ...(!styleProps.loading && {
      '&:active': {
        ...(styleProps.face === 'filled' && {
          backgroundColor: theme.palette
            .getColor(styleProps.color)
            .darken()
            .color()
        }),
        ...(styleProps.face === 'plain' && {
          color: theme.palette.getColor(styleProps.color).darken().color(),
          // borderColor: theme.palette
          //   .getColor(styleProps.color)
          //   .darken()
          //   .color(),
          backgroundColor: theme.palette
            .getColor(styleProps.color)
            .alpha(theme.palette.action.hoverOpacity)
            .color()
        }),
        ...(styleProps.face === 'text' && {
          color: theme.palette.getColor(styleProps.color).darken().color()
        }),
        ...(styleProps.face === 'flat' && {
          color: theme.palette.getColor(styleProps.color).darken().color(),
          backgroundColor: alpha(
            theme.palette.getColor(styleProps.color).darken().color(),
            theme.palette.action.activatedOpacity
          )
        })
      }
    }),
    [`&.${buttonClasses.disabled}`]: {
      backgroundColor: theme.palette.action.disabledBackground,
      // opacity: theme.palette.action.disabledOpacity,
      ...(styleProps.face === 'plain' &&
        styleProps.color !== 'inherit' && {
          backgroundColor: 'transparent',
          color: alpha(theme.palette.text.secondary, 0.5)
        })
    },

    // 空心颜色设置
    ...(styleProps.face === 'plain' && {
      padding: theme.spacing(8.5, 12)
      // border: '1px solid rgba(0, 0, 0, 0.23)'
    }),
    ...(styleProps.face === 'plain' &&
      styleProps.color !== 'inherit' && {
        color: theme.palette.getColor(styleProps.color).color(),
        // border: `${theme.sizing(1)} solid ${alpha(
        //   theme.palette.getColor(styleProps.color).color(),
        //   0.5
        // )}`,
        ...theme.createBorder({
          ...styleProps,
          width:
            ['tiny', 'small', 'medium'].indexOf(styleProps.volume) === -1
              ? 2
              : 1
        }),
        ...(styleProps.disabled && {
          ...theme.createBorder({
            ...styleProps,
            color: theme.palette.action.disabled,
            opcity: 0.5,
            width:
              ['tiny', 'small', 'medium'].indexOf(styleProps.volume) === -1
                ? 2
                : 1
          })
        })
      }),
    ...(styleProps.face === 'filled' &&
      styleProps.color !== 'inherit' && {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.getColor(styleProps.color).color()
      }),

    ...(styleProps.face === 'flat' &&
      styleProps.color !== 'inherit' && {
        backgroundColor: toRGB(
          theme.palette.getColor(styleProps.color).color(),
          0.1
        ),
        color: theme.palette.getColor(styleProps.color).color()
      }),
    // 纯文字颜色设置
    ...(styleProps.face === 'text' &&
      styleProps.color !== 'inherit' && {
        color: theme.palette.getColor(styleProps.color).color()
      }),

    // volume: tiny small (default) large
    ...(styleProps.volume === 'tiny' && {
      padding: `${theme.sizing(5)} ${theme.sizing(6)}`,
      lineHeight: theme.sizing(14),
      fontSize: theme.sizing(12)
    }),
    ...(styleProps.volume === 'small' && {
      padding: `${theme.sizing(6.5)} ${theme.sizing(10)}`,
      lineHeight: theme.sizing(15),
      fontSize: theme.sizing(13)
    }),
    ...(styleProps.volume === 'medium' && {
      padding: `${theme.sizing(8.5)} ${theme.sizing(12)}`,
      lineHeight: theme.sizing(15),
      fontSize: theme.sizing(13)
    }),
    ...(styleProps.volume === 'big' && {
      padding: `${theme.sizing(11)} ${theme.sizing(14)}`,
      lineHeight: theme.sizing(18),
      fontSize: theme.sizing(14)
    }),
    ...(styleProps.volume === 'large' && {
      padding: `${theme.sizing(14.5)} ${theme.sizing(18)}`,
      lineHeight: theme.sizing(19),
      fontSize: theme.sizing(16)
    }),
    ...(styleProps.fullWidth && {
      width: '100%'
    }),
    ...(styleProps.color === 'inherit' && {
      color: 'inherit'
    })
  };
});

const ButtonStartIcon = styled('span', {
  name: ComponentName,
  slot: 'StartIcon'
})(({ styleProps, theme }) => ({
  display: 'inherit',
  ...(styleProps.children && {
    marginRight: theme.sizing(4),
    marginLeft: theme.sizing(-4)
  }),
  ...(styleProps.volume === 'small' && {
    marginLeft: theme.sizing(-2)
  }),
  ...commonIconStyles(styleProps, 'start', theme)
}));

const ButtonEndIcon = styled('span', {
  name: ComponentName,
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const { styleProps } = props;

    return [styles.endIcon, styles[`iconSize${capitalize(styleProps.volume)}`]];
  }
})(({ styleProps, theme }) => ({
  display: 'inherit',
  ...(styleProps.children && {
    marginRight: theme.sizing(-4),
    marginLeft: theme.sizing(2)
  }),

  ...(styleProps.volume === 'small' && {
    marginRight: theme.sizing(-2)
  }),
  ...commonIconStyles(styleProps, 'end', theme)
}));

const ButtonText = styled('span', {
  name: ComponentName,
  slot: 'Text'
})(({ styleProps, theme }) => ({
  ...((styleProps.fullWidth || styleProps.width) && {
    width: styleProps.width ? `${theme.sizing(styleProps.width)}` : '100%'
  }),
  ...(styleProps.width && {
    justifyContent: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  })
}));

const Button = React.forwardRef(function Button(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    classes: classesProps,
    children,
    loading = false,
    textTransform,
    color = 'primary',
    component = 'button',
    disabled,
    radius = 4,
    disableElevation = false,
    endIcon: endIconProp,
    fullWidth = false,
    volume = 'small',
    startIcon: startIconProp,
    face = 'filled',
    width,
    ...other
  } = props;

  const styleProps = {
    textTransform,
    color,
    radius,
    component,
    disabled,
    disableElevation,
    fullWidth,
    width,
    volume,
    face,
    loading,
    children,
    className,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);
  const startIcon = startIconProp && (
    <ButtonStartIcon className={classes.startIcon} styleProps={styleProps}>
      {startIconProp}
    </ButtonStartIcon>
  );

  const endIcon = (loading || endIconProp) && (
    <ButtonEndIcon className={classes.endIcon} styleProps={styleProps}>
      {loading ? <Icon icon={<IconHubbleBubble />} /> : endIconProp}
    </ButtonEndIcon>
  );

  const content = (
    <ButtonText className={classes.text} styleProps={styleProps}>
      {children}
    </ButtonText>
  );

  return (
    <ButtonRoot
      styleProps={styleProps}
      component={component}
      disabled={disabled}
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      {startIcon}
      {content}
      {endIcon}
    </ButtonRoot>
  );
});
Button.displayName = ComponentName;
Button.name = ComponentName;
export default Button;
