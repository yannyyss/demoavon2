import React from "react";
import { Button, Paper } from "@material-ui/core";

const AlertProfit = () => {
  return (
    <div>
      <Paper style={{ padding: "4vh 2vh", paddingBottom: "1vh" }}>
        <div>
          <p style={{ margin: "0" }}>
            Estos valores son referencias y pueden variar según las condiciones
            de cada campaña
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Button style={{ color: "#ec0080", marginRight: "2vh" }}>
            ACEPTAR
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default AlertProfit;
