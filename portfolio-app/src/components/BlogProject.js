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
        <Chip style={{color:"black"}} size="medium" label="Vanila Javascript" className={classes.chip}/>
        <Chip style={{color:"black"}} size="medium" label="Semantic-UI" className={classes.chip}/>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Back-End
        </div>
        <div>
          <Chip style={{color:"black"}} size="medium" label="Node.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="Express.js" className={classes.chip}/>
          <Chip style={{color:"black"}} size="medium" label="mongoose" className={classes.chip}/>
        </div>
      </Paper>

      <Paper style={{display:"flex-row", flexDirection:"column"}} className={classes.root}>
        <div style={{margin:"auto"}}>
          Database
        </div>
        <Chip style={{color:"black"}} size="medium" label="mongodb" className={classes.chip}/>
      </Paper>
    </div>
  );
}

function BlogProject() {
  return (
    <div className="contentWrapper">
      <div className="flexWrapper" >
          <h1 >A Public Blog Site</h1>
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
            <h2>What Is It</h2>
            <p >
              A blog website open to the general public.
              Anyone can create, edit, or delete a blog post.
            </p>
          </div>
          <div>
          <h1>Technical Info:</h1>
            {Chips()}
            <ul>
              <li>RESTfully routed</li>
              <li>Non relational database</li>
            </ul>
          </div>
      </div>
    </div>
      
  );
}

export default BlogProject;