import React from 'react';
import SvgIcon from '../SvgIcon';

const IconRest = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 44 44">
      <path d="M32.0915422,6.57197147 L32.2051861,6.87311433 L33.248,9.99986896 L36,10 C38.209139,10 40,11.790861 40,14 L40,35 C40,37.209139 38.209139,39 36,39 L8,39 C5.790861,39 4,37.209139 4,35 L4,14 C4,12.282159 5.08288347,10.817239 6.60326614,10.2506242 L6.60022239,10.2426342 L25.1234793,3.49735787 C27.9063359,2.48397576 30.9764304,3.85722267 32.0915422,6.57197147 Z M36,13 L8,13 C7.48716416,13 7.06449284,13.3860402 7.00672773,13.8833789 L7,14 L7,35 C7,35.5128358 7.38604019,35.9355072 7.88337887,35.9932723 L8,36 L36,36 C36.5128358,36 36.9355072,35.6139598 36.9932723,35.1166211 L37,35 L37,29.999869 L30.5,30 C27.4624339,30 25,27.5375661 25,24.5 C25,21.4624339 27.4624339,19 30.5,19 L37,18.999869 L37,14 C37,13.4871642 36.6139598,13.0644928 36.1166211,13.0067277 L36,13 Z M37,22 L30.5,22 C29.1745166,22 28.0899613,23.0315359 28.0053177,24.3356243 L28,24.5 C28,25.8254834 29.0315359,26.9100387 30.3356243,26.9946823 L30.5,27 L37,27 L37,22 Z M26.3062647,6.26502339 L26.1499915,6.31627125 L16.032,9.99986896 L30.084,9.99986896 L29.3545128,7.80993887 C28.9009712,6.56446457 27.560598,5.89833687 26.3062647,6.26502339 Z"></path>
    </SvgIcon>
  );
});

export default IconRest;