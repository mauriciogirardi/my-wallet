import React from 'react';

import { Grid } from './styles';

import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';

const Layout: React.FC = ({ children }) => (
  <Grid>
    <Header />
    <Aside />
    <Main>{children}</Main>
  </Grid>
);

export default Layout;
