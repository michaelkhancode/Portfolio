import React from 'react';
import "./RGBProject.css";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3,2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));


const Chips = () => {
  const classes = useStyles();

  return (
    <div style={{display:"flex", flexWrap:"wrap"}} className={classes.root}>
      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Front-End
        </div>
        <Chip style={{color:"black"}} size="medium" label="React.js" className={classes.chip}/>
        <Chip style={{color:"black"}} size="medium" label="Material-UI" className={classes.chip}/>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Back-End
        </div>
        <div>
          <Chip style={{color:"black"}} size="medium" label="Node.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="Express.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="Knex.js" className={classes.chip}/>
        </div>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Database
        </div>
        <Chip style={{color:"black"}} size="medium" label="PostgresQL" className={classes.chip}/>
      </Paper>
    </div>
  );
}

function RGBProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >RGB Color Game</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://mysterious-thicket-23358.herokuapp.com/"
            >
            <img 
            className="grow"
            width="600px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/0hPjVR7.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>How To Play</h2>
            <p >
              Click on the box that you think matches the RGB color code in the header panel.
              A single game is 5 rounds, and your score at each difficulty is recorded on your profile page.
              Check out the leaderboard page to see the top times at each difficulty.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>Input validation on client side, user authentication on the server side</li>
              <li>Password hashing before inserting to database</li>
              <li>7 stateful components</li>
              <li>Numerous instantiations of react life cycle hooks</li>
              <li>Numerous instantiations asynchronicity</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default RGBProject;