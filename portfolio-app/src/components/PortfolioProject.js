import React from "react";
import "./RGBProject.css";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Chips = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className={classes.root}>
      <Paper
        style={{ display: "flex-row", flexDirection: "column" }}
        className={classes.root}
      >
        <div style={{ margin: "auto" }}>Front-End</div>
        <div>
          <Chip
            style={{ color: "black" }}
            size="medium"
            label="React.js"
            className={classes.chip}
          />
          <Chip
            style={{ color: "black" }}
            size="medium"
            label="Material-UI"
            className={classes.chip}
          />
        </div>
      </Paper>
    </div>
  );
};

function PortfolioProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper">
        <h1>This Website</h1>
        <div className="projectImage">
          <img
            className="grow"
            width="auto"
            height="450px"
            style={{ borderStyle: "inset" }}
            src="../images/portf.PNG"
            alt=""
          />
        </div>
        <div>
          <h1>Technical Info:</h1>
          {Chips()}
          <ul>
            <li>100% Responsive to accommodate viewports of any size</li>
            <li>Simple routing handled entirely on the front end</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
