import { BaseSelector, Divider, BasicSelectorOption } from '@wemo-ui/marrs';

import { useTheme } from '@wemo-ui/marrs/styles';
import { noop } from '@wemo-ui/marrs/utils/helperFunctions';
import React, { useCallback, useRef } from 'react';

const GlobalProps = (props) => {
  const { onChange = noop } = props;
  const theme = useTheme();

  const globalProps = useRef({ ...theme.globalProps });

  const handleChangeVolume = useCallback((v) => {
    globalProps.current.volume = v[0];
    onChange({ globalProps: globalProps.current });
  }, []);
  const handleChangeColor = useCallback((v) => {
    globalProps.current.color = v[0];
    onChange({ globalProps: globalProps.current });
  }, []);

  const volume = React.useMemo(() => {
    return [globalProps.current.volume];
  }, []);
  const color = React.useMemo(() => {
    return [globalProps.current.color];
  }, []);
  return (
    <div>
      <Divider tipStart="10%">Volume</Divider>
      <BaseSelector value={volume} onChange={handleChangeVolume} min={1}>
        <BasicSelectorOption label="tiny" value="tiny" />
        <BasicSelectorOption label="small" value="small" />
        <BasicSelectorOption label="medium" value="medium" />
        <BasicSelectorOption label="large" value="large" />
      </BaseSelector>
      <Divider tipStart="10%">Color</Divider>
      <BaseSelector value={color} onChange={handleChangeColor} min={1}>
        <BasicSelectorOption label="primary" value="primary" />
        <BasicSelectorOption label="secondary" value="secondary" />
        <BasicSelectorOption label="info" value="info" />
        <BasicSelectorOption label="success" value="success" />
        <BasicSelectorOption label="warning" value="warning" />
        <BasicSelectorOption label="error" value="error" />
      </BaseSelector>
    </div>
  );
};

export default GlobalProps;
