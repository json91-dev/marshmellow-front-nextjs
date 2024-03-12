import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import style from './dateSelect.module.scss';
export default function DateSelect() {
  const [birthdate, setBirthdate] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/[^0-9]/g, ''); // 숫자가 아닌 문자는 제거
    if (value.length > 4) {
      value = value.slice(0, 4) + '.' + value.slice(4);
    }
    if (value.length > 7) {
      value = value.slice(0, 7) + '.' + value.slice(7);
    }
    setBirthdate(value);
  };

  useEffect(() => {}, []);

  return (
    <div className={style.container}>
      <input
        className={style.textInput}
        value={birthdate}
        onChange={handleTextChange}
        maxLength={10}
        placeholder="YYYY.MM.DD"
      />
    </div>
  );
}
