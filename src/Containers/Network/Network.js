import React, { Component } from "react";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarCampaign from "../../Components/BarCampaign/BarCampaign";
import SimpleCard from "../../Components/SimpleCard/SimpleCard";
import Input from "../../Components/Input/Input";

class Network extends Component {
  render() {
    return (
      <div>
        <BarMenu title="Red de Asesoras" />
        <BarCampaign />
        <div style={{ margin: "2vh" }}>
          <Input label="Buscar" style={{ width: "90%", height: "60px" }} />
        </div>
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
        <SimpleCard name="Talla Collon" division="#" zone="#" sector="#" />
      </div>
    );
  }
}

export default Network;
