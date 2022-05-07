import React from 'react';
import SvgIcon from '../SvgIcon';

const IconIconSolidCircle = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="-4 -4 40 40">
      <circle r="16" cx="16" cy="16"></circle>
    </SvgIcon>
  );
});

export default IconIconSolidCircle;
