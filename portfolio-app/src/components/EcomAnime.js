import React from "react";
import "./EcomAnime.css";
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
        <Chip
          style={{ color: "black" }}
          size="medium"
          label="React.js"
          className={classes.chip}
        />
        <Chip
          style={{ color: "black" }}
          size="medium"
          label="Redux"
          className={classes.chip}
        />
        <Chip
          style={{ color: "black" }}
          size="medium"
          label="react-router"
          className={classes.chip}
        />
        <Chip
          style={{ color: "black" }}
          size="medium"
          label="react-bootstrap"
          className={classes.chip}
        />
      </Paper>

      <Paper
        style={{ display: "flex-row", flexDirection: "column" }}
        className={classes.root}
      >
        <div style={{ margin: "auto" }}>Back-End</div>
        <div>
          <Chip
            style={{ color: "black" }}
            size="medium"
            label="Node.js"
            className={classes.chip}
          />
          <Chip
            style={{ color: "black" }}
            size="medium"
            label="Express.js"
            className={classes.chip}
          />
          <Chip
            style={{ color: "black" }}
            size="medium"
            label="mongoose.js"
            className={classes.chip}
          />
        </div>
      </Paper>

      <Paper
        style={{ display: "flex-row", flexDirection: "column" }}
        className={classes.root}
      >
        <div style={{ margin: "auto" }}>Database</div>
        <Chip
          style={{ color: "black" }}
          size="medium"
          label="MongoDB"
          className={classes.chip}
        />
      </Paper>
    </div>
  );
};

function EcomAnime() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper">
        <h1>E-commerce Anime Mugs Store</h1>
        <div className="projectImage">
          <a target="_blank" href="https://ecom-animemugs.herokuapp.com/">
            <img
              className="grow"
              width="600px"
              style={{ borderStyle: "inset" }}
              src="../images/ecomanime.PNG"
              alt=""
            />
          </a>
        </div>
        <div>
          <h1>Basics:</h1>
          <h2>How To Open</h2>
          <p>Click on the image above, the app will load in a new tab.</p>
          <h2>How To Use</h2>
          <p>
            Make an account to purchase an anime mug. Sandbox paypal
            credentials:
            <br />
            <br />
            email: sb-r43vyt6130542@personal.example.com
            <br />
            password: W+6o@kDJ
            <br />
            <br />
            **Note this project is active and still in development bugs may be
            present**
          </p>
        </div>
        <div>
          <h1>Technical Info:</h1>
          {Chips()}
          <ul>
            <li>JSON web tokens (JWT) for route protection</li>
            <li>REST API</li>
            <li>Paypal integration</li>
            <li>Password Hashing</li>
            <li>Local storage utilization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EcomAnime;
