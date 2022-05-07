export default function createTransform({ visible, position }) {
  switch (position) {
    case 'top':
      return {
        top: 0,
        transform: `translate3d(0, ${visible ? 0 : '-100%'}, 0)`
      };

    case 'bottom':
      return {
        bottom: 0,
        transform: `translate3d(0, ${visible ? 0 : '100%'}, 0)`
      };

    case 'left':
      return {
        top: 0,
        left: 0,
        bottom: 0,
        transform: `translate3d(${visible ? 0 : '-100%'}, 0, 0)`
      };

    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
        transform: `translate3d(${visible ? 0 : '100%'}, 0, 0)`
      };

    default:
      return {
        top: '50%',
        left: '50%',
        transform: `translate3d(-50%, -50%, 0) scale(${visible ? 1 : 0})`
      };
  }
}
