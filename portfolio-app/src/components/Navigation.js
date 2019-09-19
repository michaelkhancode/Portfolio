import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Navigation({changePath}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div style={{marginBottom:"30px"}} className="contentWrapper">
        <div className="flexWrapper">
          <BottomNavigation
          style={{margin:"auto"}}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction onClick={()=>changePath("mainpage")}  label="About"/>
            <BottomNavigationAction onClick={()=>changePath("projects")}  label="Projects"/>
            <BottomNavigationAction onClick={()=>changePath("contact")} label="Contact"/>
        </BottomNavigation>

      </div>
    </div>
  );
}