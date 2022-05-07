import { IconSelect } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from 'react';
import { Cell } from '../index';
import Popup from '../Popup';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { resolved } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import DropdownContext from './DropdownContext';
import { generateShouldForwardProp } from '@wemo-ui/marrs/utils';

const ComponentName = getComponentName('Dropdown');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('popup')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const DropdownWrapper = styled('div', {
  name: ComponentName,
  slot: 'Wrapper'
})(({ theme, styleProps: { showWrapper } }) => ({
  ...(!showWrapper && {
    display: 'none',
    fontSize: theme.sizing(theme.typography.fontSize)
  })
}));

const DropdownPopup = styled(Popup, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps: { offset, direction } }) => ({
  // marginTop: 1,
  zIndex: theme.zIndex.modal,
  ...(direction && {
    bottom: offset,
    position: 'absolute',
    maxHeight: '80%',
    left: 0,
    width: '100%',
    borderRadius: 'inherit'
  }),
  ...(!direction && {
    top: offset
  })
}));

const DropdownCell = styled(Cell, {
  name: ComponentName,
  slot: 'Cell'
})(({ theme, styleProps: { color } }) => {
  return {
    zIndex: theme.zIndex.pin,
    color: theme.palette.getColor(color).color()
  };
});

const Dropdown = forwardRef((inProps, ref) => {
  const {
    color = 'primary',
    state,
    offset,
    direction,
    emitClose = resolved,
    emitSelected = resolved,
    ...inheritProps
  } = useContext(DropdownContext);
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });

  const {
    className,
    classes: classesProps,
    children,
    // 唯一标识
    name,
    // 默认选中的值(group中已经使用)
    // value,
    // 选项数组, text:文字, value:标识符
    options = [],
    ...other
  } = props;

  const [showWrapper, setShowWrapper] = useState(false);

  useEffect(() => {
    if (state && state[name]) {
      setShowWrapper(state[name].selected);
    }
  }, [state, name]);

  // 提供对外的toggle方法
  useImperativeHandle(
    ref,
    () => ({
      toggle: () => {
        emitClose();
      }
    }),
    [emitClose]
  );
  const styleProps = {
    offset,
    direction,
    showWrapper,
    // classes: clsx(classesProps, classesStyles)
    classes: classesProps
  };

  const handleClick = useCallback(
    (option) => {
      emitSelected({ name, option });
    },
    [name, emitSelected]
  );

  const renderOption = (option) => {
    if (!state || !state[name]) return;

    const { val } = state[name];

    const selected = option.value === val;

    const styles = {
      color: selected ? color : ''
    };
    const cellProps = {
      key: option.value,
      title: option.text,
      rightControl: selected ? <IconSelect /> : '',
      onClick: () => {
        handleClick(option);
      }
    };
    return <DropdownCell styleProps={styles} {...cellProps} />;
  };

  const hasOptions = () => Array.isArray(options) && options.length > 0;

  const renderOptions = hasOptions() && options.map(renderOption);

  const handleClose = () => {
    emitClose();
  };

  const classes = useUtilityClasses(styleProps);
  const renderContent = () => {
    return (
      <DropdownWrapper
        styleProps={styleProps}
        className={clsx(classes.root, className)}
        {...other}
      >
        <DropdownPopup
          styleProps={styleProps}
          position="top"
          width="100%"
          onClose={handleClose}
          visible={showWrapper}
          className={classes.popup}
          offset={offset}
        >
          {renderOptions}
          {children}
        </DropdownPopup>
      </DropdownWrapper>
    );
  };

  return renderContent();
});

Dropdown.displayName = ComponentName;
Dropdown.name = ComponentName;
export default Dropdown;
