import clsx from 'clsx';
import {
  Children,
  useMemo,
  useState,
  forwardRef,
  useCallback,
  useEffect
} from 'react';
import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('TreeSelect');

const useUtilityClasses = (styleProps) => {
  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'sidebar',
      'sidebarGroup',
      'selectItem',
      'selectContent'
    )
  };

  const composedClasses = composeClassesByName(
    ComponentName,
    slots,
    styleProps.classes
  );

  return composedClasses;
};
const TreeSelectRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ styleProps: { hiddenContent, sidebarWidth }, theme }) => ({
  position: 'relative',
  display: 'flex',
  fontSize: theme.sizing(theme.typography.fontSize),
  userSelect: 'none',
  overflowY: 'auto',
  // backgroundColor: theme.palette.neutral.N3,
  height: '100%',
  ...(hiddenContent && {
    width: `${theme.sizing(sidebarWidth)} !important`
  })
}));

const Content = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ styleProps, theme }) => ({
  position: 'relative',
  width: '100%',
  // height: '100%',
  overflow: 'auto',
  flex: 1,
  background: theme.palette.background.paper,
  ...(styleProps.hiddenContent && {
    flex: 0,
    display: 'none'
  })
}));

const TreeTab = styled('div', {
  name: ComponentName,
  slot: 'Icon'
})(({ styleProps }) => ({
  position: 'relative',
  // width: '100%',
  display: styleProps.current ? 'block' : 'none'
}));

const TreeSelect = forwardRef((inProps, refProp) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    // children->{ title: '导航名称', id: '匹配唯一标识', disabled: '是否禁用'} || control
    // 默认选中值, 默认索引
    value = 0,
    // 颜色
    color,
    // 左边导航的change事件
    onTabChange = noop,
    children,
    // 其它
    classes: classesProps,
    className,
    sidebarWidth = 92,
    ...other
  } = props;

  const [current, setCurrent] = useState();
  const [hiddenContent, setHiddenContent] = useState(false);
  const styleProps = {
    className,
    classes: classesProps,
    hiddenContent,
    sidebarWidth
  };
  const classes = useUtilityClasses(styleProps);
  const handleNavChange = useCallback(
    (name) => {
      setCurrent(name);
      onTabChange(name);
    },
    [setCurrent, onTabChange]
  );

  const tabs = useMemo(() => {
    return Children.map(children, (child) => {
      return { tabProps: child.props, ref: child.ref };
    });
  }, [children]);
  useEffect(() => {
    const currTab = tabs.find((tab) => tab.tabProps.name === current);
    setHiddenContent(!currTab?.tabProps.children);
  }, [current]);
  return (
    <TreeSelectRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      {...other}
      ref={refProp}
    >
      <Sidebar
        onChange={handleNavChange}
        value={value}
        width={sidebarWidth}
        color={color}
      >
        {tabs.map(({ tabProps }) => {
          return (
            <SidebarItem
              key={tabProps.name}
              title={tabProps.title}
              name={tabProps.name}
              badge={tabProps.badge}
            />
          );
        })}
      </Sidebar>
      <Content styleProps={{ hiddenContent }}>
        {tabs.map(({ tabProps, ref }) => {
          return (
            <TreeTab
              ref={ref}
              key={tabProps.name}
              styleProps={{
                current: tabProps.name === current
              }}
            >
              {tabProps.children}
            </TreeTab>
          );
        })}
      </Content>
    </TreeSelectRoot>
  );
});

export default TreeSelect;
