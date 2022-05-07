/**
 * 计算sizing, 根据模式不同，使用不同方式
 * @param {*}
 * @returns string
 */

export default function createSizing({ mode = 'px' }) {
  const sizing = (size = 0) => {
    if (size === undefined || isNaN(size)) {
      return size;
    }

    switch (mode) {
      case 'vw':
        // return `${100 * (size / (params.innerWidth || window.innerWidth))}vw`;
        return `${100 * (size / 375)}vw`;

      default:
        return `${size}px`;
    }
  };

  return sizing;
}
