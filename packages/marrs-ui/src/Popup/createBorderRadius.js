export default function createBorderRadius(styleProps, radius) {
  switch (styleProps.position) {
    case 'top':
      return {
        borderBottomLeftRadius: styleProps.radius,
        borderBottomRightRadius: styleProps.radius,
        height: styleProps.contentSpace,
        width: '100%'
      };

    case 'bottom':
      return {
        borderTopLeftRadius: styleProps.radius,
        borderTopRightRadius: styleProps.radius,
        height: styleProps.contentSpace,
        width: '100%'
      };

    case 'middle':
      return {
        borderRadius: styleProps.radius
      };

    default:
      return {};
  }
}
