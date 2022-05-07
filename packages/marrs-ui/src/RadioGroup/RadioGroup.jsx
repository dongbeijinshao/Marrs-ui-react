import clsx from 'clsx';
import {
  cloneElement,
  Children,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useState
} from 'react';
import GroupContext from '../CheckboxBase/GroupContext';
import FlexBox from '../FlexBox';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('RadioGroup');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const RadioGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps: { row } }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  ...(row && {
    flexDirection: 'row'
  })
}));

const RadioGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    wrap = 'nowrap',
    // 自定义className
    className,
    // 是否横向排列方向
    row = false,
    // 子元素
    children,
    // 自定义icon
    icon,
    // icon 大小
    volume,
    // 选中的颜色
    color,
    // 是否禁用所有单选框
    disabled,
    // 初始值
    value,
    defaultValue,
    // 子元素排列margin间距
    gap = 2,
    onChange = noop,
    // 覆盖class
    classes,
    ...other
  } = props;

  const styleProps = { classes, row, wrap };

  const classNames = useUtilityClasses(styleProps);

  const [values, setValues] = useState({});

  const handleEmitCheck = useCallback(
    (checkedValue) => {
      const newValues = Object.entries(values).reduce(
        (rs, [key]) => {
          return {
            ...rs,
            [key]: String(checkedValue) === String(key)
          };
        },
        { [checkedValue]: true }
      );
      if (typeof value === 'undefined') {
        setValues(newValues);
      }

      const current =
        Object.entries(newValues).find(([, value]) => value === true) || [];
      onChange(current[0] || value);
    },
    [values, onChange, value]
  );

  useEffect(() => {
    if (typeof value === 'undefined') {
      setValues({ [defaultValue]: true });
    } else {
      setValues({ [value]: true });
    }
  }, [value, defaultValue]);

  const context = {
    icon,
    volume,
    color,
    controlled: true,
    disabled,
    emitValue: handleEmitCheck
  };

  return (
    <RadioGroupRoot
      className={clsx(classNames.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      <GroupContext.Provider value={context}>
        <FlexBox container gap={gap} wrap={wrap} {...other}>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) {
              return null;
            }

            return (
              <FlexBox key={child.props.value} item>
                {cloneElement(child, {
                  checked: values[String(child.props.value)]
                })}
              </FlexBox>
            );
          })}
        </FlexBox>
      </GroupContext.Provider>
    </RadioGroupRoot>
  );
});

export default RadioGroup;
