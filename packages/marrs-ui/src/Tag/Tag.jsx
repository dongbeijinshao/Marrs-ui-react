import clsx from 'clsx';
import React from 'react';
// import Button from '../Button';
import ButtonBase from '../ButtonBase';
import { styled } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, customUtils, generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const { toRGB } = customUtils;
const ComponentName = getComponentName('Tag');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('startIcon', 'endIcon', 'content')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const commonIconStyles = (styleProps, buttonType, theme) => ({
  ...(styleProps.volume === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(10) : theme.sizing(11)
    }
  }),
  ...(styleProps.volume === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(10) : theme.sizing(11)
    }
  }),
  ...(styleProps.volume === 'big' && {
    '& > *:nth-of-type(1)': {
      fontSize: buttonType === 'end' ? theme.sizing(10) : theme.sizing(11)
    }
  })
});
const TagRoot = styled(ButtonBase, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes', 'color', 'volume']
  }),
  overridesResolver: noop
})(({ theme, styleProps }) => {
  return {
    justifyContent: 'normal',
    ...theme.typography.button,
    ...(styleProps.textTransform && {
      textTransform: styleProps.textTransform
    }),
    color: 'inherit',
    borderColor: 'currentColor',
    minWidth: theme.sizing(16),
    padding: theme.spacing(2, 4),
    // display: 'inline-block',

    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color', 'color'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    ...(styleProps.face !== 'plain' && {
      borderRadius: theme.radius.create(styleProps.radius)
    }),
    ...(styleProps.face === 'plain' &&
      styleProps.color !== 'inherit' && {
        color: theme.palette.getColor(styleProps.color).color(),
        ...theme.createBorder({
          ...styleProps,
          width: styleProps.volume === 'big' ? 2 : 1
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
    // display: 'inline-block',
    // display: inline-flex;

    // verticalAlign: 'baseline',
    alignItems: 'center',
    ...(styleProps.volume === 'small' && {
      padding: `0 ${theme.sizing(4)}`,
      // lineHeight: theme.sizing(13),
      fontSize: theme.sizing(10),
      height: theme.sizing(14),
      // minHeight: theme.sizing(14),
      fontWeight: theme.typography.fontWeightRegular
    }),
    ...(styleProps.volume === 'medium' && {
      padding: `0 ${theme.sizing(4)}`,
      lineHeight: theme.sizing(19),
      fontSize: theme.sizing(10),
      // height: theme.sizing(16),
      minHeight: theme.sizing(16),

      fontWeight: theme.typography.fontWeightRegular
    }),
    ...(styleProps.volume === 'big' && {
      padding: `0 ${theme.sizing(4)}`,
      lineHeight: theme.sizing(),
      fontSize: theme.sizing(11),
      // height: theme.sizing(18),
      minHeight: theme.sizing(18),
      mainHeight: theme.sizing(18),

      fontWeight: theme.typography.fontWeightMedium
    }),

    ...(styleProps.fullWidth && {
      width: '100%'
    }),
    ...(styleProps.color === 'inherit' && {
      color: 'inherit'
    }),
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    overflow: 'hidden'
  };
});
// const TagText = styled('span', {
//   name: ComponentName,
//   slot: 'Text'
// })(({ styleProps, theme }) => ({
//   ...((styleProps.fullWidth || styleProps.width) && {
//     width: styleProps.width ? `${theme.sizing(styleProps.width)}` : '100%'
//   }),
//   ...(styleProps.width && {
//     justifyContent: 'left',
//     whiteSpace: 'nowrap',
//     overflow: 'hidden'
//   })
// }));

const TagStartIcon = styled('span', {
  name: ComponentName,
  slot: 'StartIcon'
})(({ styleProps, theme }) => ({
  display: 'inherit',
  ...(styleProps.children && {
    marginRight: theme.sizing(2)
    // marginLeft: -4
  }),
  ...commonIconStyles(styleProps, 'start', theme)
}));

const TagEndIcon = styled('span', {
  name: ComponentName,
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const { styleProps } = props;

    return [styles.endIcon, styles[`iconSize${capitalize(styleProps.volume)}`]];
  }
})(({ styleProps, theme }) => ({
  display: 'inherit',
  ...(styleProps.children && {
    marginLeft: theme.sizing(2)
  }),
  ...commonIconStyles(styleProps, 'end', theme)
}));
const Tag = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {}
  });
  const {
    className,
    classes: classesProps,
    color,
    radius = 4,
    volume = 'medium',
    face = 'filled',
    startIcon: startIconProp,
    endIcon: endIconProp,
    children,
    ...other
  } = props;
  const styleProps = {
    color,
    face,
    radius,
    volume,
    children,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);
  const startIcon = startIconProp && (
    <TagStartIcon className={classes.startIcon} styleProps={styleProps}>
      {startIconProp}
    </TagStartIcon>
  );

  const endIcon = endIconProp && (
    <TagEndIcon className={classes.endIcon} styleProps={styleProps}>
      {endIconProp}
    </TagEndIcon>
  );
  // const content = (
  //   <TagText className={classes.content} styleProps={styleProps}>
  //     {children}
  //   </TagText>
  // );
  const content = children;
  return (
    <TagRoot
      component="div"
      styleProps={styleProps}
      face={face}
      color={color}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {startIcon}
      {content}
      {endIcon}
    </TagRoot>
  );
});

Tag.displayName = ComponentName;
Tag.name = ComponentName;
export default Tag;
