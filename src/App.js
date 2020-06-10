import React from "react";
import { Router, Route, Switch } from "react-router";
import Callback from "./functions/callback";
import Home from "./components/Home";
import Auth from './utils/auth'

export const auth = new Auth();
const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home auth={auth} />} />
      <Route
        path="/callback"
        render={(props) => {
          handleAuthentication(props);
          return <Callback />;
        }}
      />
    </Switch>
  );
};

export default Routes;
