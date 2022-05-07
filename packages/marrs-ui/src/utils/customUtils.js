export const clamp = (value, min, max) => {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
};

export const getScrollTop = (el) => {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  return Math.max(top, 0);
};

export const toRGB = (color, opacity) => {
  color = color.replace(/#/g, '');
  const num = parseInt(color, 16);
  return `rgba(${num >> 16},${(num >> 8) & 255},${num & 255},${opacity})`;
};

export const type = (obj) => {
  let typeStr = Object.prototype.toString.call(obj).split(' ')[1];
  return typeStr.substr(0, typeStr.length - 1).toLowerCase();
};

export const recoveryColor = (color, defaultColorName) => {
  if (
    ['primary', 'secondary', 'info', 'error', 'warning', 'success'].includes(
      color
    )
  ) {
    return color;
  } else if (defaultColorName) {
    return recoveryColor(defaultColorName);
  }
  return 'primary';
};
