import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Containers/Home/Home";
import CampaignCalendar from "./Containers/CampaignCalendar/CampaignCalendar";
import ProfitSimulator from "./Containers/ProfitSimulator/ProfitSimulator";
import CampaignProgress from "./Containers/CampaignProgress/CampaignProgress";
import Rescue from "./Containers/Rescue/Rescue";
import Network from "./Containers/Network/Network";
import Report from "./Containers/Report/Report";

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/calendar" component={CampaignCalendar} />
    <Route path="/profitsimulator" component={ProfitSimulator} />
    <Route path="/campaignprogress" component={CampaignProgress} />
    <Route path="/rescue" component={Rescue} />
    <Route path="/network" component={Network} />
    <Route path="/report" component={Report} />
  </Switch>
);
