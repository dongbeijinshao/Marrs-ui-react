import { deepmerge } from '@wemo-ui/marrs-core/utils';
import common from '../colors/common';
import grey from '../colors/grey';
import neutral from '../colors/neutral';
import {
  alpha,
  darken,
  getContrastRatio,
  lighten
} from '../dependencies/system';

export const main = {
  text: {
    // 字体主色，main模式下为接近黑色
    primary: neutral.N9,
    // 字体次要色，main模式下为深灰色
    secondary: neutral.N8,
    // 字体禁用色，main模式下为淡灰色
    disabled: neutral.N7
  },
  // 分割线的默认颜色
  divider: neutral.N4,
  // 通用底色
  background: {
    paper: common.white,
    default: neutral.N3,
    error: neutral.N10
  },
  // 特殊action调色，命名即含义
  action: {
    active: neutral.N7,
    hover: neutral.N3,
    hoverOpacity: 0.04,
    selected: neutral.N5,
    selectedOpacity: 0.08,
    disabled: neutral.N6,
    disabledBackground: neutral.N5,
    disabledOpacity: 0.4,
    focus: neutral.N5,
    focusOpacity: 0.12,
    activatedOpacity: 0.2,
    backgroundOpacity: 0.1,
    rightArrow: neutral.N6
  }
};

function getContrastColor(background, contrastThreshold) {
  const contrastText =
    getContrastRatio(background, common.white) >= contrastThreshold
      ? common.white
      : main.text.primary;

  return contrastText;
}

export class ColorKeeper {
  constructor(colorValue, palette) {
    this.value = colorValue;
    this.palette = palette;
  }
  darken(coefficient = 0.1) {
    return new ColorKeeper(darken(this.value, coefficient));
  }
  lighten(coefficient = 0.12) {
    return new ColorKeeper(lighten(this.value, coefficient));
  }
  alpha(coefficient = 0.12) {
    return new ColorKeeper(alpha(this.value, coefficient));
  }
  color() {
    return this.value;
  }
  contrast() {
    return getContrastColor(this.value, this.palette.contrastThreshold);
  }
}

export default function createPalette(palette) {
  const {
    primary = {
      main: '#FA2C19'
    },
    secondary = { main: '#C4C4C4' },
    error = { main: '#FF2E2E' },
    warning = {
      main: '#FFA300'
    },
    info = {
      main: '#2A6AE9'
    },
    success = {
      main: '#07C160'
    },
    mode = 'main',
    contrastThreshold = 2.3,
    // tonalOffset = 0.2,
    ...other
  } = palette;

  function getFixedContrastText(colorName = 'primary') {
    return (
      this[colorName].contrastText || getContrastText(this[colorName][mode])
    );
  }

  function getColor(colorName, defaultColorInput = colorName) {
    const color = this[colorName] && this[colorName][mode];

    const defaultColor = this[defaultColorInput]
      ? this[defaultColorInput][mode]
      : defaultColorInput;

    const result = new ColorKeeper(color || defaultColor, palette);
    return result;
  }
  // function getColor(colorName, defaultColor = colorName) {
  //   const color = this[colorName];

  //   const result = new ColorKeeper(
  //     color ? color[mode] || defaultColor : defaultColor,
  //     palette
  //   );
  //   return result;
  // }
  function getContrastText(background) {
    return getContrastColor(background, contrastThreshold);
  }

  const augmentColor = ({ color }) => {
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = { main };

  const paletteOutput = deepmerge(
    {
      // 一般颜色集合
      common,
      // 模式，预制的color分类
      mode: 'main',
      // 预置主色
      primary: augmentColor({ color: primary, name: 'primary' }),
      // 预置次要色
      secondary: augmentColor({
        color: secondary,
        name: 'secondary'
      }),
      // 预置错误色，用于明显的错误提示
      error: augmentColor({ color: error, name: 'error' }),
      // 预置警告色，用于一般警告
      warning: augmentColor({ color: warning, name: 'warning' }),
      // 预置信息色，用于一般信息提示
      info: augmentColor({ color: info, name: 'info' }),
      // 预置成功色，用于一般成功提示
      success: augmentColor({ color: success, name: 'success' }),
      // 预置中性色阶
      neutral,
      // 预置灰阶
      grey,
      // 反差色阈值
      contrastThreshold,
      // 根据一个颜色计算反差色
      getContrastText,
      // 根据一个颜色名称计算反差色，是`getContrastText()`的包装，参数为预置色的名称
      getFixedContrastText,
      // 根据预置色名称获得ColorKeeper对象
      getColor,
      // 根据main色值计算其它必要色
      augmentColor,
      ...modes[mode]
    },
    other
  );

  return paletteOutput;
}
