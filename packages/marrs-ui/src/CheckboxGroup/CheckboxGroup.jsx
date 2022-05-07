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
import GroupContext from '../CheckboxBase/GroupContext';
import FlexBox from '../FlexBox';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
const ComponentName = getComponentName('CheckboxGroup');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('control')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CheckboxGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ styleProps: { row }, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: theme.sizing(theme.typography.fontSize),
  flexWrap: 'wrap',
  ...(row && {
    flexDirection: 'row'
  })
}));

const getCurrentValue = (valuesInput) => {
  return (
    Object.entries(valuesInput).map(([key, v]) =>
      v === true ? key : undefined
    ) || []
  ).filter(Boolean);
};

const CheckboxGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    classes: classesProps,
    className,
    children,
    // 是否横向排列方向
    row,
    // 最大值
    max,
    // 默认值
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
    // 子元素排列间距
    gap = 2,
    wrap = 'nowrap',
    // change 事件
    onChange = noop,
    ...other
  } = props;

  // value: checked
  const [values, setValues] = useState({});

  const handleEmitCheck = useCallback(
    (checkedValue, incomingChecked) => {
      if (
        !isNaN(max) &&
        incomingChecked &&
        getCurrentValue(values).length >= max
      )
        return;
      const newValues = {
        ...values,
        [checkedValue]: incomingChecked
      };
      if (typeof value === 'undefined') {
        setValues(newValues);
      }
      const current = getCurrentValue(newValues);
      onChange(current.filter(Boolean) || value);
    },
    [values, max, onChange, value]
  );

  useEffect(() => {
    if (typeof value === 'undefined') {
      setValues(
        defaultValue.reduce((rs, key) => {
          return { ...rs, [key]: true };
        }, {})
      );
    } else {
      setValues(
        value.reduce((rs, key) => {
          return { ...rs, [key]: true };
        }, {})
      );
    }
  }, [value, defaultValue]);

  const context = {
    icon,
    volume,
    color,
    disabled,
    controlled: true,
    emitValue: handleEmitCheck
  };

  const styleProps = { classes: classesProps, className, row, wrap };

  const classes = useUtilityClasses(styleProps);

  return (
    <CheckboxGroupRoot
      styleProps={styleProps}
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      <GroupContext.Provider value={context}>
        <FlexBox
          styleProps={styleProps}
          container
          gap={gap}
          wrap={wrap}
          {...other}
        >
          {Children.map(children, (child) => {
            if (!isValidElement(child)) {
              return null;
            }
            return (
              <FlexBox styleProps={styleProps} key={child.value} item>
                {cloneElement(child, {
                  defaultChecked: values[String(child.props.value)]
                })}
              </FlexBox>
            );
          })}
        </FlexBox>
      </GroupContext.Provider>
    </CheckboxGroupRoot>
  );
});
CheckboxGroup.name = ComponentName;
CheckboxGroup.displayName = ComponentName;
export default CheckboxGroup;
