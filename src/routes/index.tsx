import React from 'react';

import { useAuth } from '../hooks/auth';
import AuthRoute from './auth.routes';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { logged } = useAuth();

  return <>{logged ? <AppRoutes /> : <AuthRoute />}</>;
};

export default Routes;
