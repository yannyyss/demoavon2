import React from "react";
import { Typography, Paper } from "@material-ui/core";

const SimpleCard = props => {
  return (
    <div style={{ margin: "1vh 2vh" }}>
      <Paper>
        <div style={{ textAlign: "left", padding: "2vh" }}>
          <Typography variant="h5">{props.name}</Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography>División: {props.division} /</Typography>
            <Typography>Zona: {props.zone} /</Typography>
            <Typography>Sector: {props.sector}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SimpleCard;
