import React from "react";
import { Paper, Typography } from "@material-ui/core";

const CircleCard = props => {
  return (
    <div>
      <Paper style={{ margin: "2vh", borderTop: "6px solid #ec0080" }}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography>{props.subtitle}</Typography>
      </Paper>
    </div>
  );
};

export default CircleCard;
