'use client';
import style from './missionCalendar.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getCalendarData } from '@/utils/utils';
import dayjs from 'dayjs';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export default function MissionCalendar() {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());
  const { calendarList: calendarData, prevDayEmptyList, nextDayEmptyList } = getCalendarData(year, month);
  const [calendarList, setCalendarList] = useState(calendarData);

  useEffect(() => {
    const { calendarList: calendarData, prevDayEmptyList, nextDayEmptyList } = getCalendarData(year, month);
    setCalendarList(calendarData);
  }, [month, year]);

  return (
    <div className={style.missionCalendar}>
      <MonthHeader month={month} setMonth={setMonth} />
      <div className={style.body}>
        <div className={style.days}>
          {DAY_LIST.map((day) => {
            return <p key={day}>{day}</p>;
          })}
        </div>
        <div className={style.calendar}>
          {calendarList?.map((week) => {
            return (
              <div key={week[0]} className={style.week}>
                {week.map((day, index) => {
                  return (
                    <div key={day + index} className={style.dayItem}>
                      <p>{day !== 0 && day}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className={style.missionInfo}>
          <div className={style.missions}>
            <div className={style.missionItem}>
              <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
              <p>업무 1개 완수</p>
            </div>

            <div className={style.missionItem}>
              <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />
              <p>업무 1개 완수</p>
            </div>

            <div className={style.missionItem}>
              <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
              <p>업무 1개 완수</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MonthHeader({ month, setMonth }: { month: number; setMonth: any }) {
  const currentMonth = dayjs().month(); // dayjs는 월을 0부터 시작하기 때문에 +1 해줍니다.
  const minMonth = currentMonth - 3;
  const maxMonth = currentMonth;
  const showPreviousButton = minMonth < month;
  const showNextButton = month < maxMonth;

  /** TODO: 추후 1월, 2월, 3월에 에러 발생 예정. **/
  return (
    <div className={style.monthHeader}>
      {showPreviousButton && (
        <div className={style.leftButton} onClick={() => setMonth(month - 1)}>
          <Image src="/images/arrow.calendar.left.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
      <p>{month + 1}월</p>
      {showNextButton && (
        <div className={style.rightButton} onClick={() => setMonth(month + 1)}>
          <Image src="/images/arrow.calendar.right.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
    </div>
  );
}
