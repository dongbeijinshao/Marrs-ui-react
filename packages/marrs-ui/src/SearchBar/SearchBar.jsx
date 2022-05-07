import { IconSearch } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Field from '../Field/Field';
import FieldContext from '../Field/FieldContext';
import Icon from '../Icon';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { useForkRef } from '../utils';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('SearchBar');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'leftActionControl',
      'content',
      'field',
      'rightActionControl',
      'placeholder'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const SearchBarRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: theme.spacing(9, 14),
  backgroundColor: theme.palette.background.paper,
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const SearchBarLeftControl = styled('div', {
  name: ComponentName,
  slot: 'control'
})(({ theme }) => ({
  padding: theme.spacing(0, 14, 0, 0),
  lineHeight: '100%',
  fontSize: theme.sizing(14),
  color: theme.palette.text.primary
}));

const SearchBarContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(() => ({
  display: 'flex',
  flex: 1
}));

const SearchBarField = styled(Field, {
  name: ComponentName,
  slot: 'Field',
  skipVariantsResolver: false
})(({ theme, styleProps: { radius, textAlign, focused } }) => ({
  borderRadius: theme.radius.create(radius),
  backgroundColor: theme.palette.neutral.N4,
  padding: theme.spacing(9, 14),
  ...(textAlign === 'center' && !focused && { display: 'none' })
}));

const SearchBarRightControl = styled('div', {
  name: ComponentName,
  slot: 'Action'
})(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 14),
  lineHeight: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  // color: theme.palette.common.black
  color: theme.palette.text.primary
}));

const SearchPlaceholder = styled('div', {
  name: ComponentName,
  slot: 'placeholder'
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  height: theme.sizing(36),
  backgroundColor: theme.palette.background.default,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const PlaceholderText = styled('div', {
  name: ComponentName,
  slot: 'placeholderText'
})(({ theme, styleProps: { isValue } }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  fontWeight: theme.typography.fontWeightRegular,
  color: isValue ? theme.palette.text.primary : theme.palette.text.disabled,
  maxWidth: theme.sizing(250),
  height: theme.sizing(16),
  lineHeight: theme.sizing(16),
  overflow: 'hidden',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}));

const SearchBar = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const fieldRef = useRef(null);

  const fieldRefHandler = useForkRef(ref, fieldRef);

  const {
    className,
    classes: classesProps,
    // 左侧label控件
    leftActionControl,
    // 左侧搜索控件
    leftIcon,
    // 搜索框圆角
    radius = 6,
    // 搜索框内右边控件,包括按钮、徽章、开关、图片、头像等控件。
    rightControl,
    // 是否在搜索框右侧显示
    rightActionControl,
    // 是否启用清除图标，点击清除图标后会清空输入框
    clearable = true,
    // 输入框按下enter时触发,回调参数当前值
    onSearch = noop,
    onInput = noop,
    onFocus = noop,
    onBlur = noop,
    textAlign,
    placeholder,
    defaultValue,
    ...other
  } = props;

  const [focused, setFocused] = useState(false);
  const [currPlaceholder, setCurrPlaceholder] = useState(placeholder);

  const styleProps = {
    radius,
    classes: classesProps,
    textAlign,
    focused
  };
  // console.log(value, 'value');
  const searchProps = {
    leftControl: leftIcon || (
      <Icon
        sx={{
          fontSize: (theme) => theme.sizing(16),
          lineHeight: (theme) => theme.sizing(18),
          minHeight: (theme) => theme.sizing(18)
          // marginTop: (theme) => theme.sizing(1)
        }}
        icon={<IconSearch />}
      />
    ),
    type: 'search',
    enterKeyHint: 'search',
    rightControl,
    clearable,
    onInput,
    // onFocus,
    // onBlur,
    contentpadding: '8px',
    // textAlign,
    placeholder,
    defaultValue,
    ...other
  };
  if ('value' in props) {
    searchProps.value = props.value;
  }
  useEffect(() => {
    setCurrPlaceholder(fieldRef.current?.value || placeholder);
  }, [searchProps]);

  const context = {
    onFocus: (value) => {
      setFocused(true);
      onFocus(value);
    },
    onBlur: (value) => {
      onBlur(value);
      setFocused(false);
    },
    onInput: (value) => {
      onInput(value);
    },
    onKeyPressEnter: (value) => {
      handleClick(value);
    }
  };

  const classes = useUtilityClasses(styleProps);

  const renderLeftActionControl = leftActionControl && (
    <SearchBarLeftControl
      styleProps={leftActionControl}
      className={classes.leftActionControl}
    >
      {leftActionControl}
    </SearchBarLeftControl>
  );
  const handleClick = useCallback(
    (e) => {
      if (e.tagName === 'INPUT') {
        e.blur();
      }
      onSearch(fieldRef.current.value);
    },
    [onSearch]
  );

  const renderContent = useMemo(() => {
    console.log(fieldRef.current?.value, 'fieldRef.current');
    console.log(searchProps.value, 'searchProps.value');

    return (
      <SearchBarContent
        styleProps={{ ...styleProps, focused }}
        className={classes.content}
      >
        <FieldContext.Provider value={context}>
          {textAlign === 'center' && !focused && (
            <SearchPlaceholder
              onClick={() => {
                setFocused(true);
                setTimeout(() => {
                  fieldRef.current?.focus();
                }, 0);
              }}
            >
              {leftIcon || (
                <Icon
                  sx={{
                    fontSize: (theme) => theme.sizing(16),
                    lineHeight: (theme) => theme.sizing(18),
                    minHeight: (theme) => theme.sizing(18),
                    marginRight: (theme) => theme.sizing(8)
                  }}
                  icon={<IconSearch />}
                />
              )}

              <PlaceholderText
                styleProps={{
                  isValue: currPlaceholder !== placeholder
                }}
              >
                {currPlaceholder}
              </PlaceholderText>
            </SearchPlaceholder>
          )}
          <SearchBarField
            className={classes.field}
            styleProps={styleProps}
            {...searchProps}
            ref={fieldRefHandler}
          />
        </FieldContext.Provider>
      </SearchBarContent>
    );
  }, [
    styleProps,
    focused,
    classes.content,
    classes.field,
    context,
    textAlign,
    leftIcon,
    placeholder,
    searchProps,
    fieldRefHandler,
    fieldRef
  ]);

  const renderRightActionControl = rightActionControl && (
    <SearchBarRightControl
      styleProps={styleProps}
      onClick={handleClick}
      className={classes.rightActionControl}
    >
      {isValidElement(rightActionControl) ? rightActionControl : '搜索'}
    </SearchBarRightControl>
  );

  return (
    <SearchBarRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
    >
      {renderLeftActionControl}
      {renderContent}
      {renderRightActionControl}
    </SearchBarRoot>
  );
});

SearchBar.displayName = ComponentName;
SearchBar.name = ComponentName;

export default SearchBar;
