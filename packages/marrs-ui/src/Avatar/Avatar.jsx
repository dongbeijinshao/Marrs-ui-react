import clsx from 'clsx';
import * as React from 'react';
import { styled } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('Avatar');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};
const AvatarRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(() => ({
  //书写样式
  width: '200px',
  height: '200px'
}));
const Avatar = React.forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const {
    classes: classesProps,
    className,
    // radius = '50%',
    icon,
    ...other
  } = props;

  const styleProps = {
    volume: props.volume,
    classes: classesProps
  };
  const classes = useUtilityClasses(styleProps);

  // other.radius = radius || '50%';

  return (
    <AvatarRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {icon}
    </AvatarRoot>
  );
});

export default Avatar;
