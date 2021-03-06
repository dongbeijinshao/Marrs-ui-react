import { IconError, IconRequire } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import Cell from '../Cell/Cell';
import Icon from '../Icon/Icon';
import { makeStyles, styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp, useForkRef } from '../utils';
import { noop, resolved } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import FieldContext from './FieldContext';
import { computeInputType, formatNumberValue } from './utils';

export const ComponentName = getComponentName('Field');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('content', 'input', 'message', 'word', 'icon')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const useStyle = makeStyles((theme) => ({
  title: {
    flex: 'none !important',
    lineHeight: `${theme.sizing(18)} !important`
  },
  content: {
    lineHeight: `${theme.sizing(18)} !important`,
    minHeight: `${theme.sizing(18)} !important`
  }
}));

const FieldRoot = styled(Cell, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({ include: ['classes'] })
})(({ theme }) => ({
  flex: 'none',
  alignItems: 'center',
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const inputStyle = ({
  theme,
  styleProps: {
    disabled,
    // labelWidth,
    textAlign,
    autocompleteOff,
    // valid,
    currentHeight,
    autoHeight
    // ellipsis
  }
}) => ({
  display: 'block',
  boxSizing: 'border-box',
  textAlign: 'left',
  backgroundColor: 'transparent',
  resize: 'none',
  // lineHeight: 'inherit',
  // font: 'inherit',
  width: '100%',
  fontSize: theme.sizing(theme.typography.fontSize),
  // margin: `${theme.sizing(-1)} 0 0 0`,
  lineHeight: theme.sizing(18),
  padding: 0,
  margin: 0,
  border: 0,
  color: theme.palette.grey[900],
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: theme.palette.grey[500]
  },
  // ??????search??????x
  '&[type="search"]::-webkit-search-cancel-button': {
    WebkitAppearance: 'none',
    display: 'none'
  },
  '&[type="search"]::-webkit-search-decoration': {
    display: 'none'
  },

  '&input::-webkit-search-cancel-button': {
    display: 'none'
  },

  // ??????????????????
  ...(autocompleteOff && {
    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
      {
        transitionDelay: '111111s',
        transition: `color 11111s ease-out, background-color 111111s ease-out`
      }
  }),
  ...(autoHeight && {
    transition: theme.transitions.create('height'),
    height: currentHeight
  }),
  // ...(!valid && {
  //   color: theme.palette.error.main,
  //   '&::placeholder': {
  //     color: theme.palette.error.main
  //   }
  // }),
  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  }),
  ...(textAlign === 'center' && {
    justifyContent: 'center',
    textAlign: 'center'
  }),
  ...(textAlign === 'right' && {
    justifyContent: 'flex-end',
    textAlign: 'right'
  })
});

const FieldLabel = styled('span', {
  name: ComponentName,
  slot: 'Label'
})(({ theme, styleProps: { labelWidth, disabled, ellipsis } }) => ({
  boxSizing: 'border-box',
  textAlign: 'left',
  wordWrap: 'break-word',

  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  }),
  ...(ellipsis && {
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }),
  labelWidth: theme.sizing(labelWidth)
}));
const ContentBox = styled('div', {
  name: ComponentName,
  slot: 'content'
})(({ theme, styleProps: { contentPadding } }) => ({
  paddingLeft: contentPadding || theme.sizing(8),
  lineHeight: theme.sizing(18),
  minHeight: theme.sizing(18)
}));

const FieldInput = styled('input', {
  name: ComponentName,
  slot: 'Input'
})(inputStyle);

const FieldTextarea = styled('textarea', {
  name: ComponentName,
  slot: 'textarea'
})(inputStyle);

const FieldMessage = styled('div', {
  name: ComponentName,
  slot: 'Message'
})(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center'
}));

const FieldWord = styled('div', {
  name: ComponentName,
  slot: 'Word'
})(({ theme }) => ({
  textAlign: 'right',
  color: theme.palette.secondary.main
}));

