import React, { FC, useState, FormEvent, ChangeEvent } from 'react';

interface UINProps {
  setUIN: Function;
}

const UINComponent: FC<UINProps> = (props: UINProps) => {
  const [value, setValue] = useState('');

  const add = (e: FormEvent) => {
    e.preventDefault();

    props.setUIN(JSON.stringify({ uin: value.substring(6, 15), reader: value }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
    </form>
  );
};

export default UINComponent;
