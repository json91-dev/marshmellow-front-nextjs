'use client';
import styles from '@/app/(main)/office/page.module.scss';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useWorkWeeklyQuery } from '@/api/queries/activity';
import dayjs from 'dayjs';
import { findMonday, findSunday } from '@/utils/utils';
import useModalStore from '@/store/modalStore';
import WeekAttendanceGuest from '@/app/(main)/office/_components/guest/WeekAttendanceGuest';

/** 로그인 상태일때 Office => 근태관리 화면 **/
export default function WeekAttendance() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const { showOfficeNewbieSignupModal } = useModalStore();
  const { data: workWeeklyResult, isFetching, isLoading, isError } = useWorkWeeklyQuery(dayjs().format('YYYY-MM-DD'));
  const onClickAttendance = () => {
    router.push('/attendance');
  };

  if (isFetching || isLoading || sessionStatus === 'loading') {
    return null;
  }

  if (sessionStatus === 'unauthenticated') {
    return <WeekAttendanceGuest />;
  }

  const now = dayjs();
  const mondayTime = findMonday(now);
  const sundayTime = findSunday(now);
  const daysArray = ['월', '화', '수', '목', '금', '토', '일'];

  const weekMissionData = workWeeklyResult.data.map((item: any, index: any) => {
    return {
      ...item,
      dayString: daysArray[index],
    };
  });

  return (
    <div className={styles.attendance} onClick={onClickAttendance}>
      <div className={styles.header}>
        <p className={styles.name}>근태 관리</p>
        <p className={styles.date}>{`${mondayTime.format('YYYY.MM.DD')} ~ ${sundayTime.format('YYYY.MM.DD')}`}</p>
        <div className={styles.image}>
          <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
          <div className={styles.redDot}></div>
        </div>
      </div>

      <div className={styles.weekMissions}>
        {weekMissionData.map((item: any, index: any) => {
          const { completeCount, dayString } = item;
          const dayIndex = dayjs().day() === 0 ? 6 : dayjs().day() - 1;

          return (
            <div className={styles.col} key={item.date}>
              {completeCount === 0 && <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 1 && <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 2 && <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 3 && <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />}
              <p>{dayString}</p>

              {index === dayIndex && <div className={styles.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
