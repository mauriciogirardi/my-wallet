import React, { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import usePersistedState from '../utils/usePersistedState';

interface IThemeContext {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setThema] = usePersistedState<DefaultTheme>(
    '@MyWalletTheme',
    dark,
  );

  const toggleTheme = () => {
    setThema(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
