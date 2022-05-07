import React from 'react';
import SvgIcon from '../SvgIcon';

const IconShop = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 24 24">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <rect x="3" y="10.5" width="18" height="3" rx="1.5"></rect>
    </SvgIcon>
  );
});

export default IconShop;
