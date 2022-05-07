// 截取最大长度
export const limitLengthValue = (value: string, length: number) => {
  return value.length > length ? value.slice(0, +length) : value;
};

// 格式化Number
export const formatNumberValue = (value: string, char: string) => {
  let i = 0;
  if (!value) {
    return '';
  }
  return String(value)?.replace(new RegExp(char, 'g'), (val, index) => {
    if (char === '-') {
      if (i++ || index !== 0) {
        return '';
      }
    }
    if (char === '\\.') {
      if (index === 0) {
        return 0 + '' + val;
      }
      if (i++) {
        return '';
      }
    }
    return val;
  });
};

// 计算类型
export const computeInputType = (type: string) => {
  switch (type) {
    case 'number':
      return {
        type: 'text',
        inputMode: 'decimal'
      };
    case 'digit':
      return {
        type: 'tel',
        inputMode: 'numeric'
      };
    case 'telephone':
      return {
        type: 'tel',
        inputMode: 'numeric'
      };
    default:
      return { type };
  }
};
