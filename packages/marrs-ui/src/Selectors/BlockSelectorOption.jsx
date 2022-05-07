import clsx from 'clsx';
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { alpha } from '../dependencies/system';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop, resolved } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import SelectorContext from './SelectorContext';

const ComponentName = getComponentName('BlockSelectorOption');
const useUtilityClasses = (styleProps) => {
  const { disabled, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const BlockSelectorOptionRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { color, selected, disabled } }) => {
  return {
    boxSizing: 'border-box',
    border: `${theme.sizing(1)} solid ${alpha(
      theme.palette.getColor(color).color(),
      0
    )}`,
    fontSize: theme.sizing(13),
    lineHeight: theme.sizing(40),
    textAlign: 'center',
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    ...(selected && {
      color: theme.palette.getColor(color).color(),
      border: `${theme.sizing(1)} solid ${alpha(
        theme.palette.getColor(color).color(),
        0.4
      )}`,
      backgroundColor: `${alpha(theme.palette.getColor(color).color(), 0.1)}`,
      borderRadius: theme.sizing(4)
    }),
    ...(disabled && {
      color: theme.palette.action.disabled,
      // opacity: theme.palette.action.disabledOpacity,
      cursor: 'not-allowed'
    })
  };
});

const BlockSelectorOption = forwardRef((inProps, ref) => {
  const parentContext = useContext(SelectorContext);

  const {
    controlled,
    emitValue = resolved,
    values,
    ...inheritProps
  } = parentContext;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });

  const {
    color = 'primary',
    // class
    className,
    value,
    label,
    classes: classesProps,
    checked,
    disabled,
    onChange = noop,
    onClick = noop,
    ...other
  } = props;

  const [checkedState, setCheckedState] = useState(checked);

  useEffect(() => {
    setCheckedState(values && values[String(value)]);
  }, [values]);

  const styleProps = {
    classes: classesProps,
    color,
    disabled,
    selected: checkedState
  };
  const classes = useUtilityClasses(styleProps);

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const changeState = useCallback(
    (state) => {
      if (controlled) {
        emitValue(String(value), state);
      } else {
        setCheckedState(state);
      }
      onChange(state);
    },
    [setCheckedState, value, controlled, emitValue, onChange]
  );

  const handleClick = useCallback(
    (event) => {
      if (disabled) return;

      onClick(event);

      changeState(!checkedState);
    },
    [checkedState, changeState, disabled, onClick]
  );

  return (
    <BlockSelectorOptionRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      onClick={handleClick}
      ref={ref}
      {...other}
    >
      {label}
    </BlockSelectorOptionRoot>
  );
});

BlockSelectorOption.displayName = ComponentName;

export default BlockSelectorOption;
