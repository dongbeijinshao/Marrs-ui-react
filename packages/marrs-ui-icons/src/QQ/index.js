import React from 'react';
import SvgIcon from '../SvgIcon';

const IconQQ = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 1024 1024">
      <path d="M865.365333 786.062222c-19.427556 2.332444-75.576889-87.893333-75.576889-87.893333 0 52.252444-27.192889 120.405333-86.016 169.642667 28.387556 8.647111 92.416 31.943111 77.169778 57.372444-12.316444 20.565333-211.427556 13.141333-268.913778 6.741333-57.486222 6.4-256.597333 13.824-268.942222-6.741333-15.217778-25.429333 48.725333-48.696889 77.141334-57.372444-58.823111-49.208889-86.016-117.390222-86.016-169.642667 0 0-56.149333 90.225778-75.576889 87.893333-9.045333-1.080889-20.935111-49.408 15.758222-166.172444 17.265778-55.04 37.034667-100.778667 67.612444-176.298667C236.885333 248.746667 318.236444 85.333333 512 85.333333c191.601778 0 274.858667 160.227556 269.994667 358.257778 30.520889 75.377778 50.375111 121.429333 67.612444 176.298667 36.693333 116.764444 24.803556 165.091556 15.758222 166.172444z"></path>
    </SvgIcon>
  );
});

export default IconQQ;
