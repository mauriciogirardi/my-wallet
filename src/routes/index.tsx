import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/list" exact component={List} />
      <Route path="/signIn" exact component={SignIn} />
    </Layout>
  </Switch>
);

export default Routes;
