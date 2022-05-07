// import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider as SystemThemeProvider } from '../dependencies/system';
let systemTheme;
const ThemeProvider = (props) => {
  const { children, theme, ...other } = props;
  useEffect(() => {
    systemTheme = theme;
  }, [theme]);
  return (
    <SystemThemeProvider theme={theme} {...other}>
      {/* {Children.only(children)} */}
      {children}
    </SystemThemeProvider>
  );
};

export { ThemeProvider as default, systemTheme };
