import React, { Component } from "react";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarCampaign from "../../Components/BarCampaign/BarCampaign";
import AlertProfit from "../../Components/AlertProfit/AlertProfit";
import SecondSquareCard from "../../Components/SecondSquareCard/SecondSquareCard";

class Rescue extends Component {
  render() {
    return (
      <div>
        <BarMenu title="Al Rescate" />
        <BarCampaign />
        <div style={{ marginBottom: "2vh" }}>
          <AlertProfit />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <SecondSquareCard
            color="border-color3"
            text="Inactivas a salvar"
            number="5"
          />
          <SecondSquareCard color="border-color3" text="Zoom" number="7" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <SecondSquareCard
            color="border-color3"
            text="Pedidos en Bodega"
            number="21"
          />
          <SecondSquareCard
            color="border-color3"
            text="Posibles Reingresos"
            number="18"
          />
        </div>
      </div>
    );
  }
}

export default Rescue;
