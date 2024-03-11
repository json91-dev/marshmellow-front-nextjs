import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function DateSelect() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div>
      <DatePicker fixedHeight selected={startDate} onChange={(date: Date) => setStartDate(date)} />
    </div>
  );
}
