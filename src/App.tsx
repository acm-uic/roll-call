/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Home from './pages/Home';


  //TODO: CURRENT TASK
  //1. set up api in local_storage --> coming form url?
    // example:  http://localhost:3000/?googleapikey=value1&googlecalendarids=value2
    // key1 is (apiKey) key2 is (calendarId)
  //2. get events to print out w/o any front end --> doesn't work? --> ask bharat & slack channel
  //3. connect printed event data to front end
  //4. if tempus example doesn't work try this --> https://www.npmjs.com/package/react-google-calendar-api

  // Next I'll be working on connecting the events to the shiny new home page 

const App: React.FC = () => {


    if (window.location.search.length !== 0) {
      const search = window.location.search.substring(1);
      const params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      Object.keys(params).forEach(key => {
        if (params[key].trim().length !== 0) {
          localStorage.setItem(key, decodeURIComponent(params[key]));
        }
      });
      window.location.href = '/';
    }

  return (
          <Home />
  );

}

export default App;
