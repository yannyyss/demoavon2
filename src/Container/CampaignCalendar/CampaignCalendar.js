import React, { Component } from "react";
import Circle from "../../Components/Cicle/Circle";

export class CampaignCalendar extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2vh",
            paddingRight: "2vh"
          }}
        >
          <h5>Día de facturación</h5>
          <h5 style={{ color: "pink" }}>29-enero-2019</h5>
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
            variant="h4"
            variant2="display2"
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
        <h5 style={{ color: "pink" }}>Momento de Campaña AVON</h5>
      </div>
    );
  }
}

export default CampaignCalendar;
