import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IconItem } from '../Icon';
import useThemeProps from '../styles/useThemeProps';
import { assert } from '../utils';
import { noop } from '../utils/helperFunctions';
import TabbarContext from './TabbarContext';
import { getComponentName } from '../styles/topSet';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import clsx from 'clsx';

const ComponentName = getComponentName('item');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const TabbarItem = React.forwardRef((inProps, ref) => {
  const tabbarContext = useContext(TabbarContext);
  const { current, emitValue = noop, ...inheritProps } = tabbarContext;
  const props = useThemeProps({
    name: 'MarrsTabbarItem',
    props: inProps,
    customProps: inheritProps
  });
  const { className, name, color, onSelect = noop, onClick, ...other } = props;

  // text, color, badge, icon,
  const [active, setActive] = useState(false);

  assert(name, 'TabbarItem必须有name属性');

  useEffect(() => {
    setActive(current === name);
  }, [current, name]);

  const handleClick = useCallback(() => {
    // setActive(true);
    emitValue(name);
    onSelect(name);
  }, [emitValue, onSelect, name]);

  const textSx = useCallback(
    (theme) => {
      return {
        color: active
          ? theme.palette.getColor(color, theme.palette.text.primary).color()
          : theme.palette.text.primary
      };
    },
    [active, color]
  );
  const iconSx = useCallback(
    (theme) => {
      return {
        color: active
          ? theme.palette.getColor(color, theme.palette.text.primary).color()
          : theme.palette.text.primary
      };
    },
    [active, color]
  );

  const classes = useUtilityClasses({});

  return (
    <IconItem
      onClick={handleClick}
      ref={ref}
      iconSx={iconSx}
      textSx={textSx}
      {...other}
      className={clsx(classes.root, className)}
    ></IconItem>
  );
});
export default TabbarItem;
