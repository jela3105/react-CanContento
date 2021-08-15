import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "../routers/PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/"
            exact
            isAuthenticated={false}
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
