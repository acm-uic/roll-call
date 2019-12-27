import React, { FC } from 'react';
import * as GCalApi from '../calendarImports/GCalApi'; 

interface EventProps {
    ev: GCalApi.Event;
};

const Event: FC<EventProps> = (props: EventProps) => {
    const { summary, location, start, end } = props.ev;
    return (
        //render material card for each event
        <div style={{color: "red"}}>  
            {summary ? summary : 'Busy'} | {start ? (start.dateTime ? start.dateTime : start.date) : <></>} | {end ? (end.dateTime ? end.dateTime : end.date) : <></>} | {location}
            <hr></hr>
        </div>
    );
}

export default Event;
