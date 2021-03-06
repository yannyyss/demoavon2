import React, { Component } from "react";
import Circle from "../../Components/Circle/Circle";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarCampaign from "../../Components/BarCampaign/BarCampaign";
import CampaignDividers from "../../Components/CampaignDividers/CampaignDividers";

export class CampaignCalendar extends Component {
  render() {
    return (
      <div>
        <BarMenu title="Calendario" />
        <BarCampaign />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2vh",
            paddingRight: "2vh"
          }}
        >
          <h4 style={{ color: "#808080" }}>Día de facturación:</h4>
          <h4 style={{ color: "#ec0080" }}>29-enero-2019</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "1vh"
          }}
        >
          <Circle
            circle="blue-circle"
            variant="subtitle1"
            variant2="h5"
            day="Domingo"
            date="21"
          />
          <Circle
            circle="orange-circle"
            variant="h5"
            variant2="display3"
            day="Lunes"
            date="22"
          />
          <Circle
            circle="purple-circle"
            variant="subtitle1"
            variant2="h5"
            day="Martes"
            date="23"
          />
        </div>
        <div style={{ padding: "2vh" }}>
          <h4
            style={{
              color: "#ec0080",
              textAlign: "left",
              marginBottom: "1vh"
            }}
          >
            Momento de Campaña AVON:
          </h4>
          <CampaignDividers />
        </div>
      </div>
    );
  }
}

export default CampaignCalendar;
