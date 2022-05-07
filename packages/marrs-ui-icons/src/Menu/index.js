import React from 'react';
import SvgIcon from '../SvgIcon';

const IconMenu = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 48 48">
      <path d="M18,26 C20.209139,26 22,27.790861 22,30 L22,40 C22,42.209139 20.209139,44 18,44 L8,44 C5.790861,44 4,42.209139 4,40 L4,30 C4,27.790861 5.790861,26 8,26 L18,26 Z M18,29 L8,29 C7.48716416,29 7.06449284,29.3860402 7.00672773,29.8833789 L7,30 L7,40 C7,40.5128358 7.38604019,40.9355072 7.88337887,40.9932723 L8,41 L18,41 C18.5128358,41 18.9355072,40.6139598 18.9932723,40.1166211 L19,40 L19,30 C19,29.4871642 18.6139598,29.0644928 18.1166211,29.0067277 L18,29 Z M42.5,38 C43.3284271,38 44,38.6715729 44,39.5 C44,40.3284271 43.3284271,41 42.5,41 L27.5,41 C26.6715729,41 26,40.3284271 26,39.5 C26,38.6715729 26.6715729,38 27.5,38 L42.5,38 Z M42.5,29 C43.3284271,29 44,29.6715729 44,30.5 C44,31.3284271 43.3284271,32 42.5,32 L27.5,32 C26.6715729,32 26,31.3284271 26,30.5 C26,29.6715729 26.6715729,29 27.5,29 L42.5,29 Z M18,4 C20.209139,4 22,5.790861 22,8 L22,18 C22,20.209139 20.209139,22 18,22 L8,22 C5.790861,22 4,20.209139 4,18 L4,8 C4,5.790861 5.790861,4 8,4 L18,4 Z M40,4 C42.209139,4 44,5.790861 44,8 L44,18 C44,20.209139 42.209139,22 40,22 L30,22 C27.790861,22 26,20.209139 26,18 L26,8 C26,5.790861 27.790861,4 30,4 L40,4 Z M18,7 L8,7 C7.48716416,7 7.06449284,7.38604019 7.00672773,7.88337887 L7,8 L7,18 C7,18.5128358 7.38604019,18.9355072 7.88337887,18.9932723 L8,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,8 C19,7.48716416 18.6139598,7.06449284 18.1166211,7.00672773 L18,7 Z M40,7 L30,7 C29.4871642,7 29.0644928,7.38604019 29.0067277,7.88337887 L29,8 L29,18 C29,18.5128358 29.3860402,18.9355072 29.8833789,18.9932723 L30,19 L40,19 C40.5128358,19 40.9355072,18.6139598 40.9932723,18.1166211 L41,18 L41,8 C41,7.48716416 40.6139598,7.06449284 40.1166211,7.00672773 L40,7 Z"></path>
    </SvgIcon>
  );
});

export default IconMenu;
