import React, {
  forwardRef,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import Button from '../Button';
import Popup from '../Popup';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import PickerGroup from './PickerGroup';

const ComponentName = getComponentName('PickerWindow');

const PickerWindowRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  touchAction: 'none'
}));

const PickerWindowPopup = styled(Popup, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  overflow: 'hidden',
  touchAction: 'none'
}));

const PickerControl = styled('div', {
  name: ComponentName,
  slot: 'control',
  shouldForwardProp: generateShouldForwardProp()
})(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  };
});

const PickerWindow = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    height,
    children,
    avatar: avatarProps,
    defaultValue,
    onChange = noop,
    ...other
  } = props;

  const styleProps = {};

  const [pickerVisible, setPickerVisible] = useState(false);

  const handleAvatarTrigged = useCallback(() => {
    setPickerVisible(true);
  }, []);

  const valueRef = useRef(defaultValue);
  const avatar = useMemo(() => {
    if (avatarProps instanceof Function) {
      return (
        <span onClick={handleAvatarTrigged}>
          {avatarProps(valueRef.current)}
        </span>
      );
    }
    if (isValidElement(avatarProps)) {
      return React.cloneElement(avatarProps, {
        onClick: handleAvatarTrigged
      });
    }
    return undefined;
  }, [valueRef.current]);

  const handleConfirm = useCallback(() => {
    onChange(valueRef.current);
    setPickerVisible(false);
  }, []);
  const hanleCancel = useCallback(() => {
    setPickerVisible(false);
  }, []);
  const handleValueChange = useCallback((value) => {
    valueRef.current = value;
  }, []);

  return (
    <PickerWindowRoot styleProps={styleProps}>
      <PickerWindowPopup visible={pickerVisible}>
        <PickerControl>
          <Button color="secondary" face="text" onClick={hanleCancel}>
            取消
          </Button>
          <Button color="primary" face="text" onClick={handleConfirm}>
            确定
          </Button>
        </PickerControl>
        <PickerGroup defaultValue={defaultValue} onChange={handleValueChange}>
          {children}
        </PickerGroup>
      </PickerWindowPopup>
      {avatar}
    </PickerWindowRoot>
  );
});

export default PickerWindow;
