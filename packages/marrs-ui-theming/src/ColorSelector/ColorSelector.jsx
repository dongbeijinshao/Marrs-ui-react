import { styled } from '@wemo-ui/marrs/styles';
import { noop } from '@wemo-ui/marrs/utils/helperFunctions';
import { useCallback, useState } from 'react';
import { getComponentName } from '../styles/topSet';

const ComponentName = getComponentName('ColorSelector');

const ColorSelectorRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ styleProps }) => {
  return {
    alignItems: 'center',
    '&>input': {
      outline: 'none',
      border: `1px solid ${styleProps.color}`
    }
  };
});

const ColorSelector = (props) => {
  const { defaultValue = '', onChange = noop } = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }, []);

  const styleProps = {
    color: value
  };
  return (
    <ColorSelectorRoot styleProps={styleProps}>
      <input value={defaultValue} type="color" onChange={handleChange} />
    </ColorSelectorRoot>
  );
};

export default ColorSelector;
