import React from 'react';
import * as GCalApi from '../calendarImports/GCalApi'; 
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'

interface EventProps {
    ev: GCalApi.Event;
};


const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const cards = [1];



//FIXME: React.Component
class TestEvent extends React.Component {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: {}){
        super(props);
    }

    render(){
        return(
            <div>




            </div>
        )
    }
}

export default TestEvent;