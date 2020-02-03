import React, { FC, useState, useEffect } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi';
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../calendarImports/Config';
import { GetUserConfig } from '../util/UserConfig';
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
  setEvent: Function;
}

const Events: FC<EventsProps> = (props: EventsProps) => {
  const [events, setEvents] = useState<GCalApi.Events>();

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
  }, []);

  const { classes } = props;

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container direction="row" justify="center" spacing={3}>
          {events?.items?.map((ev, key) => (
            <Event key={key} ev={ev} setEvent={props.setEvent} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default withStyles(styles)(Events);
