import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
    </Layout>
  </Switch>
);

export default AppRoutes;
