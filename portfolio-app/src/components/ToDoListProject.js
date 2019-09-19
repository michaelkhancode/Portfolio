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
            <Chip style={{color:"black"}} size="medium" label="jQuery" className={classes.chip}/>
            <Chip style={{color:"black"}} size="medium" label="Vanila CSS" className={classes.chip}/>
        </div>
      </Paper>
    </div>
  );
}

function ToDoListProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >To Do List</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://codepen.io/Mike-yoh/pen/OpWZmp"
            >
            <img 
            className="grow"
            width="600px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/DUDMDkj.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>How To Use</h2>
            <p >
              Use the + icon to add a new to-do item.
              <br/>
              Click on a listed to-do item to cross it off your list.
              <br/>
              Hover over a to-do item, and click on the garbage bin to delete the item.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>jQuery Event handling</li>
              <li>Font Awesome icons</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default ToDoListProject;