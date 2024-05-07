'use client';
import style from './nameCard.module.scss';
import Image from 'next/image';
import React from 'react';
import useMemberProfile from '@/app/_hook/queries/useMemberProfile';
import { dateStringToFormat, dateStringToFormatDiff, formatHourMinute } from '@/utils/utils';

export default function NameCardIntern() {
  const { data: result } = useMemberProfile();
  const { createdAt, grade } = result.data;
  const { nickname } = result.data.profile;
  const { startHour, endHour, launchTimeAt } = result.data.officeHour;

  return (
    <div className={style.nameCardIntern}>
      <div className={style.topName}>MARSHMALLOW</div>

      <div className={style.profile}>
        <Image src="/images/mallow.happy.svg" alt="No Image" width={68} height={68} />
      </div>

      <div className={style.nickname}>
        <div>{nickname}</div>
        <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
      </div>

      <div className={style.detailInfo}>
        <div>
          <div>입사일</div>
          <div>직급</div>
          <div>근무시간</div>
        </div>

        <div>
          <div className={style.workPeriod}>
            <div>{dateStringToFormat(createdAt)}</div>
            <div className={style.workPeriodTag}>{dateStringToFormatDiff(createdAt)}</div>
          </div>
          <div>{grade}</div>
          <div>{`${formatHourMinute(startHour)} ~ ${formatHourMinute(endHour)} (점심시간 ${formatHourMinute(launchTimeAt)})`}</div>
        </div>
      </div>

      <div className={style.logo}></div>
    </div>
  );
}
