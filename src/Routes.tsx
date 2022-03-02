import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";

import App from "./App";
import { Home } from "./scenes";

export default function Routes() {
  const location = useLocation();
  return (
    <App>
      <Switch location={location} key={location.pathname}>
        <Route>
          <Home />
        </Route>
      </Switch>
    </App>
  );
}
