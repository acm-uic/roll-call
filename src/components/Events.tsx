import React, { PureComponent } from 'react';
import Event from './Event';
import * as GCalApi from '../calendarImports/GCalApi'; 
import { GetEvents } from '../util/Events';
import { EventsConfig } from '../util/Config';
import { GetUserConfig } from '../util/UserConfig';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
    }

      //we are creating the options to be displayed
  renderOptions() {
      //@ts-ignore
    return this.state.events.items.map((ev, key) => {
      return (
        <div key={key}>
          <MenuItem
            value={ev.summary}
            primaryText={ev.summary} />
        </div>
      );
    });
  }

    render = () => {
        //render outer page frame here
        return (
            <div>
                <select value={this.currentVar.selectedValue} >
                    

                </select>


            </div>
        );
    }
}

export default Events;

// {(this.state.events && this.state.events.items)
//     ? 
//     <select>
//     this.state.events.items.map((ev, key) => (
//       (<Event key={key} ev={ev} />)) 
//     )
//     </select>
//     : (<></>)}