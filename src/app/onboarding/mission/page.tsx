import TopNavigation from '@/app/_components/common/TopNavigation';
import Image from 'next/image';
import React from 'react';
import style from './mission.module.scss';
import { MissionIcons } from '@/app/onboarding/mission/_components/MissionIcons';
import { MissionCards } from '@/app/onboarding/mission/_components/MissionCards';

export default function missionPage() {
  return (
    <div className={style.missionPage}>
      <TopNavigation title={'두근두근 첫 적응 미션'} path={'/office'} />
      <div className={style.missionInner}>
        <div className={style.timerBox}>
          <div className={style.timerInfo}>
            <p>현재 남은 참여 가능시간</p>
            <Image src="/images/onboarding.clock.svg" alt="No Image" width={14} height={14} />
          </div>
          <p className={style.timerTime}>0일 00시간 00분 00초</p>
        </div>

        <div className={style.bgImage}>
          <Image src="/images/onboarding.mission.bg.png" alt="No Image" fill />
        </div>

        <div className={style.duration}>
          <p className={style.durationTitle}>기간 내 모두 완료 시 마시멜로우 n개 지급</p>
          <p className={style.durationInfo}>0000. 00. 00 ~ 0000. 00. 00 (0시)</p>
        </div>

        <MissionIcons />

        <MissionCards />
      </div>
    </div>
  );
}

// function mission
