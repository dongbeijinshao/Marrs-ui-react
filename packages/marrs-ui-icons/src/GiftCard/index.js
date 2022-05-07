import React from 'react';
import SvgIcon from '../SvgIcon';

const IconGiftCard = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 44 44">
      <path d="M37,6 C39.209139,6 41,7.790861 41,10 L41,34 C41,36.209139 39.209139,38 37,38 L7,38 C4.790861,38 3,36.209139 3,34 L3,10 C3,7.790861 4.790861,6 7,6 L37,6 Z M38,17 L6,17 L6,34 C6,34.5128358 6.38604019,34.9355072 6.88337887,34.9932723 L7,35 L37,35 C37.5128358,35 37.9355072,34.6139598 37.9932723,34.1166211 L38,34 L38,17 Z M18.5,28.5 C19.3284271,28.5 20,29.1715729 20,30 C20,30.7796961 19.4051119,31.4204487 18.64446,31.4931334 L18.5,31.5 L11,31.5 C10.1715729,31.5 9.5,30.8284271 9.5,30 C9.5,29.2203039 10.0948881,28.5795513 10.85554,28.5068666 L11,28.5 L18.5,28.5 Z M37,9 L7,9 C6.48716416,9 6.06449284,9.38604019 6.00672773,9.88337887 L6,10 L6,14 L38,14 L38,10 C38,9.48716416 37.6139598,9.06449284 37.1166211,9.00672773 L37,9 Z"></path>
    </SvgIcon>
  );
});

export default IconGiftCard;
