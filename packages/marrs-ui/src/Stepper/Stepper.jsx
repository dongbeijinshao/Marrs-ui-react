import { IconAddSolid, IconSubtractSolid } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp, useForkRef } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Stepper');

const useUtilityClasses = (styleProps) => {
  const { disabled, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const StepperRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({})
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  display: 'flex',
  alignItems: 'center'
}));

const StepperMinus = styled(Icon, {
  name: ComponentName,
  slot: 'Minus'
})(({ theme, styleProps: { disabled } }) => {
  return {
    height: theme.sizing(24),
    width: theme.sizing(24),
    // padding: theme.spacing(0.5),
    borderRadius: 0,
    color: theme.palette.text.primary,
    fontSize: theme.sizing(12),
    lineHeight: theme.sizing(8),
    backgroundColor: theme.palette.common.white,
    '&:active': {
      color: theme.palette.text.primary,
      // backgroundColor: theme.palette.action.hover
      backgroundColor: 'transparent'
    },
    ...(disabled && {
      color: theme.palette.text.disabled,
      '&:active': {
        color: theme.palette.text.disabled,
        backgroundColor: 'transparent'
      }
    })
  };
});

const StepperInput = styled('input', {
  name: ComponentName,
  slot: 'input'
})(({ theme, styleProps }) => ({
  minWidth: theme.sizing(30),
  maxWidth: theme.sizing(38),
  color: theme.palette.text.primary,
  background: theme.palette.neutral.N3,
  ...theme.typography.textLevel[styleProps.tl],
  border: 'none',
  outline: 'none',
  borderRadius: theme.radius.create(styleProps.radius),
  textAlign: 'center',
  backgroundColor: theme.palette.action.hover,
  margin: theme.spacing(0, 2),
  padding: 0,
  lineHeight: theme.sizing(14),
  height: theme.sizing(24),
  fontSize: theme.sizing(14),
  fontWeight: theme.typography.fontWeightMedium
}));

const scopeNumber = (num, max, min, decimal) => {
  const scale = Math.pow(10, decimal);

  return Math.round(Math.min(max, Math.max(num, min)) * scale) / scale;
};
const Stepper = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    face = 'text',
    defaultValue,
    value,
    decimal = 2,
    step = 1,
    max = Infinity,
    min = -Infinity,
    radius = 4,
    disabled = false,
    tl = 't7',
    onChange = noop,
    className,
    classes: classesProps,
    minusIcon = <IconSubtractSolid />,
    addIcon = <IconAddSolid />,

    ...other
  } = props;

  const styleProps = {
    radius,
    tl,
    disabled,
    classes: classesProps
  };

  const [currValue, setCurrValue] = useState(defaultValue || value || 0);
  const inputRef = useRef(null);
  const inputRefHandler = useForkRef(ref, inputRef);
  useEffect(() => {
    if (value !== undefined) {
      if (value === '') {
        setCurrValue(value);
      } else {
        setCurrValue(scopeNumber(value, max, min, decimal));
      }
    }
  }, [value, setCurrValue, decimal, min, max]);
  const reValue = useCallback(
    (v) => {
      if (value === undefined) {
        setCurrValue(scopeNumber(v, max, min, decimal));
      }
      onChange(scopeNumber(v, max, min, decimal));
    },
    [value, decimal, max, min, onChange]
  );

  // useEffect(() => {
  //   onChange(value);
  // }, [value, onChange]);

  const handlePlus = useCallback(() => {
    if (currValue === max || disabled) {
      return;
    }
    reValue(Number(currValue) + Number(step));
  }, [reValue, step, currValue, disabled, max]);

  const handleMinus = useCallback(() => {
    if (currValue === min || disabled) {
      return;
    }
    reValue(Number(currValue) - Number(step));
  }, [reValue, step, currValue, disabled, min]);

  const handleInput = useCallback(
    (inputValue) => {
      if (typeof value === 'undefined') {
        setCurrValue(inputRef.current.value);
        onChange(inputRef.current.value);
        //不是受控
      } else {
        //是受控
        onChange(inputRef.current.value);
      }

      // onChange(inputRef.current.value);
    },
    [onChange, value]
  );

  const handleBlur = useCallback(() => {
    reValue(inputRef.current.value);
  }, [reValue]);

  const classes = useUtilityClasses(styleProps);

  const iconMinStyleProps = {
    disabled: disabled || currValue === min
  };

  const iconMaxStyleProps = {
    disabled: disabled || currValue === max
  };
  return (
    <StepperRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      {...other}
    >
      <StepperMinus
        className={classes.button}
        face={face}
        icon={minusIcon}
        onClick={handleMinus}
        styleProps={iconMinStyleProps}
      />
      <StepperInput
        type="number"
        styleProps={styleProps}
        ref={inputRefHandler}
        value={currValue}
        onBlur={handleBlur}
        onInput={handleInput}
        disabled={disabled}
      />
      <StepperMinus
        className={classes.button}
        face={face}
        icon={addIcon}
        onClick={handlePlus}
        styleProps={iconMaxStyleProps}
      />
    </StepperRoot>
  );
});

export default Stepper;
