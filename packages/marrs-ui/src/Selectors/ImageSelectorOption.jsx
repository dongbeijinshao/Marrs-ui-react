import { IconSelect } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Can from '../Can';
import Image from '../Image';
import Radio from '../Radio';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop, resolved } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import SelectorContext from './SelectorContext';

const ComponentName = getComponentName('ImageSelectorOption');

const useUtilityClasses = (styleProps) => {
  const { disabled, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const ImageSelectorOptionRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { color, selected, disabled } }) => {
  return {
    position: 'relative',

    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    fontWeight: theme.typography.fontWeightMedium,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: theme.transitions.create(['color']),
    ...(selected && {
      color: theme.palette.getColor(color).color()
    }),
    ...(disabled && {
      color: theme.palette.text.disabled,
      opacity: theme.palette.action.disabledOpacity,
      cursor: 'not-allowed'
    })
  };
});

const TreeSelectIcon = styled(Radio, {
  name: ComponentName,
  slot: 'Icon'
})(({ theme }) => ({
  transition: theme.transitions.create('opacity'),
  pointerEvents: 'none'
}));

const ImageSelectorOption = forwardRef((inProps, ref) => {
  const parentContext = useContext(SelectorContext);

  const { controlled, emitValue = resolved, ...inheritProps } = parentContext;

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
    // label,
    classes: classesProps,
    checked,
    disabled,
    src,
    onChange = noop,
    onClick = noop,
    ...other
  } = props;

  const [checkedState, setCheckedState] = useState(checked);

  const styleProps = {
    classes: classesProps,
    color,
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
    <ImageSelectorOptionRoot
      className={clsx(classes.root, className)}
      ref={ref}
      styleProps={styleProps}
      onClick={handleClick}
      {...other}
    >
      <Can
        size={{
          width: 75,
          height: 75
        }}
        radius={2}
      >
        <Image radius={4} src={src} size={{ width: '100%', height: '100%' }} />
      </Can>
      <TreeSelectIcon
        color={color}
        icon={<IconSelect />}
        sx={{
          opacity: checkedState ? 1 : 0
        }}
        checked={checkedState}
      />
    </ImageSelectorOptionRoot>
  );
});

ImageSelectorOption.displayName = ComponentName;

export default ImageSelectorOption;
