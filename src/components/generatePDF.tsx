import React, { PureComponent } from 'react';
import * as GCalApi from '../calendarImports/GCalApi'; 

interface EventsState {
    events: GCalApi.Events | undefined;
    mongoData : GCalApi.mongoSchema;
}

class generatePDF extends PureComponent<{}, EventsState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            events: undefined,
            mongoData: []
        };
    }

    componentDidMount() {
        
        fetch("http://localhost:8080/allEvents/").then(response => {
          
          console.log(response.json());          

        });
    }
    render(){
        return(
            <div>
                <p>girgihi</p>
            </div>
        )
    }
}

export default generatePDF;