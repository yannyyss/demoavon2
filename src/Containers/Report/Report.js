import React from "react";
import BarMenu from "../../Components/BarMenu/BarMenu";
import BarCampaign from "../../Components/BarCampaign/BarCampaign";
import Input from "../../Components/Input/Input";
import { Button } from "@material-ui/core";
import ReportTable from "../../Components/ReportTable/ReportTable";

const Report = () => {
  return (
    <div>
      <BarMenu title="Nombre Reporte" />
      <BarCampaign />
      <div style={{ margin: "2vh" }}>
        <Input label="Buscar" style={{ width: "90%", height: "60px" }} />
      </div>
      <Button
        style={{
          backgroundColor: "#ec0080",
          color: "#fff",
          width: "86%",
          marginBottom: "4vh"
        }}
      >
        Filtrar
      </Button>
      <ReportTable />
    </div>
  );
};

export default Report;
