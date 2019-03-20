import React from "react";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

const CampaignDividers = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Conferencia 1" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="ROA" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Correteo de Pedidos" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Prospectación" />
        </ListItem>
      </List>
    </div>
  );
};

export default CampaignDividers;
