import { Components } from './components';
import { Animation, AnimationOptions } from './createAnimation';
import { Palette, PaletteOptions } from './createPalette';
import { Radius, RadiusOptions } from './createRadius';
import { Transitions, TransitionsOptions } from './createTransitions';
import { Typography, TypographyOptions } from './createTypography';
import { Shadows } from './shadows';
import { ZIndex, ZIndexOptions } from './zIndex';

export interface ThemeOptions {
  radius?: RadiusOptions;
  animation?: AnimationOptions;
  components?: Components;
  palette?: PaletteOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}

export interface Theme {
  radius?: Radius;
  animation?: Animation;
  components?: Components;
  palette: Palette;
  shadows: Shadows;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready to use theme object.
 */
export default function createTheme(
  options?: ThemeOptions,
  ...args: object[]
): Theme;
