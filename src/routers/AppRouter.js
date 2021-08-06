import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "../routers/PublicRoute";
import { Navbar } from "../components/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={false} component={Navbar} />
        </Switch>
      </div>
    </Router>
  );
};
