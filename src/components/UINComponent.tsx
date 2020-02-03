import React, { FC, useState, FormEvent, ChangeEvent } from 'react';

interface UINProps {
  setUIN: Function;
}

const UINComponent: FC<UINProps> = (props: UINProps) => {
  const [value, setValue] = useState('');

  const add = (e: FormEvent) => {
    e.preventDefault();

    //TODO: here is the UIN store it into the database or put it into LocalStorage then submit with signature

    sessionStorage.setItem('UIN', value.substring(6, 15));
    sessionStorage.setItem('cardValue', value);

    props.setUIN(JSON.stringify({ uin: value.substring(6, 15), reader: value }));
    // window.location.href = '/signaturePage';
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const divStyle = {
    margin: '20px'
  };

  return (
    <form onSubmit={add}>
      <input
        type="text"
        className="add-item__input"
        value={value}
        onChange={onChange}
        placeholder="Swipe your card"
      />
      {/* <input type="submit" disabled={!value} className="add-item__button" value="next" /> */}
    </form>
  );
};

export default UINComponent;
