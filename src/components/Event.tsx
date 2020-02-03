import React, { FC } from 'react';
import * as GCalApi from '../calendarImports/GCalApi';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';

interface EventProps {
  ev: GCalApi.Event;
  setEvent: Function;
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
}));

const cards = [1];

//FIXME: why is this getting called even though button isn't clicked

const Event: FC<EventProps> = (props: EventProps) => {
  const { summary, location, start, end, id } = props.ev;
  const classes = useStyles();

  const handleClick = () => {
    console.log(id);
    // adding evenID in sessionStorage
    if (id !== undefined) sessionStorage.setItem('chosenEvent', id);

    if (summary !== undefined) sessionStorage.setItem('EventName', summary);

    props.setEvent(JSON.stringify({ id: id, name: summary }));

    // window.location.href = '/UINPage';
  };

  const startDate = new Date(`${start?.date || start?.dateTime}`);
  const endDate = new Date(`${end?.date || end?.dateTime}`);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  return (
    <>
      {cards.map(card => (
        <Grid item xs sm md lg key={card}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {summary ? summary : 'Busy'}
              </Typography>
              <Typography>
                {`${dateFormatter.format(startDate)} - ${dateFormatter.format(endDate)}`}
              </Typography>
              <Typography>
                {location ? (
                  <>
                    <RoomIcon /> {location}
                  </>
                ) : (
                  <></>
                )}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={handleClick}>
                Start Event
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Event;
