import React from 'react';
import SvgIcon from '../SvgIcon';

const IconSubtract = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 24 24">
      <rect x="4" y="11" width="16" height="2" rx="1"></rect>
    </SvgIcon>
  );
});

export default IconSubtract;
