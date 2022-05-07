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
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import SelectorContext from './SelectorContext';

const ComponentName = getComponentName('BaseSelector');
const BaseSelectorRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const getCurrentValue = (valuesInput = {}) => {
  return (
    Object.entries(valuesInput).map(([key, v]) =>
      v === true ? key : undefined
    ) || []
  ).filter(Boolean);
};

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const BaseSelector = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    children,
    multiple = false,
    // 最大个数
    max,
    // 最小个数
    min = 0,
    // 默认值
    color,
    // 是否禁用所有单选框
    disabled,
    // 初始值
    value: propsValue,
    // 子元素排列间距
    // change 事件
    onChange = noop,
    classes: classesProps,
    className,
    ...other
  } = props;

  const [values, setValues] = useState({});

  const handleEmitCheck = useCallback(
    (value, incomingChecked) => {
      const currentValues = getCurrentValue(values || {});

      if (!multiple && incomingChecked && currentValues.length >= 1) {
        const newValues = {
          ...Object.keys(values).reduce((r, n) => ({ ...r, [n]: false }), {}),
          [value]: incomingChecked
        };
        setValues(newValues);
        return;
      }

      if (!isNaN(max) && incomingChecked && currentValues.length >= max) return;

      if (!isNaN(min) && !incomingChecked && currentValues.length <= min)
        return;

      const newValues = {
        ...values,
        [value]: incomingChecked
      };
      setValues(newValues);
      const current = getCurrentValue(newValues);
      onChange(current.filter(Boolean) || propsValue);
    },
    [values, max, min, multiple, propsValue]
  );

  // useEffect(() => {
  //   const current = getCurrentValue(values);
  //   onChange(current.filter(Boolean) || propsValue);
  // }, [onChange, values, propsValue]);

  useEffect(() => {
    setValues(
      propsValue &&
        propsValue.reduce((rs, key) => {
          return { ...rs, [key]: true };
        }, {})
    );
  }, [propsValue]);

  const context = {
    color,
    disabled,
    controlled: true,
    emitValue: handleEmitCheck,
    values: values
  };

  const styleProps = {
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <BaseSelectorRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      <SelectorContext.Provider value={context}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return null;
          }
          return cloneElement(child, {
            checked: values && values[String(child.props.value)]
          });
        })}
      </SelectorContext.Provider>
    </BaseSelectorRoot>
  );
});

BaseSelector.displayName = ComponentName;

export default BaseSelector;
