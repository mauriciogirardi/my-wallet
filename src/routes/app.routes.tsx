import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import RegisterAccount from '../pages/RegisterAccount';

const AppRoutes: React.FC = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
      <Route path="/register-account" component={RegisterAccount} />
    </Layout>
  </Switch>
);

export default AppRoutes;
