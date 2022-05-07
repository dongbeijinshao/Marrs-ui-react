import { alpha } from '../dependencies/system';

export default function createBorder(styleProps) {
  let {
    radius = 0,
    color = 'primary',
    opcity = 0.7,
    style = 'solid',
    borderWidth = 1
  } = styleProps;
  if (radius instanceof Array) {
    radius = radius.map((item) => item * 2);
  }
  return {
    border: 'none',
    zIndex: 0,
    '&::after': {
      content: '""',
      borderStyle: 'inherit',
      borderColor: 'inherit',

      borderRadius: this.radius.create(radius * 2),
      // border-radius: @radius,
      boxSizing: 'border-box !important',
      position: 'absolute',
      border: `${this.sizing(borderWidth)} ${style} ${alpha(
        this.palette.getColor(color).color(),
        opcity
      )}`,
      left: 0,
      top: 0,
      width: ' 200% !important',
      height: '200% !important',
      transformOrigin: '0 0',
      transform: 'scale(0.5) !important',
      zIndex: '-1'
    }
  };
}
