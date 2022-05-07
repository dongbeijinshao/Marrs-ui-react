import React from 'react';
import SvgIcon from '../SvgIcon';

const IconMineGoods = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 54 54">
      <path d="M27,6 C33.627417,6 39,11.372583 39,18 C39,22.6737139 36.3281087,26.7233741 32.4284796,28.7048272 C40.307779,30.7835968 46,37.1328674 46,43.1578947 C46,45.0526316 44.9444444,46 42.8333333,46 L11.1666667,46 C9.05555556,46 8,45.0526316 8,43.1578947 C8,37.200659 13.6965555,30.8038063 21.5805787,28.7081869 C17.6760236,26.7296345 15,22.6773266 15,18 C15,11.372583 20.372583,6 27,6 Z"></path>
    </SvgIcon>
  );
});

export default IconMineGoods;
