import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { useForkRef } from '../utils';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import PickerContext from './PickerContext';
import { SYMBOL } from './PickerTree';

export const ComponentName = getComponentName('Picker');

const useUtilityClasses = (styleProps) => {
  const slots = {
    root: ['root'],
    mask: ['mask'],
    column: ['column']
  };

  const composedClasses = composeClassesByName(
    ComponentName,
    slots,
    styleProps.classes
  );

  return composedClasses;
};

const PickerRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  position: 'relative',
  userSelect: 'none',
  height: theme.sizing(styleProps.height),
  overflow: 'hidden'
}));

const PickerMask = styled('div', {
  name: ComponentName,
  slot: 'Mask'
})(({ theme, styleProps: { height, itemHeight } }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundImage: `linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.9),
      hsla(0, 0%, 100%, 0.4)
    ),
    linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: `top, bottom`,
  transform: 'translateZ(0)',
  pointerEvents: 'none',
  backgroundSize: `100% ${theme.sizing((height - itemHeight) / 2)}`
}));

const PickerColumn = styled('div', {
  name: ComponentName,
  slot: 'Column'
})(({ theme, styleProps }) => ({
  transitionTimingFunction: `cubic-bezier(0.23, 1, 0.68, 1)`,
  transform: `translate3d(0, ${theme.sizing(styleProps.offset)}, 0)`,
  transitionDuration: styleProps.transitionSwitch ? '1000ms' : '0',
  transitionProperty: 'transform'
}));

const Picker = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    picker: inputPicker = {},
    height = 300,
    itemHeight = 54,
    defaultValue,
    children = [],
    onChange = noop,
    className,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = { height, itemHeight, classes: classesProps };
  // const items = useRef({});
  const classes = useUtilityClasses(styleProps);
  const [offset, setOffset] = useState();

  const valueOffsetMap = useMemo(() => {
    return Children.toArray(children).reduce((rs, child, index) => {
      return {
        ...rs,
        [child.props.value]: {
          offset: height / 2 - index * itemHeight - itemHeight / 2,
          value: child.props.value
        }
      };
    }, {});
  }, [children, height, itemHeight]);

  const maskStyleProps = { height, itemHeight };

  // ????????????????????????current?????????defaultValue ???????????????children??????
  const [current, setCurrent] = useState(
    defaultValue || Children.toArray(children)[0]?.props.value
  );

  // useImperativeHandle(ref, () => ({
  //   setValue: (value) => {
  //     handleItemSelected(value);
  //   }
  // }));

  // ?????????????????????item?????????(offset)
  const gotoNearestItem = useCallback(
    (num) => {
      const right = Object.entries(valueOffsetMap).sort(
        ([, a], [, b]) => Math.abs(a.offset - num) - Math.abs(b.offset - num)
      );

      return right[0];
    },
    [valueOffsetMap]
  );

  const bind = useDrag(
    (state) => {
      if (state.last) {
        handleItemSelected(gotoNearestItem(offset)[1]?.value);
      } else {
        const [, position] = state.offset;
        setOffset(position);
      }
    },
    {
      axis: 'y',
      from: () => [0, offset],
      filterTaps: true,
      pointer: { touch: true }
    }
  );

  const [transitionSwitch] = useState(true);
  const currRef = useRef();

  /* eslint-disable */
  useEffect(() => {
    setOffset(valueOffsetMap[current]?.offset);
  }, [current]);
  useEffect(() => {
    setOffset(valueOffsetMap[current]?.offset);
    currRef.current = current;
  }, [valueOffsetMap]);
  /* eslint-disable */

  // item????????????: 1. ????????????offset?????????change
  const handleItemSelected = useCallback(
    (value) => {
      setOffset(valueOffsetMap[value]?.offset);
      onChange(value, Object.keys(valueOffsetMap).indexOf(String(value)));
      setCurrent(value);
    },
    [onChange, valueOffsetMap]
  );

  useEffect(() => {
    inputPicker.setValue = (value) => {
      handleItemSelected(value);
    };
  }, [handleItemSelected, children, inputPicker]);

  const [context, setContext] = useState({});

  // ??????context????????????
  useEffect(() => {
    setContext({ onSelect: handleItemSelected });
  }, [handleItemSelected]);

  // ???????????????????????????: ????????????????????????current????????? ??
  const noChecked = useMemo(
    () =>
      Children.toArray(children).reduce((rs, next) => {
        return rs && current !== next.props.value;
      }, true),
    [children, current]
  );

  // children ???????????????????????????????????????current??????
  // ???valueInput?????????
  useEffect(() => {
    let childComponent = Children.toArray(children);

    if (noChecked && childComponent.length > 0) {
      setCurrent(childComponent[0].props.value);
      let currIndex = 0;
      //??????childComponent[0].props.value????????????????????????SYMBOL ?????????index??????SYMBOL???pickerTree????????????????????????
      if (childComponent[0].props.value === SYMBOL) {
        currIndex = childComponent[0].props.value;
      }
      onChange(childComponent[0].props.value, currIndex);
    }
  }, [noChecked, children, onChange]);

  // ????????????item
  const pickerItems = useMemo(() => {
    return Children.map(children, (child, index) => {
      return cloneElement(child, {
        height: itemHeight,
        checked: noChecked
          ? index === 0
            ? true
            : false
          : current === child.props.value
      });
    });
  }, [children, noChecked, current, itemHeight]);

  const rootRef = useRef();
  const handleRef = useForkRef(ref, rootRef);

  const columnStyleProps = {
    offset,
    transitionSwitch
  };
  return (
    <PickerRoot
      className={clsx(classes.root, className)}
      styleProps={styleProps}
      ref={handleRef}
      {...bind('')}
      {...other}
    >
      <PickerContext.Provider value={context}>
        <PickerColumn styleProps={columnStyleProps} className={classes.column}>
          {pickerItems}
        </PickerColumn>
      </PickerContext.Provider>
      <PickerMask styleProps={maskStyleProps} className={classes.mask} />
    </PickerRoot>
  );
});

Picker.displayName = ComponentName;
Picker.name = ComponentName;
export default Picker;
