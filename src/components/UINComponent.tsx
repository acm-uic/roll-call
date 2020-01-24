import React, { PureComponent, FormEvent } from 'react';
import { Redirect } from 'react-router-dom'

class UINComponent extends PureComponent<{}> {
    constructor(props: {}) {
      super(props);
      this.state = { value: '' };
      this.onChange = this.onChange.bind(this);
      this.add = this.add.bind(this);
    }
  
    add(e: FormEvent) {
      e.preventDefault();
        //getting the substring
        //@ts-ignore
        let UIN: string = (this.state.value);

        //TODO: here is the UIN store it into the database or put it into localstorage then submit with signature
        console.log( UIN ); 
        console.log( UIN.substring(6,15) ); 

        sessionStorage.setItem('UIN', UIN.substring(6,15) ) ;
        sessionStorage.setItem('cardValue', UIN ) ;

        window.location.href = "/signaturePage"

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
          <form onSubmit={this.add}>
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

                <input type='submit'
                //@ts-ignore
                    disabled={!this.state.value}
                    className="add-item__button"
                    value='next'
                />


          </form>
        </div>
      );
    }
}

export default UINComponent;
