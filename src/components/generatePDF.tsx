import React from 'react';

class generatePDF extends React.Component {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: {}){
        super(props);
    }
    componentDidMount() {
        
        fetch("http://localhost:8080/allEvents/").then(response => {
          
          console.log(response.json());          

        });
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default generatePDF;