import React, { FC } from 'react';
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

  //FIXME: why is this getting called even though button isn't clicked

const Event: FC<EventProps> = (props: EventProps) => {


    const { summary, location, start, end } = props.ev;
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const classes = useStyles();
    return (




    <React.Fragment>
      <CssBaseline />

      {/* End hero unit */}
      {cards.map(card => (
        <Grid item xs sm md lg key={card}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cardMedia}
              image="https://avatars3.githubusercontent.com/u/20177515?s=280&v=4"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">

                {summary ? summary : 'Busy'}

              </Typography>
              <Typography>

                <div>
                  {start ? (start.dateTime ? start.dateTime : start.date) : <></>} | {end ? (end.dateTime ? end.dateTime : end.date) : <></>} | {location}
                </div>

              </Typography>
            </CardContent>
            <CardActions>
{/* 
              <Button size="large" color="primary" component={Link} to={'/UINPage'} >
                Start Event Sign In
              </Button> */}
 
            </CardActions>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default Event;



