import React from 'react';
import SvgIcon from '../SvgIcon';

const IconClose = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="-2 -2 30 30">
      <path d="M20.4852814,3.51471863 C20.8758057,3.90524292 20.8758057,4.5384079 20.4852814,4.92893219 L13.4149207,11.9992929 L20.4852814,19.0710678 C20.8758057,19.4615921 20.8758057,20.0947571 20.4852814,20.4852814 C20.0947571,20.8758057 19.4615921,20.8758057 19.0710678,20.4852814 L12.0007071,13.4135065 L4.92893219,20.4852814 C4.5384079,20.8758057 3.90524292,20.8758057 3.51471863,20.4852814 C3.12419433,20.0947571 3.12419433,19.4615921 3.51471863,19.0710678 L10.5864935,11.9992929 L3.51471863,4.92893219 C3.12419433,4.5384079 3.12419433,3.90524292 3.51471863,3.51471863 C3.90524292,3.12419433 4.5384079,3.12419433 4.92893219,3.51471863 L12.0007071,10.5850793 L19.0710678,3.51471863 C19.4615921,3.12419433 20.0947571,3.12419433 20.4852814,3.51471863 Z"></path>
    </SvgIcon>
  );
});

export default IconClose;