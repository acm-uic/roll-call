import React, { FC, useState, useEffect } from 'react';
import Events from '../components/Events';
import { stringify } from 'querystring';
import UINComponent from '../components/UINComponent';
import SignaturePage from '../components/signaturePage';

const Home: FC = () => {
  const [event, setEvent] = useState('');
  const [uin, setUIN] = useState('');
  const [sign, setSign] = useState('');

  useEffect(() => {
    if (event !== '' && uin !== '' && sign !== '') {
      console.log('Event: ' + event);
      console.log('UIN: ' + uin);
      console.log('Sign: ' + sign);

      setEvent('');
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
            {uin === '' ? <UINComponent setUIN={setUIN} /> : <SignaturePage setSign={setSign} />}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

// {JSON.parse(event).name}
// { JSON.parse(event).id }
