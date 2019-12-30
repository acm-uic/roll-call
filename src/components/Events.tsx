import React, { PureComponent } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi'; 
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../util/Config';
import { GetUserConfig } from '../util/UserConfig';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";


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
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



interface EventsState {
    events: GCalApi.Events | undefined;
}

class Events extends PureComponent<{}, EventsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            events: undefined
        };
    }
    componentDidMount() {
        this.update();
        setInterval(this.update, EventsConfig.UpdateInterval);
    }
    update = async () => {
        const calendarId = GetUserConfig({
            name: EventsConfig.IdsName
        });
        const apiKey = GetUserConfig({
            name: EventsConfig.ApiKeyName
        });
        if (calendarId && apiKey)
            this.setState({
                events: await GetEvents({ calendarId, apiKey })     
            });
    }
    render = () => {
        //render outer page frame here

        return (<>
     
     <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ACM Roll Call
          </Typography>
        </Toolbar>
      </AppBar>


    {(this.state.events && this.state.events.items)
    ? this.state.events.items.map((ev, key) =>
        (<Event key={key} ev={ev} />)) //render material card for each event
    : (<></>)}

    </React.Fragment>      



        </>);
    }
}

export default Events;

   
