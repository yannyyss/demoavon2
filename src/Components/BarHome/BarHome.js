import React from "react";

const BarHome = () => {
  return (
    <div>
      <h4
        style={{
          backgroundColor: "#ec0080",
          textAlign: "left",
          color: "#fff",
          margin: "0",
          paddingLeft: "4vh"
        }}
      >
        Asesora Independiente
      </h4>
      <div
        style={{
          backgroundColor: "#ec0080",
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#fff"
        }}
      >
        <h4>División: Sauce</h4>
        <h5>Zona: 143</h5>
        <h5>Sector: 26</h5>
      </div>
    </div>
  );
};

export default BarHome;
