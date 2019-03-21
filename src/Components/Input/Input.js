import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cssLabel: {
    "&$cssFocused": {
      color: "#ec0080"
    }
  },
  cssFocused: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#ec0080"
    }
  },
  notchedOutline: {}
});

const Input = props => {
  const { classes } = props;
  return (
    <div>
      <TextField
        id={props.id}
        label={props.label}
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        style={props.style}
      />
    </div>
  );
};

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
