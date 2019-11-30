import React from 'react';

import { RouteConfig } from 'modules/Route';

import SignInPage from 'containers/SignInPage';
import OverviewPage from 'containers/OverviewPage';

const appRouteConfigs: Record<'anonymouse' | 'authorized', RouteConfig[]> = {
  anonymouse: [
    {
      key: 'sign-in',
      exact: true,
      path: '',
      component: SignInPage,
    },
  ],
  authorized: [
    {
      key: 'overview',
      path: '',
      exact: true,
      component: OverviewPage,
    },
    {
      key: 'not-found',
      render: () => <div>Not Found</div>,
    },
  ],
};

export default appRouteConfigs;
