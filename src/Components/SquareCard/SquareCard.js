import React from "react";
import { Card, Typography } from "@material-ui/core/";

const SquareCard = props => {
  return (
    <div>
      <Card
        style={{
          width: "150px",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "1vh",
          padding: "1vh"
        }}
      >
        <img
          alt={props.alt}
          src={props.img}
          style={{ width: "90px", paddingBottom: "1vh" }}
        />
        <Typography variant="title" style={{ color: "#808080" }}>
          {props.text}
        </Typography>
        <Typography variant="title" style={{ color: "#808080" }}>
          {props.textCut}
        </Typography>
        <Typography style={{ color: "#808080" }}>{props.secondText}</Typography>
      </Card>
    </div>
  );
};

export default SquareCard;
