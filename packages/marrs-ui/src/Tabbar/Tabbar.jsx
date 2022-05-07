import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import FlexBox from '../FlexBox';
import { useThemeProps } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';
import TabbarContext from './TabbarContext';

const ComponentName = getComponentName('Tabbar');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const TabbarRoot = styled('div', {
  name: 'MarrsTabbar',
  slot: 'root'
})(({ theme }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: theme.shadows.create(10),
    zIndex: theme.zIndex.navBar,
    background: theme.palette.background.paper
  };
});

const Tabbar = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    name: 'MarrsTabbar',
    props: inProps
  });

  const {
    className,
    color,
    current: currentProps = 0,
    volume,
    children
  } = props;

  const [current, setCurrent] = useState(currentProps);
  const emitValue = useCallback((name) => {
    setCurrent(name);
  }, []);
  const forwardProps = { color, volume, current, emitValue };

  const classes = useUtilityClasses({});

  return (
    <TabbarRoot className={clsx(classes.root, className)} ref={ref}>
      <TabbarContext.Provider value={forwardProps}>
        <FlexBox container justifyContent="space-around">
          {/* {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              index,
              active: current === index
            });
          })} */}
          {children}
        </FlexBox>
      </TabbarContext.Provider>
    </TabbarRoot>
  );
});
export default Tabbar;
