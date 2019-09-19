import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div >
        <div >
            <Card style={{margin:"auto"}} className={classes.card}>
                {/* <CardContent> */}
                    <div style={{display:"flex", flexDirection:"column", margin:"auto"}}>
                        <div 
                        style={{margin:"20px"}}
                        >
                            Email: 
                            <a target="_blank" href="mailto:yohannes.mike95@gmail.com">yohannes.mike95@gmail.com</a>
                        </div>
                        <div style={{margin:"20px"}}>
                            Linkedin: 
                            <a target="_blank" href="https://www.linkedin.com/in/michael-yohannes-2409b413a/">Michael Yohannes</a>
                        </div>
                    </div>
                {/* </CardContent> */}
            </Card>
        </div>
    </div>
  );
}