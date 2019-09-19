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

function YelpCampProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >Weather App</h1>
          <div className="projectImage">     
            <a
            target="_blank" 
            href="https://pure-beyond-88300.herokuapp.com/"
            >
            <img 
            className="grow"
            width="600px"
            style ={{borderStyle: "inset"}}
            src="https://i.imgur.com/mKk5IY6.png" 
            alt=""/>
            </a>
          </div>
          <div>
            <h1>Basics:</h1>
            <h2>How To Open</h2>
            <p>Click on the image above, the app will load in a new tab.</p>
            <h2>How To Use</h2>
            <p >
              Allow the App to use your location or, enter a location and recieve the 5-day forcast.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>HTML5 Geolocation (recieving longatude and latitude from the browser and passing that data into the API)</li>
              <li>Weather data recieved from OpenWeatherMap API</li>
              <li>Location data sourced from Algolia Places API</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default YelpCampProject;