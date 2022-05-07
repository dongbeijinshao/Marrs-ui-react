import React from 'react';
import SvgIcon from '../SvgIcon';

const IconCategory = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 48 48">
      <path d="M5,37 C6.65685425,37 8,38.3431458 8,40 C8,41.6568542 6.65685425,43 5,43 C3.34314575,43 2,41.6568542 2,40 C2,38.3431458 3.34314575,37 5,37 Z M44.5,38.5 C45.3284271,38.5 46,39.1715729 46,40 C46,40.8284271 45.3284271,41.5 44.5,41.5 L13.5,41.5 C12.6715729,41.5 12,40.8284271 12,40 C12,39.1715729 12.6715729,38.5 13.5,38.5 L44.5,38.5 Z M5,21 C6.65685425,21 8,22.3431458 8,24 C8,25.6568542 6.65685425,27 5,27 C3.34314575,27 2,25.6568542 2,24 C2,22.3431458 3.34314575,21 5,21 Z M44.5,22.5 C45.3284271,22.5 46,23.1715729 46,24 C46,24.8284271 45.3284271,25.5 44.5,25.5 L13.5,25.5 C12.6715729,25.5 12,24.8284271 12,24 C12,23.1715729 12.6715729,22.5 13.5,22.5 L44.5,22.5 Z M5,5 C6.65685425,5 8,6.34314575 8,8 C8,9.65685425 6.65685425,11 5,11 C3.34314575,11 2,9.65685425 2,8 C2,6.34314575 3.34314575,5 5,5 Z M44.5,6.5 C45.3284271,6.5 46,7.17157288 46,8 C46,8.82842712 45.3284271,9.5 44.5,9.5 L13.5,9.5 C12.6715729,9.5 12,8.82842712 12,8 C12,7.17157288 12.6715729,6.5 13.5,6.5 L44.5,6.5 Z"></path>
    </SvgIcon>
  );
});

export default IconCategory;
