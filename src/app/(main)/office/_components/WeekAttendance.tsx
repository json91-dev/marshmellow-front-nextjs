'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useWorkWeeklyQuery } from '@/app/_hook/queries/activity';
import dayjs from 'dayjs';
import { findMonday, findSunday } from '@/utils/utils';
import { useModalStore } from '@/store/modal';
import WeekAttendanceGuest from '@/app/(main)/office/_components/guest/WeekAttendanceGuest';
import Spinner from '@/app/login/_components/Spinner';

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
    return (
      <div className={style.attendance}>
        <Spinner />
      </div>
    );
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
    <div className={style.attendance} onClick={onClickAttendance}>
      <div className={style.header}>
        <p className={style.name}>근태 관리</p>
        <p className={style.date}>{`${mondayTime.format('YYYY.MM.DD')} ~ ${sundayTime.format('YYYY.MM.DD')}`}</p>
        <div className={style.image}>
          <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
          <div className={style.redDot}></div>
        </div>
      </div>

      <div className={style.weekMissions}>
        {weekMissionData.map((item: any, index: any) => {
          const { completeCount, dayString } = item;

          return (
            <div className={style.col}>
              {completeCount === 0 && <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 1 && <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 2 && <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />}
              {completeCount === 3 && <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />}
              <p>{dayString}</p>

              {dayjs().day() === 0 && index === 6 && <div className={style.blackDot}></div>}
              {index === dayjs().day() - 1 && <div className={style.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
