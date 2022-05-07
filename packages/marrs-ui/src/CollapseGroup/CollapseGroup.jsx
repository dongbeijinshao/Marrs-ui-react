import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useState
} from 'react';
import CollapseContext from '../Collapse/CollapseContext';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('CollapseGroup');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CollapseGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => {
  return {
    fontSize: theme.sizing(theme.typography.fontSize)
  };
});

const CollapseGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    children,
    // 尺寸大小
    volume,
    // 是否显示内边框
    border = true,
    // 当前展开面板的 name, 数组是手风琴模式，单个字符串或者数字是非手风琴模式
    value,
    // 手风琴
    accordion,
    showArrow = false,
    rightControl,
    onChange = noop,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = { classes: classesProps, ...other };
  const [parentValue, setParentValue] = useState([]);

  useEffect(() => {
    if (value) {
      setParentValue(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  const handleToggle = useCallback(
    (name) => {
      let currValue;
      if (parentValue.includes(name)) {
        currValue = parentValue.filter((value) => value !== name);
      } else {
        currValue = accordion ? [name] : [...parentValue, name];
      }
      onChange(currValue);
      setParentValue(currValue);
    },
    [parentValue, accordion, onChange]
  );

  const context = {
    volume,
    value,
    border,
    showArrow,
    rightControl,
    EmitToggle: handleToggle
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <CollapseGroupRoot
      styleProps={styleProps}
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      <CollapseContext.Provider value={context}>
        {Children.map(children, (child, index) => {
          const name = child.props.name ?? index;
          return cloneElement(child, {
            expand: parentValue.includes(name),
            name
          });
        })}
      </CollapseContext.Provider>
    </CollapseGroupRoot>
  );
});

export default CollapseGroup;
