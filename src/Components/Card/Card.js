import React from "react";
import { Typography, Paper } from "@material-ui/core";

const Card = props => {
  return (
    <div>
      <Paper
        style={{
          margin: "2vh",
          padding: "2vh"
        }}
        className={props.color}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: "1px solid #ec0080",
            paddingBottom:"1vh"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding:"0",
            paddingBottom:"1vh"
            }}
          >
            <Typography variant="h5">{props.title}</Typography>
            <Typography>{props.subtitle}</Typography>
          </div>
          <div>
            <Typography variant="h3">{props.number}</Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop:"2vh"
          }}
        >
          <Typography>{props.comparativo1}</Typography>
          <Typography>T</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop:"1vh"
          }}
        >
          <Typography>{props.comparativo2}</Typography>
          <Typography>T</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop:"1vh"
          }}
        >
          <Typography>{props.comparativo3}</Typography>
          <Typography>T</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Card;
