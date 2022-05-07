import { makeStyles as SystemMakeStyles } from '@wemo-ui/marrs-core/styles';
import defaultTheme from './defaultTheme';

const makeStyles = (args, options) => {
  return SystemMakeStyles(args, {
    defaultTheme,
    ...options
  });
};

export default makeStyles;
