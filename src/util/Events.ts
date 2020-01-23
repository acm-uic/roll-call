import { EventsConfig } from '../calendarImports/Config';
import * as GCalApi from '../calendarImports/GCalApi'; 

interface GetEventsParams {
    calendarId: string;
    apiKey: string;
    maxResults?: number;
}

//how does localstorge object get retrived here? go to where it calls GetEvents
export const GetEvents = async ({ calendarId, apiKey, maxResults }: GetEventsParams): Promise<GCalApi.Events> => {
    return new Promise((resolve, reject) => {
        if (!maxResults)
            maxResults = 10;
        fetch(`${EventsConfig.ApiHost}/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${(new Date()).toISOString()}&maxResults=${maxResults}`)
            .then(res => resolve(res.json()))
            .catch(reject);
    });
}

// http://localhost:3000/?calendarId=5v13klqet0aeeerag46thp4b7g@group.calendar.google.com&apiKey=AIzaSyAf4w5K2rORWzhfMEQwDDN5rewTEwfD_SU
