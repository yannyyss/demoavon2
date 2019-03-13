import React from "react";
import "./Circle.css";
import { Typography } from "@material-ui/core";

const Circle = props => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center"
        }}
        className={props.circle}
      >
        <Typography variant={props.variant} style={{ color: "#fff" }}>
          {props.day}
        </Typography>
        <Typography variant={props.variant2} style={{ color: "#fff" }}>
          {props.date}
        </Typography>
      </div>
    </div>
  );
};

export default Circle;
