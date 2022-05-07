import { Breakpoint } from '@wemo-ui/marrs-core/system';
import { Theme } from './createTheme';
import { Variant } from './createTypography';

export interface ResponsiveFontSizesOptions {
  breakpoints?: Breakpoint[];
  disableAlign?: boolean;
  factor?: number;
  variants?: Variant[];
}

export default function responsiveFontSizes(
  theme: Theme,
  options?: ResponsiveFontSizesOptions
): Theme;
