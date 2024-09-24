import TopNavigation from '@/components/nav/TopNavigation';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';
import { MissionIcons } from '@/app/onboarding/mission/_components/MissionIcons';
import { MissionCards } from '@/app/onboarding/mission/_components/MissionCards';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MissionTimer from '@/app/onboarding/mission/_components/MissionTimer';
import dayjs from 'dayjs';
import { OnboardingMissionStatusResponse } from '@/api/queries/onboarding/useOnboardingMissionStatus';

export default async function missionPage() {
  const session = await getServerSession(authOptions);
  const response = await fetch(`${process.env.API_URL}/activity/onboarding`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.accessToken}` },
  });

  if (!response.ok) {
    throw new Error('서버 에러 발생');
  }

  const result: OnboardingMissionStatusResponse = await response.json();
  const { endAt, startAt } = result.data.period;

  return (
    <div className={styles.missionPage}>
      <TopNavigation title={'두근두근 첫 적응 미션'} path={'/office'} />
      <div className={styles.missionInner}>
        <MissionTimer endAt={endAt} />

        <div className={styles.bgImage}>
          <Image src="/images/onboarding.mission.bg.png" alt="No Image" width={1080} height={924} />
        </div>

        <div className={styles.duration}>
          <p className={styles.durationTitle}>기간 내 모두 완료 시 마시멜로우 n개 지급</p>
          <p className={styles.durationInfo}>
            {dayjs(startAt).format('YYYY. MM. DD')} ~ {dayjs(endAt).format('YYYY. MM. DD')}
          </p>
        </div>

        <MissionIcons onboardingMissionStates={result.data.onboardingMissionStates} />
        <MissionCards onboardingMissionStates={result.data.onboardingMissionStates} />
      </div>
    </div>
  );
}

// function mission
