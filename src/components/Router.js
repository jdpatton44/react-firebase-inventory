import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientPicker from "./ClientPicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientPicker} />
      <Route path="/client/:clientId/Inventory" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;