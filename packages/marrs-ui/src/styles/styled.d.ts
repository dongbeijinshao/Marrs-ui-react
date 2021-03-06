import { CreateMUIStyled } from '@wemo-ui/marrs-core/system';
import { Theme } from './createTheme';

/**
 * Custom styled utility that has a default MUI theme.
 *
 * @param tag HTML tag or component that should serve as base.
 * @param options Styled options for the created component.
 * @returns React component that has styles attached to it.
 */
declare const styled: CreateMUIStyled<Theme> | any;

export default styled;
