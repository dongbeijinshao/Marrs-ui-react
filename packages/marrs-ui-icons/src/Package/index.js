import React from 'react';
import SvgIcon from '../SvgIcon';

const IconPackage = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 40 40">
      <path d="M30.8599317,8 C32.1507076,8 33.2967881,8.82563941 33.7055395,10.049986 L33.9208751,10.7030987 L34.2071735,11.6032403 L34.4494261,12.407949 L34.5864578,12.8914033 L34.7039136,13.3324429 L34.8017934,13.731068 L34.8800972,14.0872784 C34.9600324,14.4781154 35,14.782356 35,15 L35,31 C35,32.6568542 33.6568542,34 32,34 L8,34 C6.34314575,34 5,32.6568542 5,31 L5,15 L6.3783324,10.1758366 C6.74630516,8.88793194 7.92346316,8 9.26290424,8 L30.8599317,8 Z M33,16 L6.999,16 L6.99981818,31 C6.99981818,31.5128358 7.38604019,31.9355072 7.88337887,31.9932723 L8,32 L32,32 C32.5128358,32 32.9355072,31.6139598 32.9932723,31.1166211 L33,31 L33,16 Z M30,27 L30,29 L24,29 L24,27 L30,27 Z M19,9.999 L9.26290424,10 C8.857013,10 8.49582785,10.2446094 8.34135783,10.6116244 L8.30138029,10.7252789 L7.364,14 L19,14 L19,9.999 Z M30.8599344,10 L21,9.999 L21,14 L32.811,14 L32.7470802,13.7489423 L32.5912895,13.1841436 L32.4670253,12.7581649 L32.2502231,12.0478714 L31.9971733,11.2554004 L31.8084687,10.6833283 C31.6722182,10.2752126 31.2901919,10 30.8599344,10 Z"></path>
    </SvgIcon>
  );
});

export default IconPackage;