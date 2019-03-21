import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Container/Home/Home";
import CampaignCalendar from "./Container/CampaignCalendar/CampaignCalendar";
import ProfitSimulator from "./Container/ProfitSimulator/ProfitSimulator";

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/calendar" component={CampaignCalendar} />
    <Route path="/profitsimulator" component={ProfitSimulator} />
  </Switch>
);
