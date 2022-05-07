import clsx from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import FlexBox from '../FlexBox';
import { useThemeProps } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import { ComponentName as NameOfGoodsActionButton } from './GoodsActionButton';
import { ComponentName as NameOfGoodsActionIcon } from './GoodsActionIcon';
import { ComponentName as NameOfGoodsActionSlot } from './GoodsActionSlot';

const ComponentName = getComponentName('GoodsAction');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('icon')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsActionRoot = styled(FlexBox, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    height: theme.sizing(54),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 12),
    fontSize: theme.sizing(theme.typography.fontSize),
    backgroundColor: theme.palette.background.paper
  };
});
const GoodsActionBtnItem = styled(FlexBox, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    flex: 1,
    padding: theme.spacing(0, 4)
  };
});
const GoodsActionIconItem = styled(GoodsActionBtnItem, {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    flex: 'none',
    width: theme.sizing(56),
    fontSize: theme.sizing(10),
    marginLeft: theme.spacing(-18),
    padding: 0
  };
});

const GoodsAction = forwardRef(function GoodsAction(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });
  const { className, children, classes: classesProps, ...other } = props;

  const styleProps = {
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  const [btnsChildren, setBtnsChildren] = useState([]);
  const [iconsChildren, setIconsChildren] = useState([]);
  const [realChildren, setRealChildren] = useState(undefined);

  useEffect(() => {
    const btnsChildren = [];
    const iconsChildren = [];
    const childs = React.Children.map(children, (child) => {
      if (child.type.displayName === NameOfGoodsActionButton) {
        btnsChildren.push(child);
        return null;
      } else if (child.type.displayName === NameOfGoodsActionIcon) {
        iconsChildren.push(child);
        return null;
      } else if (child.type.displayName === NameOfGoodsActionSlot) {
        return child;
      }
    });
    setBtnsChildren(btnsChildren);
    setIconsChildren(iconsChildren);
    setRealChildren(childs);
  }, [children]);

  return (
    <GoodsActionRoot
      container
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {iconsChildren.map((item, index) => (
        <GoodsActionIconItem key={index} {...other}>
          {item}
        </GoodsActionIconItem>
      ))}
      {realChildren}
      {btnsChildren.map((item, index) => (
        <GoodsActionBtnItem key={index} {...other}>
          {item}
        </GoodsActionBtnItem>
      ))}
    </GoodsActionRoot>
  );
});

GoodsAction.displayName = ComponentName;
export default GoodsAction;
