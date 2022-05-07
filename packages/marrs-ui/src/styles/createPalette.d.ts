import grey from '../colors/grey';
import neutral from '../colors/neutral';
import { Color, PaletteMode, Volume } from '../types/components';
export {};

type ColorValue = String;
export declare class ColorKeeper {
  constructor(colorValue: string, palette: Palette);
  darken(coefficient?: number): ColorKeeper;
  lighten(coefficient?: number): ColorKeeper;
  alpha(coefficient?: number): ColorKeeper;
  color(): ColorValue;
  contrast(): ColorValue;
}

export interface CommonColors {
  black: ColorValue;
  white: ColorValue;
}

export type ColorPartial = Partial<Color>;

export interface TypeText {
  primary: ColorValue;
  secondary: ColorValue;
  disabled: ColorValue;
}

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface TypeBackground {
  default: ColorValue;
  paper: ColorValue;
}

export type TypeDivider = ColorValue;

export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;

export interface SimplePaletteColorOptions {
  main: string;
  contrastText?: string;
  [mode as string]?: string;
}

export interface PaletteColor {
  main: string;
  contrastText: string;
}

export interface TypeObject {
  text: TypeText;
  action: TypeAction;
  divider: TypeDivider;
  background: TypeBackground;
}

export interface PaletteAugmentColorOptions {
  color: PaletteColorOptions;
  mainShade?: number | string;
  lightShade?: number | string;
  darkShade?: number | string;
  name?: number | string;
}

export interface Palette {
  common: CommonColors;
  mode: PaletteMode;
  contrastThreshold: number;
  // tonalOffset: PaletteTonalOffset;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  neutral: neutral;
  grey: grey;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getFixedContrastText: (color: Volume) => string;
  getContrastText: (background: string) => string;
  getColor: (color: Color, defaultColor: string) => ColorKeeper;
  augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}

export type PartialTypeObject = {
  [P in keyof TypeObject]?: Partial<TypeObject[P]>;
};

export interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  mode?: PaletteMode;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
  getFixedContrastText?: (color: Volume) => string;
  getColor?: (color: Volume) => ColorKeeper;
}

export default function createPalette(palette: PaletteOptions): Palette;
