import React, { PureComponent } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi'; 
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../util/Config';
import { GetUserConfig } from '../util/UserConfig';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface EventsState {
    events: GCalApi.Events | undefined;
    mongoData : GCalApi.mongoSchema;
}

interface EventProps {
  ev: GCalApi.Event;
};

class Events extends PureComponent<{}, EventsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            events: undefined,
            mongoData: []
        };
    }
    componentDidMount() {
        this.update();
        setInterval(this.update, EventsConfig.UpdateInterval);

        // fetch("http://localhost:8080/allEvents/").then(response => {
          
        //   console.log(response.json());          

        // });

        // fetch('https://api.mydomain.com')
        // .then(response => response.json())
        // .then(data => this.setState({ this.state.mongoData }));


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

     //sets the initial chosen event since the default dropdown value is the first element
     if((this.state.events && this.state.events.items)){
        //@ts-ignore
        sessionStorage.setItem('chosenEvent', this.state.events.items[0].id )
     }

    }

   //this will called when button to start the event is chosen
   startEvent = () => {
    // TODO: this is the eventID that should be stored in the database
    console.log( sessionStorage.getItem('chosenEvent') );

    // the eventID should be passed into query string when next button redirects to UINPage. 
    // use that to evenID to nest user UINs & signatures 
    window.location.href = "/UINPage/?eventID=" + sessionStorage.getItem('chosenEvent');

   }

    render = () => {
        //render outer page frame here
        // const { mongoData } = this.state;

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

      <br/>

      <generatePDF />


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
          {/* This dropdown lets you choose ACM events which are fetched from google cal api */}
          <select name="name" id="id" onChange={(e) => sessionStorage.setItem('chosenEvent',  e.target.value) } >
              { (this.state.events && this.state.events.items) ?  this.state.events.items.map((ev, key) => <option key={key} value={ev.id}> {ev.summary} </option>) :  (<></>) }
          </select>

          <button onClick={this.startEvent} >Start Event</button>

        </div>

      <h1 style={{textAlign: "center"}} >Events Feed</h1>
      
    {(this.state.events && this.state.events.items)
    ? this.state.events.items.map((ev, key) =>
        (<Event key={key} ev={ev} />)) //render material card for each event
    : (<></>)}

    </React.Fragment>      

        </>);
    }
}

export default Events;