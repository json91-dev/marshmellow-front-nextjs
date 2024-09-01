'use client';
import styles from '../MissionCalendar.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getCalendarData } from '@/utils/utils';
import dayjs from 'dayjs';
import cx from 'classnames';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export default function MissionCalendarGuest() {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());
  const { calendarList: calendarData, prevDayEmptyList, nextDayEmptyList } = getCalendarData(year, month);
  const [calendarList, setCalendarList] = useState(calendarData);

  useEffect(() => {
    const { calendarList: calendarData, prevDayEmptyList, nextDayEmptyList } = getCalendarData(year, month);
    setCalendarList(calendarData);
  }, [month, year]);

  return (
    <div className={styles.missionCalendar}>
      <MonthHeader month={month} setMonth={setMonth} />
      <div className={styles.calendarBody}>
        <div className={styles.days}>
          {DAY_LIST.map((day) => {
            return <p key={day}>{day}</p>;
          })}
        </div>

        <div className={styles.dates}>
          {calendarList?.map((week) => {
            return (
              <div key={week[0]} className={styles.week}>
                {week.map((date, index) => {
                  const comparedDate = dayjs().year(year).month(month).date(date);
                  const isBeforeToday = comparedDate.isBefore(dayjs(), 'day');

                  return (
                    <div key={date + index} className={styles.dateItem}>
                      <p className={cx(isBeforeToday && styles.gray)}>{date !== 0 && date}</p>
                      {dayjs().month() === month && dayjs().date() === date && <div className={styles.dot} />}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className={styles.missionInfo}>
          <div className={styles.missions}>
            <div className={styles.missionItem}>
              <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
              <p>업무 1개 완수</p>
            </div>

            <div className={styles.missionItem}>
              <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />
              <p>업무 2개 완수</p>
            </div>

            <div className={styles.missionItem}>
              <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
              <p>업무 3개 완수</p>
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
    <div className={styles.monthHeader}>
      {showPreviousButton && (
        <div className={styles.leftButton} onClick={() => setMonth(month - 1)}>
          <Image src="/images/arrow.calendar.left.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
      <p>{month + 1}월</p>
      {showNextButton && (
        <div className={styles.rightButton} onClick={() => setMonth(month + 1)}>
          <Image src="/images/arrow.calendar.right.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
    </div>
  );
}
