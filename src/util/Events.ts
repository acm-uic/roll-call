import { EventsConfig } from '../calendarImports/Config';
import * as GCalApi from '../calendarImports/GCalApi';

interface GetEventsParams {
  calendarId: string;
  apiKey: string;
  maxResults?: number;
}

//how does localstorge object get retrived here? go to where it calls GetEvents
export const GetEvents = async ({
  calendarId,
  apiKey,
  maxResults
}: GetEventsParams): Promise<GCalApi.Events> => {
  return new Promise((resolve, reject) => {
    if (!maxResults) maxResults = 10;
    fetch(
      `${
      EventsConfig.ApiHost
      }/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${new Date().toISOString()}&maxResults=${maxResults}`
    )
      .then(res => res.json())
      .then((json) => resolve({
        ...json,
        items: json.items.sort((ev1: GCalApi.Event, ev2: GCalApi.Event) => +new Date(`${ev1.start?.date || ev1.start?.dateTime}`) - +new Date(`${ev2.start?.date || ev2.start?.dateTime}`))
      } as GCalApi.Events))
      .catch(reject);
  });
};
