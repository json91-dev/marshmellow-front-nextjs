'use client';
import style from './office.module.scss';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useModalStore } from '@/store/modal';
import TimerCheck from '@/app/(main)/office/_components/TimerCheck';
import TodayMission from '@/app/(main)/office/_components/TodayMission';

export default function OfficePage() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const onClickAttendance = () => {
    if (sessionStatus === 'authenticated') {
      router.push('/attendance');
    } else {
      console.log('모달 오픈');
    }
  };

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

        <div className={style.attendance} onClick={onClickAttendance}>
          <div className={style.header}>
            <p className={style.name}>근태 관리</p>
            <p className={style.date}>2024.02.26 ~ 2024.03.03</p>
            <div className={style.image}>
              <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
              <div className={style.redDot}></div>
            </div>
          </div>

          <div className={style.weekMissions}>
            <div className={style.col}>
              <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
              <p>월</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
              <p>화</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
              <p>수</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
              <p>목</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>금</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />
              <p>토</p>
            </div>

            <div className={style.col}>
              <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
              <p>일</p>
              <div className={style.blackDot}></div>
            </div>
          </div>
        </div>
        <div className={style.enjoy}>
          <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
        </div>
      </div>

      <TimerCheck />
    </div>
  );
}
