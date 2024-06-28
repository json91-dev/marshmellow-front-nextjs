'use client';
import style from './office.module.scss';
import Image from 'next/image';
import React from 'react';
import TimerMissionCheck from '@/app/(main)/office/_components/TimerMissionCheck';
import TodayMission from '@/app/(main)/office/_components/TodayMission';
import WeekAttendance from '@/app/(main)/office/_components/WeekAttendance';
import MyMallowHeader from '@/app/(main)/office/_components/MyMallowHeader';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import EnjoyItems from '@/app/(main)/office/_components/EnjoyItems';

export default function OfficePage() {
  const { data: result, status } = useMemberProfileQuery();

  return (
    <div className={style.officePage}>
      <MyMallowHeader />

      <div className={style.body}>
        <div className={style.topCarousel}>
          <div className={style.pagination}>
            <p>1/10</p>
          </div>
        </div>
        <div className={style.todayArea}>
          <div className={style.myIcon}>
            <div className={style.nameRank}>{`${result?.data?.grade}\n`}</div>
            <div className={style.name}>{`${result?.data?.profile?.name}`}</div>
            <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
          </div>
          <TodayMission />
        </div>
        <WeekAttendance />

        <EnjoyItems />
      </div>

      <TimerMissionCheck />
    </div>
  );
}
