'use client';
import styles from './nameCard.module.scss';
import Image from 'next/image';
import React from 'react';
import { dateStringToFormat, dateStringToFormatDiff, formatHourMinute } from '@/utils/utils';
import useMemberProfile from '@/api/queries/member/useMemberProfile';

export default function NameCardIntern() {
  const { data: result, isError, isLoading } = useMemberProfile();

  if (isError || !result || isLoading) {
    return null;
  }

  const { createdAt, grade } = result.data;
  const { nickname } = result.data.profile;
  const { startHour, endHour, launchTimeAt } = result.data.officeHour;

  return (
    <div className={styles.nameCardIntern}>
      <div className={styles.topName}>MARSHMALLOW</div>

      <div className={styles.profile}>
        <Image src="/images/mallow.happy.svg" alt="No Image" width={68} height={68} />
      </div>

      <div className={styles.nickname}>
        <div>{nickname}</div>
        <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
      </div>

      <div className={styles.detailInfo}>
        <div>
          <div>입사일</div>
          <div>직급</div>
          <div>근무시간</div>
        </div>

        <div>
          <div className={styles.workPeriod}>
            <div>{dateStringToFormat(createdAt)}</div>
            <div className={styles.workPeriodTag}>{dateStringToFormatDiff(createdAt)}</div>
          </div>
          <div>{grade}</div>
          <div>{`${formatHourMinute(startHour)} ~ ${formatHourMinute(endHour)} (점심시간 ${formatHourMinute(launchTimeAt)})`}</div>
        </div>
      </div>

      <div className={styles.logo}>
        <Image src="/images/logo.svg" alt="No Image" fill />
      </div>
    </div>
  );
}
