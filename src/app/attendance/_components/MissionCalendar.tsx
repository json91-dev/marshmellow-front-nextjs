'use client';
import style from './missionCalendar.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import { getCalendarArray } from '@/utils/utils';
import dayjs from 'dayjs';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export default function MissionCalendar() {
  const weekCalendarList = getCalendarArray(dayjs().year(), dayjs().month());
  const [missionList, setMissionList] = useState(weekCalendarList);

  return (
    <div className={style.missionCalendar}>
      <div className={style.header}>
        <div className={style.leftButton}>
          <Image src="/images/arrow.gray.left.svg" alt="No Image" width={24} height={24} />
        </div>
        <p>3월</p>
        <div></div>
      </div>
      <div className={style.body}>
        <div className={style.days}>
          {DAY_LIST.map((day) => {
            return <p key={day}>{day}</p>;
          })}
        </div>
        <div className={style.calendar}>
          {missionList?.map((week) => {
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
