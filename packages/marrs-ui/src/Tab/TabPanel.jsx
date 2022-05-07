import clsx from 'clsx';
import React from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('TabPanel');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const TabPanelRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({
  padding: theme.spacing(16),
  fontSize: theme.sizing(theme.typography.fontSize),
  background: theme.palette.background.paper,
  ...(!styleProps.visible && {
    display: 'none'
  })
}));

const TabPanel = React.forwardRef((props, ref) => {
  const { className, children, visible = false, ...other } = props;

  const styleProps = {
    visible
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <TabPanelRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </TabPanelRoot>
  );
});
export default TabPanel;
