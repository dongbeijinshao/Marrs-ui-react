import * as CSS from 'csstype';
import * as React from 'react';
import { Palette } from './createPalette';

export type TextLevel = {
  t1: TypographyStyleOptions;
  t2: TypographyStyleOptions;
  t3: TypographyStyleOptions;
  t4: TypographyStyleOptions;
  t5: TypographyStyleOptions;
  t6: TypographyStyleOptions;
  t7: TypographyStyleOptions;
  t8: TypographyStyleOptions;
  t9: TypographyStyleOptions;
  t10: TypographyStyleOptions;
  t11: TypographyStyleOptions;
  t12: TypographyStyleOptions;
  t13: TypographyStyleOptions;
  t14: TypographyStyleOptions;
  t15: TypographyStyleOptions;
  t16: TypographyStyleOptions;
  t17: TypographyStyleOptions;
  t18: TypographyStyleOptions;
  t19: TypographyStyleOptions;
  t20: TypographyStyleOptions;
};

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

export type FontStyle = Required<{
  fontFamily: React.CSSProperties['fontFamily'];
  fontSize: number;
  fontWeightLight: React.CSSProperties['fontWeight'];
  fontWeightRegular: React.CSSProperties['fontWeight'];
  fontWeightMedium: React.CSSProperties['fontWeight'];
  fontWeightBold: React.CSSProperties['fontWeight'];
  htmlFontSize: number;
}>;

export type NormalCssProperties = CSS.Properties<number | string>;
export type Fontface = CSS.AtRule.FontFace & {
  fallbacks?: CSS.AtRule.FontFace[];
};

/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends NormalCssProperties {
  '@font-face'?: Fontface | Fontface[];
}

export interface CSSProperties extends BaseCSSProperties {
  // Allow pseudo selectors and media queries
  // `unknown` is used since TS does not allow assigning an interface without
  // an index signature to one with an index signature. This is to allow type safe
  // module augmentation.
  // Technically we want any key not typed in `BaseCSSProperties` to be of type
  // `CSSProperties` but this doesn't work. The index signature needs to cover
  // BaseCSSProperties as well. Usually you would use `BaseCSSProperties[keyof BaseCSSProperties]`
  // but this would not allow assigning React.CSSProperties to CSSProperties
  [k: string]: unknown | CSSProperties;
}

export interface FontStyleOptions extends Partial<FontStyle> {
  allVariants?: React.CSSProperties;
}

// TODO: which one should actually be allowed to be subject to module augmentation?
// current type vs interface decision is kept for historical reasons until we
// made a decision
export type TypographyStyle = CSSProperties;
export type TypographyStyleOptions = TypographyStyle;

export interface TypographyUtils {
  textLevel: TextLevel;
}

export interface Typography
  extends Record<Variant, TypographyStyle>,
    FontStyle,
    TypographyUtils {
  textLevel: TextLevel;
}

export type TypographyOptions = Partial<
  Record<Variant, TypographyStyleOptions> & FontStyleOptions
>;

export default function createTypography(
  palette: Palette,
  typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
): Typography;
