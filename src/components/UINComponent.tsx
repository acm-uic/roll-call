import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class UINComponent extends PureComponent<{}> {
    constructor(props: {}) {
      super(props);
      this.state = { value: '' };
      this.onChange = this.onChange.bind(this);
      this.add = this.add.bind(this);
    }
  
    add() {
        //getting the substring
        //@ts-ignore
        let UIN: string = (this.state.value);

        //TODO: here is the UIN store it into the database or put it into localstorage then submit with signature
        console.log( UIN.substring(4,12) ); 
        
        localStorage.setItem('UIN', UIN.substring(4,12));
    }
  
    //@ts-ignore
    onChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {

        const divStyle = {
            margin: "20px"
        };

      return (
        <div className="add-item" style={divStyle}>
          <input
            type="text"
            className="add-item__input"
            //@ts-ignore
            value={this.state.value}
            onChange={this.onChange}
            //@ts-ignore
            placeholder={this.props.placeholder}
          />

            <br/><br/>

            <Link to="/signaturePage">

                <button
                //@ts-ignore
                    disabled={!this.state.value}
                    className="add-item__button"
                    onClick={this.add}
                    
                >
                    Next
                </button>

            </Link>
        </div>
      );
    }
}

export default UINComponent;