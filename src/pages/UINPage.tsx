import React, { FC } from 'react';
import UINComponent from '../components/UINComponent';

const UINPage: FC = () => {
  if (window.location.search.length !== 0) {
    const search = window.location.search.substring(1);
    const params = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    Object.keys(params).forEach(key => {
      if (params[key].trim().length !== 0) {
        localStorage.setItem(key, decodeURIComponent(params[key]));
      }
    });
    window.location.href = '/UINPage/';
  }

  return (
    <>
      <h2>Sign into event</h2>
      <h5>Tap on the UIN textfield and Scan your card. Sign your signature and hit submit</h5>
      <UINComponent />
    </>
  );
};

export default UINPage;
