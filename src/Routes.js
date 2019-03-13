import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Container/Home/Home";
import CampaignCalendar from "./Container/CampaignCalendar/CampaignCalendar";

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/calendar" component={CampaignCalendar} />
  </Switch>
);
