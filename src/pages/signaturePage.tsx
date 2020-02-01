// -----------------------------

import React, { FC } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styles from './styles.module.css';

const SignaturePad: FC = () => {
  let sigPad: SignatureCanvas | null = null;
  const clear = () => {
    sigPad?.clear();
  };
  const trim = () => {
    let signatureBase64: string | undefined = sigPad?.getTrimmedCanvas().toDataURL('image/png');

    //TODO: substring to store in database for base64 of signature --> signatureBase64.substring(22, (signatureBase64).length)
    signatureBase64 = signatureBase64?.substring(22, signatureBase64.length);
    // sessionStorage.setItem('signatureBase64', signatureBase64.substring(22, (signatureBase64).length) );

    //------------------------------------------------------
    //making JSON object for post request
    let dataBody = {
      chosenEvent: sessionStorage.getItem('chosenEvent'),
      EventName: sessionStorage.getItem('EventName'),
      UIN: sessionStorage.getItem('UIN'),
      signatureBase64: signatureBase64,
      cardValue: sessionStorage.getItem('cardValue')
    };

    fetch('http://localhost:8080/addEvent/', {
      method: 'POST',
      body: JSON.stringify(dataBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
    //------------------------------------------------------

    redirect();
  };

  const redirect = () => {
    let r = window.confirm('Sign in successful. Click ok for next user.');
    if (r === true) {
      window.location.href = '/UINPage';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignatureCanvas
          canvasProps={{ className: styles.sigPad }}
          ref={ref => {
            sigPad = ref;
          }}
        />
      </div>
      <div>
        <button className={styles.buttons} onClick={clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={trim}>
          Complete Sign In
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