const Field = forwardRef((inProps, ref) => {
  const styles = useStyle();
  const { emitValue = resolved, ...inheritProps } = useContext(FieldContext);
  const props = useThemeProps({
    props: { ...inheritProps, ...inProps },
    name: ComponentName
  });

  const inputRef = useRef({});
  const fieldRefHandler = useForkRef(ref, inputRef);

  const {
    // ??????
    name,
    // ??????
    color,
    // ??????
    size,
    // ??????????????????????????????,???????????? telephone(???????????????) digit(???????????????) number(????????????) textarea password ???
    type,
    // ?????????????????????
    label,
    // ????????? label ??????????????????
    colon,
    // ????????????????????????????????????px,?????????6em
    labelWidth = 84,
    // ???????????????????????????????????? center right, left
    textAlign,
    // label??????????????????????????? center right, left
    labelAlign,
    // ????????????
    readonly,
    // ?????????????????????
    disabled,
    // ??????????????????????????????????????????????????????????????????
    clearable,
    // ??????icon
    rightIcon,
    // ????????????
    leftControl,
    // ???????????????
    required,
    // ????????????
    maxLength,
    // ???????????????????????????????????????maxlength??????
    showWord,
    // ?????????????????????
    center,
    // ?????????????????????????????????,(??????????????????????????????????????????)
    ellipsis,
    // ??????
    showArrow,
    // ????????????????????????
    // error,
    // ????????????
    errorMessage,
    // ???????????????
    autoHeight,
    // ???????????????
    rows = 1,
    // ???????????????????????????
    placeholder,
    // ????????????,????????????????????????????????????????????????????????????
    rightControl,
    // ?????? ??????input ?????????????????????????????????,????????????
    autocompleteOff = true,
    // ?????? ???????????????????????????????????????,????????????
    autoFocus,
    // className
    className,
    // ??????????????????????????????,????????????:event: Event
    onInput = noop,
    onFocus = noop,
    onBlur = noop,
    onClear = noop,
    onKeyPressEnter = noop,
    // ?????????
    defaultValue,
    value,
    children,
    contentPadding,
    classes: classesProps,
    ...other
  } = props;
  const [currentValue, setCurrentValue] = useState(value || defaultValue);
  const [currentFocus, setCurrentFocus] = useState(false);

  // input ????????????????????????
  // let inputing = false;
  const inputing = useRef(false);
  const el = useRef(null);

  let _value =
    'value' in props ? value : 'defaultValue' in props ? defaultValue : null;

  const forceSetValue = () => {
    const input = el.current;
    if (input) {
      if ('value' in props) {
        _value = value;
      } else {
        _value = input?.value;
      }

      if (type === 'digit') {
        _value = formatNumberValue(_value, '-');
        // _value = _value?.replace(new RegExp('[^0-9-]'), '');
        _value = _value?.replace(/[^0-9-]/g, '');
      }
      if (type === 'number') {
        _value = formatNumberValue(_value, '-');
        _value = formatNumberValue(_value, '\\.');
        // _value = _value?.replace(new RegExp('[^0-9-.]'), '');
        _value = _value?.replace(/[^0-9-.]/g, '');

        // debugger;
      }

      _value = _value || '';

      input.value = _value;
      setCurrentValue(_value);
      input.setAttribute('value', _value);
    }
  };
  // ?????????????????????????????? input ??????
  useEffect(() => {
    forceSetValue();
  });

  const [currentHeight, setCurrentHeight] = useState(inputRef?.scrollHeight);
  const styleProps = {
    labelAlign,
    labelWidth,
    autoHeight,
    currentHeight,
    autocompleteOff,
    textAlign,
    disabled,
    contentPadding,
    valid: !Boolean(errorMessage),
    ellipsis,
    classes: classesProps
  };
  useEffect(() => {
    if (inputRef.current.scrollHeight) {
      setCurrentHeight(inputRef.current.scrollHeight);
    }
  }, [currentValue]);

  const handleInput = useCallback(
    (e) => {
      // if (typeof value === 'undefined') {
      // ?????????????????????
      setCurrentValue(e.target.value);
      // }
      onInput(e.target.value);
      emitValue({ [name]: { value: e.target.value } });
    },
    [onInput, emitValue, name]
  );

  const handleBlur = useCallback(
    (e) => {
      if (readonly) return;
      onBlur(e.target);
    },
    [onBlur, readonly]
  );

  const handleFocus = useCallback(
    (e) => {
      if (readonly) return;
      onFocus(e.target);
      setCurrentFocus(true);
    },
    [onFocus, readonly]
  );
  const handleKeypress = useCallback(
    (e) => {
      switch (e.charCode) {
        case 13:
          onKeyPressEnter(e.target);
          break;
        default:
          break;
      }
    },
    [onKeyPressEnter]
  );
  const handleClear = useCallback(() => {
    onInput('');
    emitValue({ [name]: { value: '' } });
    if (typeof value === 'undefined') {
      //?????????????????????
      setCurrentValue('');
      el.current.value = '';
      onClear('');
    }
  }, [emitValue, name, onClear, onInput, value]);
  const onCustomTypeValueChange = useCallback(
    (value) => {
      setCurrentValue(value);
      emitValue({ [name]: { value } });
      onInput(value);
    },
    [emitValue, name, onInput]
  );

  // readonly, disabled ??????js??????
  if (readonly) {
    // ??????????????? readonly
    el.current && el.current.setAttribute('readonly', 'readonly');
  } else if (!readonly) {
    el.current && el.current.removeAttribute('readonly');
  }

  if (disabled) {
    // ??????????????? disabled
    el.current && el.current.setAttribute('disabled', 'disabled');
  } else if (!disabled) {
    el.current && el.current.removeAttribute('disabled');
  }

  const classes = useUtilityClasses(styleProps);

  const renderLabel = label && (
    <FieldLabel styleProps={styleProps}>
      {label}
      {required && (
        <Icon
          icon={<IconRequire />}
          sx={{
            color: (theme) => theme.palette.error.main,
            fontSize: (theme) => theme.sizing(12)
          }}
        />
      )}
    </FieldLabel>
  );

  const renderInput = () => {
    const inputProps = {
      rows,
      placeholder,
      styleProps,
      type,
      // ref: inputRef,
      // value: currentValue || '',
      autoFocus,
      readOnly: readonly && 'readonly',
      disabled: disabled && 'disabled',
      defaultValue: _value,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onInput: (e) => {
        if (!inputing.current) {
          // ???????????????
          handleInput(e);

          forceSetValue();
        }
      },
      onKeyPress: handleKeypress,

      onCompositionStart: () => {
        inputing.current = true;
      },
      onCompositionEnd: (e) => {
        inputing.current = false;
        handleInput(e);
        forceSetValue();
      },
      ...other
    };
    if (isValidElement(children)) {
      return cloneElement(Children.only(children), {
        onChange: onCustomTypeValueChange,
        defaultValue: currentValue
        // ref: fieldRefHandler
      });
    }
    if (type === 'textarea') {
      return (
        <FieldTextarea
          {...inputProps}
          ref={(ref) => {
            el.current = ref;
            fieldRefHandler(ref);
          }}
        />
      );
    }
    return (
      <FieldInput
        {...inputProps}
        ref={(ref) => {
          el.current = ref;
          fieldRefHandler(ref);
        }}
        className={classes.input}
        {...computeInputType(type)}
      />
    );
  };

  const renderMessage = errorMessage && (
    <FieldMessage styleProps={styleProps} className={classes.message}>
      {errorMessage}
    </FieldMessage>
  );

  const renderWord = showWord && maxLength && (
    <FieldWord styleProps={styleProps} className={classes.word}>
      {currentValue?.length || 0}/{maxLength}
    </FieldWord>
  );

  const renderRightIcon = () => {
    if (clearable && !readonly) {
      return (
        currentValue &&
        currentFocus && (
          <Icon
            sx={{
              fill: (theme) => theme.palette.text.primary,
              fontSize: (theme) => theme.sizing(16)
            }}
            icon={<IconError />}
            onTouchStart={handleClear}
            onClick={handleClear}
            className={classes.icon}
          />
        )
      );
    }
    return rightIcon;
  };

  const renderContent = () => {
    return (
      <ContentBox className={classes.content} styleProps={styleProps}>
        {renderInput()}
        {renderMessage}
        {renderWord}
      </ContentBox>
    );
  };

  const FieldProps = {
    rightControl,
    center,
    ellipsis,
    size,
    color,
    colon,
    showArrow,
    className,
    labelAlign,
    leftControl,
    title: renderLabel,
    titleWidth: labelWidth,
    content: renderContent(),
    rightIcon: renderRightIcon(),
    ...other
  };
  return (
    <FieldRoot
      styleProps={styleProps}
      {...FieldProps}
      classes={{ title: styles.title, co??ntent: styles.content }}
      {...FieldProps}
      className={clsx(classes.root, className)}
    />
  );
});
Field.name = ComponentName;

export default Field;
