import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RGBProject from "./RGBProject";
import FaceScannerProject from "./FaceScannerProject";
import PortfolioProject from "./PortfolioProject";
import YelpCampProject from "./YelpCampProject";
import WeatherProject from "./WeatherProject";
import QuoteGenProject from "./QuoteGenProject";
import ToDoListProject from "./ToDoListProject";
import HaberTributePage from "./HaberTributeProject";
import BlogProject from "./BlogProject";
import RobofriendsProject from "./RobofriendsProject";
import TimerProject from "./TimerProject";
import EcomAnime from "./EcomAnime";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Ecommerce Store" {...a11yProps(0)} />
            <Tab label="RGB Color Game" {...a11yProps(1)} />
            <Tab label="Face Scanner" {...a11yProps(2)} />
            {/* <Tab label="Yelp For Campers" {...a11yProps(2)} /> */}
            <Tab label="This Website" {...a11yProps(3)} />
            <Tab label="Weather App" {...a11yProps(4)} />
            <Tab label="Inspirational Quote Generator" {...a11yProps(5)} />
            <Tab label="To Do List" {...a11yProps(6)} />
            <Tab label="Haber Bio Page" {...a11yProps(7)} />
            {/* <Tab label="Public Blog Page" {...a11yProps(8)} /> */}
            <Tab label="Friends Page" {...a11yProps(8)} />
            <Tab label="Stopwatch/Countdown" {...a11yProps(9)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <EcomAnime />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RGBProject />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FaceScannerProject />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          <YelpCampProject />
        </TabPanel> */}
        <TabPanel value={value} index={3}>
          <PortfolioProject />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <WeatherProject />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <QuoteGenProject />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <ToDoListProject />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <HaberTributePage />
        </TabPanel>
        {/* <TabPanel value={value} index={8}>
          <BlogProject />
        </TabPanel> */}
        <TabPanel value={value} index={8}>
          <RobofriendsProject />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <TimerProject />
        </TabPanel>
      </div>
    </div>
  );
}
