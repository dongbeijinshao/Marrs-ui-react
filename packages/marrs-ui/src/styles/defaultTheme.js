import createTheme from './createTheme';

const defaultTheme = createTheme({});

if (typeof window !== 'undefined') {
  window.theme = defaultTheme;
}
export default defaultTheme;
