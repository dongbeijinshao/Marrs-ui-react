const getForwardProps = (inProps, other) => {
  return Object.keys(inProps).reduce((rs, next) => {
    if (other[next] === undefined) {
      return rs;
    }
    return {
      ...rs,
      [next]: other[next]
    };
  }, {});
};
export default getForwardProps;
