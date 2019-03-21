import React, { Component } from "react";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarProfit from "../../Components/BarProfit/BarProfit";
import AlertProfit from "../../Components/AlertProfit/AlertProfit";
import ProfitCalculator from "../../Components/ProfitCalculator/ProfitCalculator";

export class ProfitSimulator extends Component {
  render() {
    return (
      <div>
        <BarMenu title="Simulador Ganancias" />
        <BarProfit />
        <AlertProfit />
        <ProfitCalculator />
      </div>
    );
  }
}

export default ProfitSimulator;
