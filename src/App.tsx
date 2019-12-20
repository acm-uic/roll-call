import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(3,2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },    
  }),
);


const App: React.FC = () => {

  const classes = useStyles();

  return (

    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ACM Roll Call
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={12}>
            
        </Grid>

        <Grid item xs={12}>
          {/* <Paper className={classes.paper}><h3>ACM Roll Call</h3></Paper> */}

          <Paper className={classes.paper}>

            <Typography variant='h5' component='h3'>
              ACM Event Title
            </Typography>
            <Typography component='p'>
              ACM event details: Paper can be used to build surface or other
              elements for your application.
            </Typography>

            <br />

            <Button variant='contained' color='primary'>
              Start Event
            </Button>

            <br />
            <br />

          </Paper>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;
