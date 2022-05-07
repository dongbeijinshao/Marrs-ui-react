import clsx from 'clsx';
import React, {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import DropdownContext from '../Dropdown/DropdownContext';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { useForkRef } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('DropdownGroup');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    ...normalizeClasses('content', 'text', 'item')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const DropdownGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => ({
  userSelect: 'none',
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const DropdownGroupContent = styled('div', {
  name: ComponentName,
  slot: 'Content'
})(({ theme }) => ({
  zIndex: 1,
  position: 'relative',
  display: 'flex',
  height: theme.sizing(48),
  backgroundColor: theme.palette.background.paper
}));

const DropdownGroupItemWrapper = styled('div', {
  name: ComponentName,
  slot: 'Wrapper'
})(() => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
  cursor: 'pointer'
}));

const DropdownGroupItem = styled('span', {
  name: ComponentName,
  slot: 'Item'
})(({ theme, styleProps: { color, selected, disabled } }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: '100%',
  padding: theme.spacing(0, 8),
  fontSize: theme.sizing(15),
  lineHeight: theme.sizing(22),
  '&::after': {
    position: 'absolute',
    top: '50%',
    right: theme.sizing(-4),
    marginTop: theme.sizing(-5),
    border: `${theme.sizing(3)} solid`,
    borderColor: `transparent transparent ${theme.palette
      .getColor(color, theme.palette.text.primary)
      .color()} ${theme.palette
      .getColor(color, theme.palette.text.primary)
      .color()}`,
    transform: 'rotate(-45deg)',
    ...(selected && {
      transform: 'rotate(135deg)',
      marginTop: theme.sizing(-1)
    }),
    opacity: 0.8,
    content: '" "',
    ...(disabled && {
      color: theme.palette.text.disabled,
      borderColor: `transparent transparent ${theme.palette
        .getColor(theme.palette.text.disabled)
        .color()} ${theme.palette
        .getColor(theme.palette.text.disabled)
        .color()}`,
      opacity: theme.palette.action.disabledOpacity
    })
  }
}));

const DropdownGroupText = styled('div', {
  name: ComponentName,
  slot: 'Text'
})(({ theme, styleProps: { disabled, color } }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: theme.palette.getColor(color).color(),
  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity
  })
}));

const DropdownGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    children,
    // 菜单标题和选项的选中态颜色
    color = 'primary',
    // 菜单展开方向,默认向下 TODO:要配合popup组件实现
    direction,
    onChange,
    ...other
  } = props;

  const dropdownRef = useRef();
  const handleRef = useForkRef(ref, dropdownRef);

  const matchState = (options, value) => {
    if (options && Array.isArray(options) && options.length > 0) {
      const match = options.find((option) => option.value === value);
      return {
        text: match?.text,
        selected: false,
        val: match?.value
      };
    }
    return {};
  };

  const getName = (child, index) => child.props.name || index;

  const getValues = useCallback(() => {
    return Children.toArray(children)?.reduce((rs, child, index) => {
      const { value, options } = child.props;
      return { ...rs, [getName(child, index)]: matchState(options, value) };
    }, {});
  }, [children]);

  const [state, setState] = useState(getValues());

  const initState = useCallback(() => {
    if (!state) return;
    const keys = Object.keys(state);
    return keys.reduce((rs, key) => {
      return { ...rs, [key]: { ...rs[key], selected: false } };
    }, state);
  }, [state]);

  const handleClose = useCallback(() => {
    setState({
      ...initState()
    });
  }, [initState]);

  const [offset, setOffset] = useState();

  const updateOffset = useCallback(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      if (direction) {
        setOffset(window.innerHeight - rect.top);
      } else {
        setOffset(rect.bottom);
      }
    }
  }, [direction]);

  const toggle = useCallback(
    (active) => {
      Children.toArray(children)?.forEach((item, index) => {
        const name = getName(item, index);
        const { selected } = state[name];
        if (index === active) {
          updateOffset();
          setState({
            ...initState(),
            [name]: { ...state[name], selected: !selected }
          });
        }
      });
    },
    [children, state, updateOffset, initState]
  );
  const styleProps = {
    classes: props.classes
  };
  const classes = useUtilityClasses(styleProps);

  const renderItem = ({ text, selected, disabled, title, index }) => {
    const styles = {
      selected,
      disabled,
      color: selected ? color : ''
    };

    return (
      <DropdownGroupItemWrapper
        key={`child-${index}`}
        onClick={() => {
          if (!disabled) {
            toggle(index);
          }
        }}
      >
        <DropdownGroupItem styleProps={styles} className={classes.item}>
          <DropdownGroupText styleProps={styles} className={classes.text}>
            {title || text}
          </DropdownGroupText>
        </DropdownGroupItem>
      </DropdownGroupItemWrapper>
    );
  };

  const renderContent = Children.toArray(children)?.map((child, index) => {
    const { disabled, title } = child.props;
    const name = getName(child, index);
    return (
      state &&
      renderItem({
        disabled,
        title,
        text: state[name]?.text,
        selected: state[name]?.selected,
        index
      })
    );
  });

  const handleSelected = useCallback(
    ({ name, option }) => {
      const data = {
        ...initState(),
        [name]: {
          text: option.text,
          selected: false,
          val: option.value
        }
      };
      setState(data);
      onChange && onChange(data);
    },
    [initState, onChange]
  );

  const context = {
    color,
    state,
    offset,
    direction,
    emitClose: handleClose,
    emitSelected: handleSelected
  };

  const handleClick = (e) => {
    e.nativeEvent.stopPropagation();
  };

  useEffect(() => {
    const documentClick = () => {
      handleClose();
    };

    document.addEventListener('click', documentClick);

    return () => {
      document.removeEventListener('click', documentClick);
    };
  }, [getValues, handleClose]);

  return (
    <DropdownGroupRoot
      ref={handleRef}
      onClick={handleClick}
      {...other}
      className={clsx(classes.root, className)}
    >
      <DropdownGroupContent className={classes.content}>
        {renderContent}
      </DropdownGroupContent>
      <DropdownContext.Provider value={context}>
        {Children.map(children, (child, index) => {
          const name = getName(child, index);
          return cloneElement(child, {
            name
          });
        })}
      </DropdownContext.Provider>
    </DropdownGroupRoot>
  );
});

DropdownGroup.displayName = ComponentName;
DropdownGroup.name = ComponentName;
export default DropdownGroup;
