import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AuthHello from "./AuthHello";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/auth-hello" component={AuthHello} />
    </Switch>
  </BrowserRouter>
);
