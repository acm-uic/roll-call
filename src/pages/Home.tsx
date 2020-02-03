import React, { FC, useState, useEffect } from 'react';
import Events from '../components/Events';
import UINComponent from '../components/UINComponent';
import SignaturePage from '../components/signaturePage';

const Home: FC = () => {
  const [event, setEvent] = useState('');
  const [uin, setUIN] = useState('');
  const [sign, setSign] = useState('');

  useEffect(() => {
    if (event !== '' && uin !== '' && sign !== '') {
      // console.log('Event: ' + event);
      // console.log('UIN: ' + uin);
      // console.log('Sign: ' + sign);

      //------------------------------------------------------
      //making JSON object for post request
      let data = {
        chosenEvent: JSON.parse(event).id,
        EventName: JSON.parse(event).name,
        UIN: JSON.parse(uin).uin,
        signatureBase64: sign,
        cardValue: JSON.parse(uin).reader
      };

      fetch('http://localhost:8080/addEvent/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => console.log(data));
      // ------------------------------------------------------

      setUIN('');
      setSign('');
    }
  }, [event, uin, sign]);

  return (
    <>
      {event === '' ? (
        <Events setEvent={setEvent} />
      ) : (
        <>
          <div>
            You are signing up for {JSON.parse(event).name}
            {uin === '' ? (
              <>
                <p>Please scan your card</p>
                <UINComponent setUIN={setUIN} />
              </>
            ) : (
              <>
                <SignaturePage setSign={setSign} />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

// {JSON.parse(event).name}
// { JSON.parse(event).id }
