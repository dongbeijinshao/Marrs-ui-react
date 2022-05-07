const defaultComponentConfig = {
  MarrsButton: {
    defaultProps: {
      textTransform: 'capitalize'
    },
    variants: [],
    styleOverrides: {}
  },
  MarrsDivider: {
    defaultProps: {
      color: 'secondary'
    }
  },
  MarrsLoading: {
    // 新增新的样式体
    variants: [],
    // 修改默认样式
    styleOverrides: {},
    // 修改默认 props
    defaultProps: {}
  },
  MarrsText: {
    defaultProps: {}
  },
  MarrsRadio: {
    defaultProps: {}
  },
  MarrsTag: {
    defaultProps: {},
    styleOverrides: {}
  }
};

export default defaultComponentConfig;
