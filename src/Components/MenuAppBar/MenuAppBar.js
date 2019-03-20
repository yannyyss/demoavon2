import React from "react";

import { IconButton } from "@material-ui/core/";
import AppIcon from "@material-ui/icons/Apps";

const MenuAppBar = props => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#ec008c",
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <IconButton>
          <AppIcon style={{ color: "#fff" }} />
        </IconButton>
        <h4 style={{ color: "#fff" }}>
          {props.title}
          {props.name}
        </h4>
      </div>
    </div>
  );
};

export default MenuAppBar;
