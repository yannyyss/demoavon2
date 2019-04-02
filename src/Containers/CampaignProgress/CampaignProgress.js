import React, { Component } from "react";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarCampaign from "../../Components/BarCampaign/BarCampaign";
import AlertProfit from "../../Components/AlertProfit/AlertProfit";
import CircleCard from "../../Components/CircleCard/CircleCard";
import Card from "../../Components/Card/Card";
import SecondSquareCard from "../../Components/SecondSquareCard/SecondSquareCard";

export class CampaignProgress extends Component {
  render() {
    return (
      <div>
        <BarMenu title="En Progreso" />
        <BarCampaign />
        <AlertProfit />
        <CircleCard title="Ventas" subtitle="Meta Personal: Q.48269.00" />
        <Card
          color="border-color1"
          title="Nombramientos"
          subtitle="Meta Personal: 10"
          number="12"
          comparativo1="Comparativo Campaña 19:3"
          comparativo2="Comparativo Campaña 18:13"
          comparativo3="Comparativo Campaña 17:5"
        />
        <Card
          color="border-color2"
          title="Reingresos"
          subtitle="Meta Personal: 4"
          number="2"
          comparativo1="Comparativo Campaña 19:10"
          comparativo2="Comparativo Campaña 18:2"
          comparativo3="Comparativo Campaña 17:8"
        />
        <Card
          color="border-color1"
          title="Reactivas"
          subtitle="Meta Personal: 6"
          number="6"
          comparativo1="Comparativo Campaña 19:3"
          comparativo2="Comparativo Campaña 18:7"
          comparativo3="Comparativo Campaña 17:10"
        />
        <Card
          color="border-color1"
          title="Permanentes"
          subtitle="Meta Personal: 105"
          number="109"
          comparativo1="Comparativo Campaña 19:72"
          comparativo2="Comparativo Campaña 18:68"
          comparativo3="Comparativo Campaña 17:112"
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SecondSquareCard
            color="border-color3"
            text="Consejeras sin Pedido"
            number="6"
          />
          <SecondSquareCard
            color="border-color3"
            text="Órdenes Mínimas"
            number="10"
          />
        </div>
      </div>
    );
  }
}

export default CampaignProgress;
