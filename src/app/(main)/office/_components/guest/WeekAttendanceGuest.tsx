'use client';
import useModalStore from '@/store/modalStore';
import dayjs from 'dayjs';
import { findMonday, findSunday } from '@/utils/utils';
import styles from '@/app/(main)/office/page.module.scss';
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
    <div className={styles.attendance} onClick={onClickAttendance}>
      <div className={styles.header}>
        <p className={styles.name}>근태 관리</p>
        <p className={styles.date}>{`${mondayTime.format('YYYY.MM.DD')} ~ ${sundayTime.format('YYYY.MM.DD')}`}</p>
        <div className={styles.image}>
          <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
        </div>
      </div>

      <div className={styles.weekMissions}>
        {daysArray.map((item, index) => {
          const dayIndex = dayjs().day() === 0 ? 6 : dayjs().day() - 1;
          return (
            <div className={styles.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {index === dayIndex && <div className={styles.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
