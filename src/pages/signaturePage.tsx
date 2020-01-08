// ----------------------------- 

import React, { Component } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import styles from './styles.module.css'

class signaturePage extends Component {
  state = {trimmedDataURL: null}
  sigPad = {};
  clear = () => {
      //@ts-ignore
      this.sigPad.clear();
  }
  trim = () => {
    //@ts-ignore
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')})

      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let signatureBase64: string = (this.sigPad.getTrimmedCanvas().toDataURL('image/png'));

      //TODO: substring to store in database for base64 of signature --> signatureBase64.substring(22, (signatureBase64).length)
      signatureBase64 = signatureBase64.substring(22, (signatureBase64).length);
      // sessionStorage.setItem('signatureBase64', signatureBase64.substring(22, (signatureBase64).length) );

      //------------------------------------------------------
      //making JSON object for post request
      let databody = {
        "chosenEvent": sessionStorage.getItem('chosenEvent'),
        "UIN": sessionStorage.getItem('UIN'),
        "signatureBase64": signatureBase64
      }
      
      fetch("http://localhost:8080/addEvent/", {
              method: 'POST',
              body: JSON.stringify(databody),
              headers: {
                  'Content-Type': 'application/json'
              },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      //------------------------------------------------------


      this.redirect();


      //@ts-ignore
      // console.log(signatureBase64.substring(22, (signatureBase64).length) );
  }

  redirect = () => {

    // eslint-disable-next-line no-restricted-globals
    let r = confirm("Sign in successful. Click ok for next user.");
    // eslint-disable-next-line eqeqeq
    if (r == true) {
      window.location.href = '/UINPage';
    }

  }

  render () {

    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignatureCanvas canvasProps={{className: styles.sigPad}}
          //@ts-ignore
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.trim}>
          Complete Sign In
        </button>
      </div>


    </div>
  }
}

export default signaturePage;



