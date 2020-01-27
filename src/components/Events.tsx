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
import { withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles/createMuiTheme';


/* eslint-disable @typescript-eslint/no-unused-vars */
const styles = ({ palette, spacing }: Theme) => createStyles({
  cardGrid: {
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
  }
});

/* eslint-disable @typescript-eslint/no-unused-vars */
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface EventsState {
  events: GCalApi.Events | undefined;
}

class Events extends PureComponent<{
  classes: {
    cardGrid: string;
  };
}, EventsState> {
  constructor(props: {
    classes: {
      cardGrid: string;
    }
  }) {
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
    const { classes } = this.props;

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

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            {(this.state.events && this.state.events.items)
              ? this.state.events.items.map((ev, key) =>
                (<Event key={key} ev={ev} />)) //render material card for each event
              : (<></>)}
          </Grid>
        </Container>
      </React.Fragment>
    </>);
  }
}

export default withStyles(styles)(Events);


