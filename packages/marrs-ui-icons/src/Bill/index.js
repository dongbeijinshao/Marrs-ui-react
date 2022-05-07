import React from 'react';
import SvgIcon from '../SvgIcon';

const IconBill = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 1024 1024">
      <path d="M824.888889 135.111111a92.444444 92.444444 0 0 1 92.302222 87.210667L917.333333 227.555556v568.888888a92.444444 92.444444 0 0 1-87.210666 92.302223L824.888889 888.888889H199.111111a92.444444 92.444444 0 0 1-92.302222-87.210667L106.666667 796.444444V227.555556a92.444444 92.444444 0 0 1 87.210666-92.302223L199.111111 135.111111h625.777778z m0 71.111111H199.111111a21.333333 21.333333 0 0 0-21.134222 18.432L177.777778 227.555556v568.888888c0 10.808889 8.021333 19.712 18.432 21.134223L199.111111 817.777778h15.729778L637.724444 471.779556a92.444444 92.444444 0 0 1 113.749334-2.616889l4.522666 3.612444 90.225778 76.344889V227.555556a21.333333 21.333333 0 0 0-18.432-21.134223L824.888889 206.222222z m-139.349333 318.691556l-2.759112 1.905778L327.111111 817.777778H824.888889a21.333333 21.333333 0 0 0 21.134222-18.432L846.222222 796.444444v-154.168888l-136.163555-115.2a21.333333 21.333333 0 0 0-24.519111-2.161778zM355.555556 312.888889a71.111111 71.111111 0 1 1 0 142.222222 71.111111 71.111111 0 0 1 0-142.222222z"></path>
    </SvgIcon>
  );
});

export default IconBill;