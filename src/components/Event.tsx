import React, { FC } from 'react';
import * as GCalApi from '../calendarImports/GCalApi'; 

interface EventProps {
    ev: GCalApi.Event;
};

const Event: FC<EventProps> = (props: EventProps) => {
    const { summary, location, start, end } = props.ev;
    return (
        <div>
            {summary ? summary : 'Busy'} | {start ? (start.dateTime ? start.dateTime : start.date) : <></>} | {end ? (end.dateTime ? end.dateTime : end.date) : <></>} | {location}
        </div>
    );
}

export default Event;
