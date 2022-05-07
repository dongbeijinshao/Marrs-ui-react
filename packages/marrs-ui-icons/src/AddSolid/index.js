import React from 'react';
import SvgIcon from '../SvgIcon';

const IconAddSolid = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 24 24">
      <path d="M12,2 C12.8284271,2 13.5,2.67157288 13.5,3.5 L13.5,10.5 L20.5,10.5 C21.3284271,10.5 22,11.1715729 22,12 C22,12.8284271 21.3284271,13.5 20.5,13.5 L13.5,13.5 L13.5,20.5 C13.5,21.3284271 12.8284271,22 12,22 C11.1715729,22 10.5,21.3284271 10.5,20.5 L10.5,13.5 L3.5,13.5 C2.67157288,13.5 2,12.8284271 2,12 C2,11.1715729 2.67157288,10.5 3.5,10.5 L10.5,10.5 L10.5,3.5 C10.5,2.67157288 11.1715729,2 12,2 Z"></path>
    </SvgIcon>
  );
});

export default IconAddSolid;
