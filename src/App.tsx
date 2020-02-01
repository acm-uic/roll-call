/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Home from './pages/Home';
import SignaturePage from './pages/signaturePage';
import UINPage from './pages/UINPage';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

//TODO: CURRENT TASK
//1. set up api in local_storage --> coming form url?
// example:  http://localhost:3000/?googleapikey=value1&googlecalendarids=value2

// key1 is (apiKey) key2 is (calendarId)
//2. get events to print out w/o any front end --> doesn't work? --> ask bharat & slack channel
//3. connect printed event data to front end
//4. if tempus example doesn't work try this --> https://www.npmjs.com/package/react-google-calendar-api

// Next I'll be working on connecting the events to the shiny new home page
//need to use react lifecycle hooks to render the data --> use a class & updated w/ async method
//render material design to what's already there -->
//1) try rendering plain html w/ each event
//2) try rendering material cards
//3) try rendering shiny new home page

const App: React.FC = () => {
  if (window.location.search.length !== 0) {
    const search = window.location.search.substring(1);
    const params = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    Object.keys(params).forEach(key => {
      if (params[key].trim().length !== 0) {
        localStorage.setItem(key, decodeURIComponent(params[key]));
      }
    });
    window.location.href = '/';
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UINPage">UINPage</Link>
            </li>
            <li>
              <Link to="/signaturePage">signaturePage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/UINPage">
            <UINPage />
          </Route>
          <Route path="/signaturePage">
            <SignaturePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
