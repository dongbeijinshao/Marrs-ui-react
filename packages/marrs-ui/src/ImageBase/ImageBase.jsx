import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';

const StyledImageBase = styled('img', {
  name: 'ImageBase',
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})({});

const ImageBase = React.forwardRef(function ImageBase(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ImageBase' });

  const { onLoad, onError, ...other } = props;

  return (
    <StyledImageBase
      ref={ref}
      onLoad={onLoad}
      alt={props.name}
      src={props.src}
      onError={onError}
      {...other}
    />
  );
});

export default ImageBase;
