import { forwardRef, useCallback, useContext } from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop } from '../utils/helperFunctions';
import PickerContext from './PickerContext';

const ComponentName = getComponentName('PickerItem');

const PickerItemRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({
  position: 'relative',
  textAlign: 'center',
  userSelect: 'none',
  height: theme.sizing(styleProps.height),
  lineHeight: theme.sizing(styleProps.height),
  fontSize: theme.sizing(16),
  fontWeight: 400,
  color: theme.palette.text.primary,
  ...(styleProps.checked && {
    fontSize: theme.sizing(17),
    fontWeight: 500
  })
}));

const PickerItem = forwardRef((inProps, ref) => {
  const parentContent = useContext(PickerContext);

  const {
    // contolled,
    // current,
    onSelect = noop,
    ...inheritProps
  } = parentContent;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: inheritProps
  });

  const { children, checked, value, height, onClick = noop } = props;

  const styleProps = { height, checked };

  const handleClick = useCallback(
    (e) => {
      onClick(e);
      onSelect(value);
    },
    [onSelect, onClick, value]
  );
  return (
    <PickerItemRoot ref={ref} onClick={handleClick} styleProps={styleProps}>
      {children}
    </PickerItemRoot>
  );
});

export default PickerItem;
