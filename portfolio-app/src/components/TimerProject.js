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
        <div>
        <Chip style={{color:"black"}} size="medium" label="React.js" className={classes.chip}/>
        <Chip style={{color:"black"}} size="medium" label="Material-UI" className={classes.chip}/>
        </div>
      </Paper>
    </div>
  );
}

function TimerProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >Stopwatch/Countdown</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://salty-plains-57078.herokuapp.com/"
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
            <h2>What is it</h2>
            <p >
              A useful stopwatch and countdown component, to be used in other apps.
              Both have been used in the RGB color game.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>Both stateful components</li>
              <li>Asychronous javascript functions</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default TimerProject;