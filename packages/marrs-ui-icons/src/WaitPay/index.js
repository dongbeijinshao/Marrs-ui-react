import React from 'react';
import SvgIcon from '../SvgIcon';

const IconWaitPay = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 56 56">
      <path d="M51,42 C51,45.3137085 48.3137085,48 45,48 L11,48 C7.6862915,48 5,45.3137085 5,42 L5,14 C5,10.6862915 7.6862915,8 11,8 L45,8 C48.3137085,8 51,10.6862915 51,14 L51,42 Z M45,11 L11,11 C9.40231912,11 8.09633912,12.24892 8.00509269,13.8237272 L8,14 L8,42 C8,43.5976809 9.24891996,44.9036609 10.8237272,44.9949073 L11,45 L45,45 C46.5976809,45 47.9036609,43.75108 47.9949073,42.1762728 L48,42 L48,36 L37,36 C32.581722,36 29,32.418278 29,28 C29,23.581722 32.581722,20 37,20 L48,20 L48,14 C48,12.4023191 46.75108,11.0963391 45.1762728,11.0050927 L45,11 Z M48,23 L37,23 C34.3112453,23 32.1181819,25.1223067 32.0046195,27.7831104 L32,28 C32,30.6887547 34.1223067,32.8818181 36.7831104,32.9953805 L37,33 L48,33 L48,23 Z"></path>
    </SvgIcon>
  );
});

export default IconWaitPay;
