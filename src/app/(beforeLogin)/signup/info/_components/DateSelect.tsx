import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './dateSelect.module.scss';
import { ko } from 'date-fns/locale';
export default function DateSelect() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {}, []);
  return (
    <div className={style.container}>
      <DatePicker
        fixedHeight
        selected={startDate}
        locale={ko}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="yyyy년 MM월 dd일"
      />
    </div>
  );
}
