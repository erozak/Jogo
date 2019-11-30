import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Redirect from 'components/Redirect';

import { useFirebaseUser } from 'containers/ModuleProvider/Firebase';
import { renderRoutes } from 'modules/Route';

import routes from './App.routes';

const AppSwitch: FC = () => {
  const { loading, user } = useFirebaseUser();

  if (loading) {
    return null;
  }

  if (user) {
    return <Switch>{renderRoutes(routes.authorized)}</Switch>;
  }

  return (
    <Switch>
      {renderRoutes(routes.anonymouse)}
      <Redirect to="" />
    </Switch>
  );
};

export default AppSwitch;
