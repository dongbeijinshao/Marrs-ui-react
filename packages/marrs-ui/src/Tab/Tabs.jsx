import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState
} from 'react';
import Sticky from '../Sticky';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { useEventCallback, useForkRef } from '../utils';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Tabs');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const TabsRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  background: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  ...(!styleProps.scrollspy && {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  })
}));

const TabsIndicator = styled('span', {
  name: ComponentName,
  slot: 'Indicator'
})(({ styleProps: { color, offsetLeft }, theme }) => ({
  width: theme.sizing(16),
  position: 'absolute',
  height: theme.sizing(2),
  borderRadius: theme.sizing(2),
  bottom: theme.sizing(6),
  left: offsetLeft,
  transition: theme.transitions.create(['left', 'width']),
  backgroundColor: theme.palette.getColor(color).color()
}));

const Tabs = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: 'Tabs'
  });
  const {
    children: childrenProp,
    className,
    value,
    color = 'primary',
    onChange = noop,
    indicator = true,
    sticky = false,
    scrollspy = false,
    equal = true,
    ellipsis = true,
    classes: classesProps,
    ...other
  } = props;
  const [mounted, setMounted] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [tabListHeight, setTabListHeight] = useState(0);

  const [valueDerived, setValueDerived] = useState(value);

  const [offsetLeft, setOffsetLeft] = useState(0);
  const tabListRef = useRef(null);
  const handleRef = useForkRef(ref, tabListRef);
  const valueToIndex = new Map();
  useEffect(() => {
    setValueDerived(value);
  }, [value]);

  useEffect(() => {
    setMounted(true);
    updateIndicatorState(valueDerived);
    /* eslint-disable*/
  }, [valueDerived, childrenProp]);

  const handleChange = useEventCallback(({ value, label }) => {
    setValueDerived(value);
    updateIndicatorState(value);
    onChange(value, label);
  });

  const updateIndicatorState = useEventCallback((value) => {
    const tabListNode = tabListRef.current;

    if (tabListNode) {
      if (tabListNode.scrollWidth > tabListNode.clientWidth) {
        setOverflow(true);
      }
      const tabListMeta = tabListNode.getBoundingClientRect();
      setTabListHeight(tabListMeta.height);
      const children = tabListRef.current.children;
      if (children.length > 0) {
        let tab = children[valueToIndex.get(value)];
        if (!tab) {
          tab = children[0];
        }
        const tabMeta = tab ? tab.getBoundingClientRect() : null;
        setOffsetLeft(
          tabMeta?.left -
            tabListMeta?.left +
            tabListNode?.scrollLeft +
            tabMeta?.width * 0.5 -
            8
        );
      }
    }
  });

  let childIndex = 0;
  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) {
      return null;
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    const selected = childValue === valueDerived;
    valueToIndex.set(childValue, childIndex);
    childIndex += 1;
    return cloneElement(child, {
      ...child.props,
      selected,
      value: childValue,
      color,
      scrollspy,
      equal,
      ellipsis,
      onChange: handleChange
    });
  });
  const styleProps = {
    className,
    classes: classesProps,
    color,
    overflow,
    tabListHeight,
    column: children.length,
    offsetLeft: offsetLeft,
    scrollspy,
    equal,
    ellipsis,
    ...other
  };

  const classes = useUtilityClasses(styleProps);

  const renderTabs = () => {
    return (
      <TabsRoot
        className={clsx(classes.root, className)}
        ref={handleRef}
        styleProps={styleProps}
        {...other}
      >
        {children}
        {mounted && indicator && <TabsIndicator styleProps={styleProps} />}
      </TabsRoot>
    );
  };
  return sticky ? <Sticky>{renderTabs()}</Sticky> : renderTabs();
});

Tabs.displayName = ComponentName;
Tabs.name = ComponentName;
export default Tabs;
