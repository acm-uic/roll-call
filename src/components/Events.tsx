import React, { PureComponent } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi'; 
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../util/Config';
import { GetUserConfig } from '../util/UserConfig';

interface EventsState {
    events: GCalApi.Events | undefined;
}

interface EventProps {
  ev: GCalApi.Event;
};

class Events extends PureComponent<{}, EventsState> {
    currentVar: { selectedValue: any; };
    constructor(props: {}) {
        super(props);
        this.state = {
            events: undefined
        };

        this.currentVar = {
            selectedValue: ""
        }
    }
    componentDidMount() {
        this.update();
        setInterval(this.update, EventsConfig.UpdateInterval);
    }



    update = async () => {

        const calendarId = GetUserConfig({
            name: EventsConfig.IdsName
        });
        const apiKey = GetUserConfig({
            name: EventsConfig.ApiKeyName
        });
        if (calendarId && apiKey)
            this.setState({
                events: await GetEvents({ calendarId, apiKey })     
            });

        //sets the initial chosen event since the default dropdown value is the first element
        if((this.state.events && this.state.events.items)){
            //@ts-ignore
            sessionStorage.setItem('chosenEvent', this.state.events.items[0].summary )
        }

    }


    //this will called when button to start the event is chosen
    startEvent = () => {
        console.log( sessionStorage.getItem('chosenEvent') )
        // the evenID should be passed into query string when next button redirects to UINPage. 
        // use that to evenID to nest user UINs & signatures 
    }

    render = () => {
        //render outer page frame here
        return (
            <div>
                {/* This dropdown lets you choose ACM events which are fetched from google cal api */}
                <select name="name" id="id" onChange={(e) => sessionStorage.setItem('chosenEvent',  e.target.value) } >
                    { (this.state.events && this.state.events.items) ?  this.state.events.items.map((ev, key) => <option key={key} value={ev.id}> {ev.summary} </option>) :  (<></>) }
                </select>

                <button onClick={this.startEvent} >Next</button>

            </div>
        );
    }


}

export default Events;
