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
            <Chip style={{color:"black"}} size="medium" label="Bootstrap" className={classes.chip}/>
        </div>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Back-End
        </div>
        <div>
          <Chip style={{color:"black"}} size="medium" label="Node.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="Express.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="Mongoose" className={classes.chip}/>
        </div>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Database
        </div>
        <Chip style={{color:"black"}} size="medium" label="Mongodb" className={classes.chip}/>
      </Paper>
    </div>
  );
}

function YelpCampProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >Yelp For Campers</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="http://limitless-citadel-41540.herokuapp.com/"
            >
            <img 
            className="grow"
            width="600px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/JPdi6Q6.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>What is It</h2>
            <p >
              A review site for campers. 
              If users dont have an account, they will only be able to view camp grounds
              Registered users can post new camp grounds, as well as leave comments on other camp grounds.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>User authentication as well as user authorization</li>
              <li>Password hashing before inserting to database</li>
              <li>RESTfully routed</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default YelpCampProject;