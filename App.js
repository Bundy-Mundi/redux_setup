import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseRedux from "./useRedux";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UseRedux>
            <Home />
          </UseRedux>
        </Route>
      </Switch>
    </Router>
  );
};
