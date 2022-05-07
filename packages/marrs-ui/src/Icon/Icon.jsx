import clsx from 'clsx';
import * as React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('Icon');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const iconSizeStyle = (styleProps, theme) => ({
  ...(styleProps.volume === 'tiny' && {
    fontSize: theme.sizing(16)
  }),
  ...(styleProps.volume === 'small' && {
    fontSize: theme.sizing(18)
  }),
  ...(styleProps.volume === 'medium' && {
    fontSize: theme.sizing(20)
  }),
  ...(styleProps.volume === 'large' && {
    fontSize: theme.sizing(22)
  })
});

const IconRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => {
  return {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.sizing(16),
    ...(styleProps.spin && {
      ...theme.animation.create('spin')
    }),
    ...iconSizeStyle(styleProps, theme),
    ...(styleProps.size && {
      fontSize: theme.sizing(styleProps.size)
    })
    // ...(styleProps.color && {
    //   color: theme.palette.getColor(styleProps.color).color()
    // })
  };
});

const Icon = React.forwardRef(function Icon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    // 当出现特殊属性(此处为volume)默认值需要走特殊逻辑时，如此编写
    customProps: { volume: 'inherit' }
  });

  const {
    className,
    classes: classesProps,
    icon,
    spin,
    color,
    volume,
    size,
    ...other
  } = props;

  const styleProps = {
    spin,
    volume,
    color,
    size,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);
  return (
    <IconRoot
      styleProps={styleProps}
      ref={ref}
      {...other}
      className={clsx(classes.root, className)}
    >
      {icon}
    </IconRoot>
  );
});

Icon.displayName = ComponentName;
Icon.name = ComponentName;
export default Icon;
