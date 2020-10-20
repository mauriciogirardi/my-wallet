import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
