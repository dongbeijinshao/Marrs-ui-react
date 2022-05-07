import { IconSelect } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import {
  assert,
  generateClassesKey,
  generateShouldForwardProp
} from '../utils';
import { noop, resolved } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import GroupContext from './GroupContext';

const ComponentName = getComponentName('CheckboxBase');

const useUtilityClasses = (styleProps) => {
  const { disabled, classes, volume, color } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      ...generateClassesKey({ color }, { volume }, { color, volume })
    ],
    label: ['label'],
    icon: ['icon']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const CheckboxBaseRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { volume, disabled } }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  userSelect: 'none',
  color: theme.palette.text.primary,
  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity
  }),
  ...(volume === 'tiny' && {
    fontSize: theme.sizing(6)
  }),
  ...(volume === 'small' && {
    fontSize: theme.sizing(8)
  }),
  ...(volume === 'medium' && {
    fontSize: theme.sizing(11)
  }),
  ...(volume === 'large' && {
    fontSize: theme.sizing(12)
  })
}));

const CheckboxBaseIconBox = styled('div', {
  name: ComponentName,
  slot: 'IconBox'
})(({ theme, styleProps: { color, iconStyle, checkedState, disabled } }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.getColor(color).color(),
    justifyContent: 'center',
    transition: theme.transitions.create([
      'border-color',
      'color',
      'background-color'
    ]),
    borderRadius: {
      radio: '50%',
      checkbox: theme.radius.create(4)
    }[iconStyle],
    ...(iconStyle !== 'none' && {
      border: `${theme.sizing(1.5)} solid ${theme.palette
        .getColor(color)
        .color()}`
    }),

    ...(!checkedState && {
      backgroundColor: theme.palette.common.white,
      border: `${theme.sizing(1.5)} solid ${theme.palette.grey[300]}`
    }),
    padding: theme.sizing(1),

    ...(disabled &&
      !checkedState && {
        borderColor: theme.palette.neutral.N4,
        background: theme.palette.grey.A100
      })
  };
});

const CheckboxBaseIcon = styled('div', {
  name: ComponentName,
  slot: 'Icon'
})(({ theme, styleProps: { noUncheckIcon, checkedState } }) => {
  return {
    transform: 'scale(1)',
    lineHeight: '1em',
    width: '1em',
    height: '1em',
    ...(noUncheckIcon && {
      transition: theme.transitions.create(['transform']),
      ...(!checkedState && {
        transform: 'scale(0)'
      })
    })
  };
});

const CheckboxBaseLabel = styled('span', {
  name: ComponentName,
  slot: 'Label'
})(({ theme, styleProps: { labelDisabled } }) => {
  return {
    marginLeft: theme.sizing(8),
    lineHeight: theme.sizing(8),
    fontSize: theme.sizing(13),
    ...(labelDisabled && {
      color: theme.palette.text.disabled,
      opacity: theme.palette.action.disabledOpacity
    })
  };
});

const defaultIcon = <IconSelect />;

const CheckboxBase = forwardRef((inProps, ref) => {
  const parentContext = useContext(GroupContext);

  const { controlled, emitValue = resolved, ...inheritProps } = parentContext;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });

  assert(!!String(props.value), '选项必须有value');

  const {
    // 判断类型, radio, checkbox
    type = 'checkbox',
    // radio 值
    value,
    // 颜色值
    color = 'primary',
    // 未选中的checked
    uncheckedIcon,
    // 勾选中的checked
    icon = defaultIcon,
    // icon的值: checkbox | radio | none
    iconStyle = props.type || 'checkbox',
    // 是否选中
    checked,
    defaultChecked,
    // label 是否禁用
    labelDisabled,
    // 禁用文本和选中框
    disabled,
    // 自定义icon 大小
    volume = 'small',
    // 模拟点击事件
    onClick = noop,
    // 模拟change事件
    onChange = noop,
    // 文本内容
    label,
    // 额外的class
    className,
    // 覆盖class
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    classes: classesProps,
    volume,
    disabled,
    color,
    iconStyle,
    labelDisabled,
    noUncheckIcon: !isValidElement(uncheckedIcon)
  };

  const [checkedState, setCheckedState] = useState(checked);

  useEffect(() => {
    if (typeof checked === 'undefined') {
      setCheckedState(defaultChecked);
    } else {
      setCheckedState(checked);
    }
  }, [defaultChecked, checked]);

  const classes = useUtilityClasses(styleProps);

  const changeState = useCallback(
    (state) => {
      if (typeof checked === 'undefined') {
        if (controlled) {
          emitValue(String(value), state);
        } else {
          setCheckedState(state);
        }
      } else {
        if (controlled) {
          emitValue(String(value));
        }
      }
      onChange(state);
    },
    [setCheckedState, checked, value, controlled, emitValue, onChange]
  );

  const handleClick = useCallback(
    (event) => {
      if (disabled) return;
      onClick(event);
      if (type === 'checkbox') {
        changeState(!checkedState);
      } else if (type === 'radio' && !checkedState) {
        changeState(true);
      }
    },
    [checkedState, changeState, type, disabled, onClick]
  );

  const renderIcon = (
    <CheckboxBaseIconBox
      className={classes.icon}
      styleProps={{ ...styleProps, checkedState }}
      onClick={handleClick}
    >
      <CheckboxBaseIcon styleProps={{ ...styleProps, checkedState }}>
        {checkedState ? icon : uncheckedIcon || icon}
      </CheckboxBaseIcon>
    </CheckboxBaseIconBox>
  );

  const handleClickLabel = labelDisabled ? noop : handleClick;

  const renderLabel = label && (
    <CheckboxBaseLabel
      className={classes.label}
      styleProps={{ ...styleProps }}
      onClick={handleClickLabel}
    >
      {label}
    </CheckboxBaseLabel>
  );

  return (
    <CheckboxBaseRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...other}
    >
      {renderIcon}
      {renderLabel}
    </CheckboxBaseRoot>
  );
});
CheckboxBase.name = ComponentName;
CheckboxBase.displayName = ComponentName;
export default CheckboxBase;
