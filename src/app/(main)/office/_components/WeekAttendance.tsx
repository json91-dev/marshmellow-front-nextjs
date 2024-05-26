'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useWorkWeeklyQuery } from '@/app/_hook/queries/activity';
import dayjs from 'dayjs';
import { findMonday, findSunday } from '@/utils/utils';

export default function WeekAttendance() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const { data: workWeeklyResult, isFetching, isLoading } = useWorkWeeklyQuery(dayjs().format('YYYY-MM-DD'));
  const onClickAttendance = () => {
    if (sessionStatus === 'authenticated') {
      router.push('/attendance');
    } else {
      console.log('모달 오픈');
    }
  };

  if (isFetching || isLoading || sessionStatus === 'unauthenticated') {
    return <NotMemberWeekAttendance />;
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** 비로그인 상태일때 화면 **/
function NotMemberWeekAttendance() {
  const onClickAttendance = () => {};
  const now = dayjs();
  const mondayTime = findMonday(now);
  const sundayTime = findSunday(now);
  const daysArray = ['월', '화', '수', '목', '금', '토', '일'];

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
        {daysArray.map((item, index) => {
          return (
            <div className={style.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {/*일요일*/}
              {dayjs().day() === 0 && index === 6 && <div className={style.blackDot}></div>}
              {/*월 ~ 토요일*/}
              {index === dayjs().day() - 1 && <div className={style.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
