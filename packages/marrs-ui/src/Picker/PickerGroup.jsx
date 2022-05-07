import { debounce } from '@wemo-ui/marrs/utils';
import {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useMemo,
  useState
} from 'react';
import Grid from '../Grid';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { assert, generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import { ComponentName as NameOfPicker } from './Picker';

const ComponentName = getComponentName('PickerGroup');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('Root', 'container', 'selectFrame')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const PickerGroupRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ styleProps }) => ({
  width: '100%',
  position: 'relative',
  userSelect: 'none',
  height: styleProps.height,
  overflow: 'hidden',
  touchAction: 'none'
}));

const PickerGroupContainer = styled(Grid, {
  name: ComponentName,
  slot: 'Container',
  shouldForwardProp: generateShouldForwardProp()
})(() => ({
  width: '100%',
  position: 'relative',
  userSelect: 'none',
  height: '100%',
  overflow: 'hidden',
  touchAction: 'none'
}));

const PickerFrame = styled('div', {
  name: ComponentName,
  slot: 'Frame'
})(({ theme, styleProps }) => ({
  position: 'absolute',
  top: '50%',
  right: theme.sizing(16),
  left: theme.sizing(16),
  zIndex: '2',
  WebkitTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  height: styleProps.itemHeight,
  borderTop: `${theme.sizing(1)} solid ${theme.palette.neutral.N4}`,
  borderBottom: `${theme.sizing(1)} solid ${theme.palette.neutral.N4}`
}));

const compare = (oldValues, newValues) => {
  const noChange = Object.entries(newValues).reduce((rs, [key, value]) => {
    return rs && value === oldValues[key];
  }, true);

  return noChange;
};

const PickerGroup = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    height,
    defaultValue,
    itemHeight = 57,
    onChange = noop,
    children,
    classes: classesProps,
    ...other
  } = props;

  const [value, setValues] = useState(defaultValue || {});
  const [, setIndex] = useState();
  /* eslint-disable */

  const handelChange = useCallback(
    debounce((value, items) => {
      onChange(value, items);
    }, 200),
    []
  );
  /* eslint-disable */

  const styleProps = { itemHeight, classes: classesProps };

  const classes = useUtilityClasses(styleProps);

  const pickers = useMemo(() => {
    return Children.map(children, (child) => {
      if (!child || child.type.name !== NameOfPicker) {
        return null;
      }
      const name = child.props.name;
      assert(name, `${ComponentName} 下的Picker组件必须拥有 name 属性`);
      return cloneElement(child, {
        height,
        itemHeight: child.props.itemHeight || itemHeight,
        defaultValue: child.props.defaultValue || value[name],
        onChange: (v, index) => {
          setValues((old) => {
            let newValues = { ...old, [name]: v };
            setIndex((oldIndex) => {
              const newIndexs = { ...oldIndex, [name]: index };
              if (!compare(old, newValues)) {
                handelChange(newValues, newIndexs);
              }
              return newIndexs;
            });

            return newValues;
          });
          child.props.onChange && child.props.onChange(v, index);
        }
      });
    });
  }, [children, height, handelChange]);

  return (
    <PickerGroupRoot // column={Children.toArray(children).length}
      styleProps={styleProps}
      ref={ref}
      className={classes.root}
      {...other}
    >
      <PickerGroupContainer className={classes.container}>
        {pickers}
      </PickerGroupContainer>
      <PickerFrame className={classes.selectFrame} styleProps={styleProps} />
    </PickerGroupRoot>
  );
});

export default PickerGroup;
