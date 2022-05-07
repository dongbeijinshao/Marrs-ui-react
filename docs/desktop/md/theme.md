# 主题定制

### 背景知识

Marrs 拥有一套默认的主题，该默认主题提取自微盟设计团队的设计原稿。开发者也可以根据自身项目二次调整主题配置，生成属于自己的自定义主题

## 使用

### 快速入门

Marrs 支持`运行时修改主题`&`主题嵌套与隔离`。下面是来帮助您入门的一个快速示例，**而您仅需这些操作**：

```jsx
import { Button } from '@wemo-ui/marrs';
import { createTheme, ThemeProvider } from '@wemo-ui/marrs/styles';

const myTheme = createTheme({
  palette: {
    primary: { main: '#00ff00' }
  }
});

const nestTheme = createTheme({
  palette: {
    primary: { main: '#ff0000' }
  }
});

const cusTheme = createTheme({
  components: {
    MarrsButton: {
      defaultProps: {
        volume: 'tiny',
        color: 'info',
        textTransform: 'uppercase'
      }
    }
  }
});

export default function CartView() {
  return (
    <div style={{ padding: 100 }}>
      <ThemeProvider theme={myTheme}>
        <Button>myTheme</Button>
        <ThemeProvider theme={nestTheme}>
          <Button>nestTheme</Button>
        </ThemeProvider>
        <ThemeProvider theme={cusTheme}>
          <Button>cusTheme</Button>
          <Button color="success" volume="medium">
            cusTheme2
          </Button>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}
```

## API 详解

### 主题配置

```javascript
{
  //适配方案，支持px和vw两种方案，默认为px
  sizingMode:'vw',
  // 调色盘
  palette: {
    // [warning]以下内容必须存在，可以修改但不可置空，否则有可能会影响组件库的运行
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    // 快速模式切换, alpha
    mode: 'main',

    // 色调调色
    primary: {
      main: '#FA2C19'
    },
    secondary: {
      main: '#9C27B0'
    },
    error: {
      main: '#FF2E2E'
    },
    warning: {
      main: '#FFA300',
      // contrastText代表对应main为背景色时候的对照字体颜色，如果没有显示声明，默认补全为getContrastText(colorValue)
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#2A6AE9'
    },
    success: {
      main: '#07C160'
    },
    // 中性色阶
    neutral: {
      N1: '#FFFFFF',
      N2: '#FAFAFA',
      N3: '#F5F5F5',
      N4: '#F2F2F2',
      N5: '#E0E0E0',
      N6: '#C4C4C4',
      N7: '#9E9E9E',
      N8: '#757575',
      N9: '#212121'
    },
    // 灰阶
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161'
    },
    // 反色阈值，用于未设定字体色时自动装配最佳字体色
    contrastThreshold: 2.3,
    // 字体功能色
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },

    // 特殊色
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#ffffff',
      default: '#ffffff'
    },
    // 状态调色
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },
    // APIs,非特殊情况不要设置
    // 根据一个颜色计算反差色
    getContrastText: () => {},
    // 根据一个颜色名称计算反差色，是`getContrastText()`的包装，参数为预置色的名称
    getFixedContrastText: () => {},
    // 根据预置色名称获得ColorKeeper对象
    getColor: () => {},
    // 根据main色值计算其它必要色
    augmentColor: () => {}
  },

  typography: {
    // fontFamily: '',
    // 默认标准字号
    fontSize: 14,
    // 标准行高
    lineHeight: 1.2,
    // 微盟字重
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    // 微盟字阶: t1 ~ t18
    textLevel: []
    // ...其它预置，key不可修改，可新增自己用
  },
  // 动画库
  animation: {
    // 内置方法, 根据 name, props从动画库中获取对应的css，现在只做了个spin😎
    create(name, props) {}
  },
  // 圆角半径
  radius: {
    // 内置方法，默认 num * 4px，获取
    create(num) {}
  },

  shadows: {
    // 内置方法, 内置25个3D阴影级别
    create(level) {}
  },
  // 根据默认4px *num 计算实际值,内置方法
  spacing() {},
  // 创建css transitions
  transitions: {
    create() {}
    // ... 其它详见
  },

  // 预置的功能性z-index，可以改、可以新增，但要注意顺序，不可删
  zIndex: {
    navBar: 1100,
    drawer: 1200,
    modal: 1300,
    pin: 1500
  },

  /**
   * @dev 全局统一使用的 props 值，在组件中使用 useThemeProps 时可通过参数将全局 Props 值作为默认 Props 引入
   * 例如：volume、color 等常用属性默认存在，可修改调整默认值，也可以新增新的值以供自己代码使用，但是需注意冲突问题
   */
  globalProps: {
    // 全局默认色调, 可选 primary,secondary,info,warning,error,success，可在调色盘中设置具体色值
    color: 'primary',
    // 综合大小（体积），可选 tiny,small,medium,large, 部分组件会使用到
    volume: 'medium'
  },
  // styled生成组件的配置项
  components: {
    // 内置组件前面加个Marrs
    MarrsButton: {
      // 默认props
      defaultProps: {
        textTransform: 'capitalize'
      },
      // 新增样式体，可以处理组件原本没有处理的入参
      variants: [
        {
          props: { face: 'dashed', color: 'primary' },
          style: {
            color: 'red',
            border: '1px dashed red'
          }
        }
      ],
      // 内置样式重写，忽略前缀
      styleOverrides: {
        dashedVolumeLarge: {
          // background: 'grey'
        }
      }
    }
  }
};

```
