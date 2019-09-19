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
        <Chip style={{color:"black"}} size="medium" label="tachyons" className={classes.chip}/>        
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

function FaceScannerProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >Face Scanner</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://damp-peak-18020.herokuapp.com/" 
            >
            <img 
            className="grow"
            width="600px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/ilEnO5M.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>How To Use</h2>
            <p >
              Paste a valid web link (starting with http or https) that contains any number of human faces,
              and a facial recognition box will be drawn around it. 
              <br/>
              Below are some valid web links to use...
              <br/>
              <br/>
              <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcDootGHEHmA-x1WsE2uAIS9ELmnqDQjef4vUKe5VPdgkLfdCEw">Monkey D. Luffy</a>
              <br/>
              <br/>
              <a target="_blank"  href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aFMHRqrvjqDxfT1ccUu1nPHOF7i_XRA1zWz2MkYZ-MvGbmAc">Graduating McMaster Students</a>
              <br/>
              <br/>
              <a target="_blank"  href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_b9JM-OpbNFd6CUUYT0IEjXU4ii3PK0RK4X5n7h34lLV3l5l56w">Elon Musk</a>
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>Machine Learning API with JSON parsing</li>
              <li>Password hashing before inserting to database</li>
              <li>Signin and Register Page</li>
              <li>Advanced CSS positioning based on API's returned facial coordinates</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default FaceScannerProject;