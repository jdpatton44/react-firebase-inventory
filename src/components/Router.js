import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientPicker from "./ClientPicker";
import App from "./App";
import Inventory from "./Inventory";
import Segment from "./Segment";
import Mailings from "./Mailings";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientPicker} />
      <Route path="/client/:clientId/Inventory" component={App} />
      <Route path="/client/:clientId/Mailings" component={Mailings} />
      <Route path="/client/:clientId/Packages" component={Segment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;