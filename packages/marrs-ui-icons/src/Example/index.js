import React from 'react';
import SvgIcon from '../SvgIcon';

const IconExample = React.forwardRef((inProps, ref) => {
  return <SvgIcon ref={ref} {...inProps} viewBox="0 0 100 100"></SvgIcon>;
});

export default IconExample;
