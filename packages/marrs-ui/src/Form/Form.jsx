import clsx from 'clsx';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';
import { ComponentName as NameOfField } from '../Field';
import FieldContext from '../Field/FieldContext';
import { styled } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import useForceUpdate from '../utils/useForceUpdate';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Form');
const useUtilityClasses = (styleProps) => {
  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(
    ComponentName,
    slots,
    styleProps.classes
  );
  return composedClasses;
};

const FormRoot = styled('form', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const Form = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    classes: classesProps,
    // 子组件
    children = [],
    // 表单项 label 宽度，默认单位为px
    labelWidth,
    // 初始值
    initialValues = {},
    // 表单项 label对齐方式
    labelAlign,
    // 表单校验触发时机，可选值为 onChange、onBlur
    // validateTrigger = 'onChange',
    // 是否在 label 后面添加冒号
    colon,
    onChange = noop,
    // 提交表单且验证通过后触发
    onSubmit = noop,
    // 提交表单且验证不通过后触发
    onFailed = noop
  } = props;

  const styleProps = { classes: classesProps };
  const classes = useUtilityClasses(styleProps);

  const update = useForceUpdate();

  const filteredChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => child.props.name && child.type.displayName === NameOfField
    );
  }, [children]);

  const rules = useMemo(() => {
    return filteredChildren.reduce((rs, child) => {
      return {
        ...rs,
        [child.props.name]: child.props.rules
      };
    }, {});
  }, [filteredChildren]);

  // 检验rule
  const ruleChecked = useCallback((value, rule) => {
    if (rule.required) {
      if (value === undefined || value === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
    }
    if (rule.pattern && !rule.pattern.test(String(value))) {
      return rule.pattern.test(String(value));
    }
    return true;
  }, []);

  const getCurrentFormValue = useCallback(() => {
    const values = formValueRef.current;
    return Object.keys(values).reduce((rs, next) => {
      return {
        ...rs,
        [next]: { value: values[next].value }
      };
    }, {});
  }, []);

  const formValueRef = useRef(
    Object.entries(initialValues).reduce((rs, [name, value]) => {
      return {
        ...rs,
        [name]: { value }
      };
    }, {})
  );

  const setFormValue = useCallback((args) => {
    Object.entries(args).forEach(([name, arg]) => {
      formValueRef.current[name] = {
        ...formValueRef.current[name],
        ...arg
      };
    });
  }, []);

  const handleRules = useCallback(
    (value, rules) => {
      if (!rules) return;
      let result = '';

      rules.some((rule) => {
        if (!ruleChecked(value, rule)) {
          result = rule;
          return true;
        }
        return false;
      });
      return { errorMessage: result.message };
    },
    [ruleChecked]
  );

  const handleEmitValue = useCallback(
    (arg) => {
      setFormValue(arg);
      validate().then(onChange).catch(noop);
    },
    [onChange, setFormValue, validate]
  );

  const context = {
    labelWidth,
    labelAlign,
    colon,
    emitValue: handleEmitValue
  };
  const getValues = useCallback(() => {
    return Object.keys(formValueRef.current).reduce((rs, next) => {
      return {
        ...rs,
        [next]: formValueRef.current[next].value
      };
    }, {});
  }, []);

  const validate = useCallback(() => {
    const submitValue = getCurrentFormValue();
    const ruleResult = Object.entries(rules).reduce((rs, [name, rule]) => {
      return {
        ...rs,
        [name]: handleRules(submitValue[name]?.value, rule)
      };
    }, {});

    const errors = Object.keys(ruleResult).reduce((rs, next) => {
      return {
        ...rs,
        ...(ruleResult[next]?.errorMessage !== undefined && {
          [next]: ruleResult[next].errorMessage
        })
      };
    }, {});
    setFormValue(ruleResult);
    update();
    if (Object.keys(errors).length === 0) {
      return Promise.resolve(getValues());
    }
    return Promise.reject(errors);
  }, [
    getCurrentFormValue,
    getValues,
    handleRules,
    rules,
    setFormValue,
    update
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      validate().then(onSubmit).catch(onFailed);
    },
    [onFailed, onSubmit, validate]
  );

  useImperativeHandle(
    ref,
    () => ({
      getCurrentFormValue: () => {
        return validate();
      }
    }),
    [getCurrentFormValue, validate]
  );

  return (
    <FormRoot
      className={clsx(className, classes.root)}
      styleProps={styleProps}
      onSubmit={handleSubmit}
    >
      <FieldContext.Provider value={context}>
        {Children.map(children, (child) => {
          const { name } = child.props;
          if (!isValidElement(child)) {
            return null;
          }
          if (child.type.displayName === NameOfField) {
            const formValue = formValueRef.current[name] || {};

            return cloneElement(child, {
              defaultValue: formValue.value,
              errorMessage: formValue.valid ? '' : formValue.errorMessage
            });
          }
          return child;
        })}
      </FieldContext.Provider>
    </FormRoot>
  );
});
Form.displayName = ComponentName;
export default Form;
