import React from 'react';
import SvgIcon from '../SvgIcon';

const IconImageSample = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 -20 72 72">
      <path d="M54.04,5.87 C54.04,9.00145453 56.5785455,11.54 59.71,11.54 C62.8414545,11.54 65.38,9.00145453 65.38,5.87 C65.38,2.73854547 62.8414545,0.2 59.71,0.2 C56.5785455,0.2 54.04,2.73854547 54.04,5.87 L54.04,5.87 Z"></path>
      <path d="M28.2572842,8.9933832 L48.12,42.76 L48.12,42.76 L8.51239988,42.76 C5.86143309,42.76 3.71239988,40.6109668 3.71239988,37.96 C3.71239988,37.1041947 3.94120512,36.2639513 4.37511565,35.5263034 L19.9827158,8.9933832 C21.3268093,6.70842421 24.2687376,5.94570205 26.5536966,7.28979557 C27.2571542,7.70359416 27.8434856,8.28992559 28.2572842,8.9933832 Z"></path>
      <path d="M59.6,21.96 L69.44,35.08 C71.0305801,37.2007734 70.6007734,40.2094199 68.48,41.8 C67.6491384,42.4231462 66.638577,42.76 65.6,42.76 L36.32,42.76 L36.32,42.76 L51.92,21.96 C53.5105801,19.8392266 56.5192266,19.4094199 58.64,21 C59.0038672,21.2729004 59.3270996,21.5961328 59.6,21.96 Z"></path>
    </SvgIcon>
  );
});

export default IconImageSample;
