import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useState
} from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import SidebarContext from './SidebarContext';

const ComponentName = getComponentName('Sidebar');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SidebarGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { width } }) => ({
  // background: theme.palette.common.white,
  fontSize: theme.sizing(theme.typography.fontSize),
  width: theme.sizing(width),
  display: 'inline-block',
  overflowY: 'auto'
}));

const Sidebar = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    children,
    // 内容宽度
    width = 92,
    // 默认当前导航项的索引
    value = 0,
    // 监听事件
    onChange = noop,
    // 颜色
    color,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = { width, classes: classesProps };

  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  // useEffect(() => {
  //   onChange(currentValue);
  // }, [currentValue, onChange]);

  const handleValue = useCallback(
    (val) => {
      setCurrentValue(val);
      onChange(val);
    },
    [onChange]
  );

  const currentIndex = Children.toArray(children).findIndex(
    (child, index) => (child.props.name || index) === currentValue
  );

  const childNames = Children.map(
    children,
    (child, index) => child.props.name || index
  );

  const context = {
    color,
    emitValue: handleValue,
    next: childNames[currentIndex + 1],
    prev: childNames[currentIndex - 1]
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <SidebarGroupRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <SidebarContext.Provider value={context}>
        {Children.map(children, (child, index) => {
          const name = child.props.name ?? index;

          if (!isValidElement(child)) {
            return null;
          }

          return cloneElement(child, {
            name,
            selected: currentValue === name
          });
        })}
      </SidebarContext.Provider>
    </SidebarGroupRoot>
  );
});

Sidebar.displayName = ComponentName;
Sidebar.name = ComponentName;
export default Sidebar;
