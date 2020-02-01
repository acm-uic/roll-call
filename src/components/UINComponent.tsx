import React, { FC, useState, FormEvent, ChangeEvent } from 'react';

const UINComponent: FC = (props: React.HTMLProps<HTMLInputElement>) => {
  const [value, setValue] = useState('');

  const add = (e: FormEvent) => {
    e.preventDefault();
    let UIN: string = value;

    //TODO: here is the UIN store it into the database or put it into LocalStorage then submit with signature
    console.log(UIN);
    console.log(UIN.substring(6, 15));

    sessionStorage.setItem('UIN', UIN.substring(6, 15));
    sessionStorage.setItem('cardValue', UIN);

    window.location.href = '/signaturePage';
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const divStyle = {
    margin: '20px'
  };

  return (
    <div className="add-item" style={divStyle}>
      <form onSubmit={add}>
        <input
          type="text"
          className="add-item__input"
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
        />

        <br />
        <br />

        <input type="submit" disabled={!value} className="add-item__button" value="next" />
      </form>
    </div>
  );
};

export default UINComponent;
