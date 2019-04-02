import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/Home";
import CampaignCalendar from "./Containers/CampaignCalendar/CampaignCalendar";
import ProfitSimulator from "./Containers/ProfitSimulator/ProfitSimulator";
import CampaignProgress from "./Containers/CampaignProgress/CampaignProgress";

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/calendar" component={CampaignCalendar} />
    <Route path="/profitsimulator" component={ProfitSimulator} />
    <Route path="/campaignprogress" component={CampaignProgress} />
  </Switch>
);
