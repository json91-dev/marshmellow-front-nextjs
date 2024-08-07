'use client';
import useModalStore from '@/store/modalStore';
import dayjs from 'dayjs';
import { findMonday, findSunday } from '@/utils/utils';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React from 'react';

/** 비로그인 상태일때 Office => 근태관리 화면 **/
export default function WeekAttendanceGuest() {
  const { showOfficeNewbieSignupModal } = useModalStore();
  const onClickAttendance = () => {
    showOfficeNewbieSignupModal(true);
  };

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
        </div>
      </div>

      <div className={style.weekMissions}>
        {daysArray.map((item, index) => {
          const dayIndex = dayjs().day() === 0 ? 6 : dayjs().day() - 1;
          return (
            <div className={style.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {index === dayIndex && <div className={style.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
