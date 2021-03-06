import React from "react";
import { Typography, Paper } from "@material-ui/core";

const SecondSquareCard = props => {
  return (
    <div style={{ margin: "0 2vh 2vh" }}>
      <Paper style={{ width: "155px", height: "155px" }}>
        <div className={props.color} style={{ padding: "2vh" }}>
          <Typography variant="h5">{props.text}</Typography>
          <Typography variant="display1">{props.number}</Typography>
        </div>
      </Paper>
    </div>
  );
};
export default SecondSquareCard;
