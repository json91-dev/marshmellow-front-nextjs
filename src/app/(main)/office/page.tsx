'use client';
import styles from './page.module.scss';
import Image from 'next/image';
import React from 'react';
import TimerMissionCheck from '@/app/(main)/office/_components/TimerMissionCheck';
import TodayMission from '@/app/(main)/office/_components/TodayMission';
import WeekAttendance from '@/app/(main)/office/_components/WeekAttendance';
import MyMallowHeader from '@/app/(main)/office/_components/MyMallowHeader';
import EnjoyItems from '@/app/(main)/office/_components/EnjoyItems';
import useMemberProfile from '@/api/queries/member/useMemberProfile';
import { useRouter } from 'next/navigation';
import useRedirectOnAuthLogin from '@/hooks/useRedirectOnAuthLogin';
import { useSession } from 'next-auth/react';
import TodayMissionGuest from '@/app/(main)/office/_components/guest/TodayMissionGuest';
import WeekAttendanceGuest from '@/app/(main)/office/_components/guest/WeekAttendanceGuest';
import TimerMissionCheckGuest from '@/app/(main)/office/_components/guest/TimerMissionCheckGuest';

export default function OfficePage() {
  const { data: result } = useMemberProfile();
  const router = useRouter();
  const { status: sessionStatus } = useSession();
  useRedirectOnAuthLogin();

  return (
    <div className={styles.officePage}>
      <MyMallowHeader />

      <div className={styles.body}>
        <div className={styles.topCarousel} onClick={() => router.push('/event/attendance')}>
          <Image src="/images/banner.full.attendance.png" alt="No Image" fill />
          <div className={styles.pagination}>
            <p>1/10</p>
          </div>
        </div>
        <div className={styles.todayArea}>
          <div className={styles.myIcon}>
            <div className={styles.nameRank}>{`${result?.data ? result?.data?.grade : '취준생'}\n`}</div>
            <div className={styles.name}>{`${result?.data ? result?.data?.profile?.name : '마시멜로우'}`}</div>
            <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
          </div>
          {sessionStatus === 'unauthenticated' ? <TodayMissionGuest /> : <TodayMission />}
        </div>
        {sessionStatus === 'unauthenticated' ? <WeekAttendanceGuest /> : <WeekAttendance />}

        <EnjoyItems />
      </div>

      {sessionStatus === 'unauthenticated' ? <TimerMissionCheckGuest /> : <TimerMissionCheck />}
    </div>
  );
}
