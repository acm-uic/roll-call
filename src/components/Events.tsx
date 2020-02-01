import React, { FC, useState, useEffect } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi';
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../calendarImports/Config';
import { GetUserConfig } from '../util/UserConfig';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = ({ spacing }: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: spacing(8),
      paddingBottom: spacing(8)
    }
  });

interface EventsState {
  events: GCalApi.Events | undefined;
}
interface EventsProps {
  classes: {
    cardGrid: string;
  };
}

const Events: FC<EventsProps> = props => {
  const [events, setEvents] = useState<GCalApi.Events | undefined>(undefined);

  useEffect(() => {
    const update = async () => {
      const calendarId = GetUserConfig({
        name: EventsConfig.IdsName
      });
      const apiKey = GetUserConfig({
        name: EventsConfig.ApiKeyName
      });
      if (calendarId && apiKey) setEvents(await GetEvents({ calendarId, apiKey }));
    };
    update();
    const updateInterval = setInterval(update, EventsConfig.UpdateInterval);
    return () => {
      clearInterval(updateInterval);
    };
  });

  const { classes } = props;

  return (
    <>
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
          {events?.items?.map((ev, key) => (
            <Event key={key} ev={ev} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default withStyles(styles)(Events);
