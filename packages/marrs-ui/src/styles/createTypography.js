import { deepmerge } from '@wemo-ui/marrs-core/utils';
import assert from '../utils/assert';

// function round(value) {
//   return Math.round(value * 1e5) / 1e5;
// }

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily =
  'PingFang SC, DroidSansFallback, Lantinghei SC, Helvetica, Arial, Hiragino Sans GB, "Roboto", "Helvetica", "Arial", sans-serif';

export default function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    lineHeight = 1.2,
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 600,
    fontWeightBold = 700,
    htmlFontSize = 16, //  浏览器默认fontsize
    allVariants,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;

  assert(typeof fontSize === 'number', 'fontSize 这里需要是个数字');
  assert(typeof htmlFontSize === 'number', 'htmlFontSize 这里需要是个数字');

  // const coef = fontSize / 14;

  const buildVariant = (
    fontWeight,
    size,
    lineHeight,
    letterSpacing,
    casing
  ) => ({
    fontFamily,
    fontWeight,
    fontSize: size,
    lineHeight,
    // ...(fontFamily === defaultFontFamily
    //   ? { letterSpacing: `${round(letterSpacing / size)}em` }
    //   : {}),
    ...casing,
    ...allVariants
  });

  const textLevel = {
    t1: buildVariant(null, 8, lineHeight, 0.15),
    t2: buildVariant(null, 9, lineHeight, 0.15),
    t3: buildVariant(null, 10, lineHeight, 0.15),
    t4: buildVariant(null, 11, lineHeight, 0.15),
    t5: buildVariant(null, 12, lineHeight, 0.15),
    t6: buildVariant(null, 13, lineHeight, 0.15),
    t7: buildVariant(null, 14, lineHeight, 0.15),
    t8: buildVariant(null, 15, lineHeight, 0.15),
    t9: buildVariant(null, 16, lineHeight, 0.15),
    t10: buildVariant(null, 17, lineHeight, 0.15),
    t11: buildVariant(null, 18, lineHeight, 0.15),
    t12: buildVariant(null, 19, lineHeight, 0.15),
    t13: buildVariant(null, 20, lineHeight, 0.15),
    t14: buildVariant(null, 21, lineHeight, 0.15),
    t15: buildVariant(null, 22, lineHeight, 0.15),
    t16: buildVariant(null, 23, lineHeight, 0.15),
    t17: buildVariant(null, 24, lineHeight, 0.15),
    t18: buildVariant(null, 30, lineHeight, 0.15)
  };
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    dialogTitle: buildVariant(fontWeightMedium, 16, 1, 0.2),
    dialogBody: buildVariant(fontWeightRegular, 14, 1.5, 0.2),
    textLevel
  };

  return deepmerge(
    {
      htmlFontSize,
      lineHeight,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants
    },
    other,
    {
      clone: false // No need to clone deep
    }
  );
}
