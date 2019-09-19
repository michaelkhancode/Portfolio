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

function PortfolioProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1>This Website</h1>
          <div className="projectImage">     
            <img 
            className="grow"
            width="500px"
            height="450px"
            style ={{borderStyle: "inset"}}
            src="https://media.licdn.com/dms/image/C4D03AQEHiT86U6W2xw/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=xHcUhH0gRY7V-QBXEi4CS8qidfI0--TmYCL9_l93bWA" 
            alt=""/>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>100% Responsive to accomidate viewports of any size</li>
              <li>Simple routing handled entirly on the front end</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default PortfolioProject;