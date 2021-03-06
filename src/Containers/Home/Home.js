import React, { Component } from "react";

import BarMenu from "../../Components/BarMenu/BarMenu";
import BarHome from "../../Components/BarHome/BarHome";
import SquareCard from "../../Components/SquareCard/SquareCard";
import SlNet from "../../images/slNet.png";
import CampaignProgress from "../../images/campaignProgress.png";
import SlRescue from "../../images/slRescue.png";
import CampainCalendar from "../../images/campaignCalendar.png";
import ProfitSimulator from "../../images/profitSimulator.png";
import SlProfitSimulator from "../../images/slProfitSimulator.png";
import FastSale from "../../images/fastSale.png";
import EAppointment from "../../images/eAppointment.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <BarMenu title="Hola " name="Josefina" />
        <BarHome />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "1vh"
          }}
        >
          <SquareCard img={CampaignProgress} alt="SLNet" text="En Progreso" />
          <SquareCard img={SlRescue} alt="SLNet" text="Al Rescate" />
          <SquareCard img={CampainCalendar} alt="SLNet" text="Calendario" />
          <SquareCard
            img={ProfitSimulator}
            alt="SLNet"
            text="Simulador de"
            textCut="Ganancias"
            secondText="Plan de 90 días"
          />
          <SquareCard
            img={SlProfitSimulator}
            alt="SLNet"
            text="Simulador de"
            textCut="Ganancias"
            secondText="Asesoras"
          />
          <SquareCard
            img={SlNet}
            alt="SLNet"
            text="Red de"
            textCut="Asesoras"
          />
          <SquareCard img={FastSale} alt="SLNet" text="Pedido Rápido" />
          <SquareCard
            img={EAppointment}
            alt="SLNet"
            text="Nombramiento en Línea"
          />
        </div>
      </div>
    );
  }
}
