import React from 'react';
import { Route } from 'react-router-dom';
import { map } from 'lodash';

import { RouteConfig } from './Route.model';

export default function renderRoutes(configs: RouteConfig[]) {
  return map(configs, ({ key, ...routeProps }) => {
    return <Route {...routeProps} key={key} />;
  });
}
