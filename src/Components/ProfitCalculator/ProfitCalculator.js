import React from "react";
import { Button } from "@material-ui/core";
import Input from "../Input/Input";

const ProfitCalculator = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1vh"
        }}
      >
        <h5 style={{ margin: "0", padding: "2vh" }}>País: Guatemala</h5>
        <h5 style={{ margin: "0", padding: "2vh" }}>Moneda: Quetzal</h5>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "2vh"
        }}
      >
        <h5 style={{ margin: "0", padding: "2vh" }}>
          ¿Cuánto quieres ganar en 90 días?
        </h5>
      </div>

      <Input
        id="ingresa-una-cantidad-1"
        label="
        Ingresa una cantidad"
        variant="outlined"
        style={{ width: "90%", height: "60px" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "2vh"
        }}
      >
        <h5 style={{ margin: "0", padding: "2vh" }}>
          ¿Cuántas clientes potenciales?
        </h5>
      </div>

      <Input
        id="ingresa-una-cantidad-2"
        label="
        Ingresa una cantidad"
        variant="outlined"
        style={{ width: "90%", height: "60px" }}
      />

      <Button
        style={{
          backgroundColor: "#ec0080",
          color: "#fff",
          width: "90%",
          marginTop: "4vh"
        }}
      >
        Calcular
      </Button>
    </div>
  );
};

export default ProfitCalculator;
