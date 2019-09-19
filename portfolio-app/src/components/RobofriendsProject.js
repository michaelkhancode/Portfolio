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
        <Chip style={{color:"black"}} size="medium" label="Redux" className={classes.chip}/>
      </Paper>
    </div>
  );
}

function RobofriendsProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >Friends Page</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://stormy-everglades-48369.herokuapp.com/"
            >
            <img 
            className="grow"
            width="600px"
            width="500px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/J3aGYtv.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>What Is It</h2>
            <p >
              A "friends" page to be used as a component in future applications. The user data is fetched from a random profile generator (a database in a real App), 
              the json is parsed, and profiles are displayed on the screen. Search results filter the profiles shown in real time.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>Redux used to manage state</li>
              <li>Asynchronous API calls</li>
              <li>Hiding and showing information upon state changes</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default RobofriendsProject;