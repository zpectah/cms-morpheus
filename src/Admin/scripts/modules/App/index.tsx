import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  ROUTE_PATH_ATTR_DETAIL_ID,
  ROUTE_PATH_ATTR_PANEL,
  ROUTE_PATH_ATTR_TOKEN,
  ROUTES,
} from '../../constants';
import AuthRoute from '../../utils/AuthRoute';
import DashboardPage from "../../pages/DashboardPage";
import Error404Page from "../../pages/Error404";
import LostPasswordPage from "../../pages/LostPasswordPage";
import LoginPage from "../../pages/LoginPage";

const AppModule = () => {

  return (
    <>
      <Switch>

        <Route
          path={[
            ROUTES.app['lost-password'].path,
            ROUTES.app['lost-password'].path + ROUTE_PATH_ATTR_TOKEN,
          ]}
          component={LostPasswordPage}
          exact
        />

        <Route path={ROUTES.app.login.path} component={LoginPage} />

        <AuthRoute
          path={ROUTES.app.dashboard.path}
          component={DashboardPage}
          auth={ROUTES.app.dashboard.auth}
          exact
        />

        <Route component={Error404Page} />

      </Switch>
    </>
  );
};

export default AppModule;