import { forwardRef } from 'react';
import SvgIcon from '../SvgIcon';

const IconAdd = forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 24 24">
      <path d="M12,4 C12.5522847,4 13,4.44771525 13,5 L13,10.999 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L13,12.999 L13,19 C13,19.5522847 12.5522847,20 12,20 C11.4477153,20 11,19.5522847 11,19 L10.999,12.999 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 L11,10.999 L11,5 C11,4.44771525 11.4477153,4 12,4 Z"></path>
    </SvgIcon>
  );
});

export default IconAdd;
