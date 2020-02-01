import React, { FC, /*useState,*/ useEffect } from 'react';
import * as GCalApi from '../calendarImports/GCalApi';

interface EventProps {
  ev: GCalApi.Event;
}

// interface UserData {
//   UIN: string;
//   chosenEvent: string;
//   signatureBase64: string;
// }

const Events: FC<EventProps> = () => {
  // const [events, setEvents] = useState<GCalApi.Events | undefined>(undefined);
  // const [mongoData, setMongoData] = useState<GCalApi.mongoSchema>([]);

  useEffect(() => {
    fetch('http://localhost:8080/allEvents/').then(response => {
      console.log(response.json());
    });
  }, []);

  return <></>;
};

export default Events;
