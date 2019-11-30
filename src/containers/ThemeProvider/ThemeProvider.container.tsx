import React, { Children, FC, ReactChild } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme } from './theme';

export interface ThemeProviderProps {
  children: ReactChild;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={darkTheme}>
    {Children.only(children)}
  </MuiThemeProvider>
);

export default ThemeProvider;
