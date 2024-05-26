'use client';
import style from './office.module.scss';
import Image from 'next/image';
import React from 'react';
import TimerMissionCheck from '@/app/(main)/office/_components/TimerMissionCheck';
import TodayMission from '@/app/(main)/office/_components/TodayMission';
import WeekAttendance from '@/app/(main)/office/_components/WeekAttendance';

export default function OfficePage() {
  return (
    <div className={style.officePage}>
      <div className={style.myMallowArea}>
        <div className={style.logo}></div>
        <div className={style.myMallow}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
          <p>127</p>
        </div>
      </div>

      <div className={style.body}>
        <div className={style.topCarousel}>
          <div className={style.pagination}>
            <p>1/10</p>
          </div>
        </div>
        <div className={style.todayArea}>
          <div className={style.myIcon}>
            <div className={style.nameRank}>{`인턴\n`}</div>
            <div className={style.name}>{`홍길동`}</div>
            <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
          </div>
          <TodayMission />
        </div>
        <WeekAttendance />

        <div className={style.enjoy}>
          <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
        </div>
      </div>

      <TimerMissionCheck />
    </div>
  );
}
