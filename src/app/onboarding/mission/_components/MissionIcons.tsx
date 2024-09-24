import Image from 'next/image';
import React from 'react';
import styles from '../page.module.scss';
import { OnboardingMissionState } from '@/api/queries/onboarding/useOnboardingMissionStatus';

type PropTypes = {
  onboardingMissionStates: OnboardingMissionState[];
};

/** 적응 미션 카드 UI **/
export function MissionIcons({ onboardingMissionStates }: PropTypes) {
  const isCompleteArray = onboardingMissionStates.map((mission) => mission.isComplete);

  return (
    <div className={styles.missionIcons}>
      {isCompleteArray[0] ? (
        <Image src="/images/onboarding.mission.mallow.finish.1.svg" alt="No Image" width={74} height={74} />
      ) : (
        <Image src="/images/onboarding.mission.mallow.1.svg" alt="No Image" width={74} height={74} />
      )}

      {isCompleteArray[1] ? (
        <Image src="/images/onboarding.mission.mallow.finish.2.svg" alt="No Image" width={74} height={74} />
      ) : (
        <Image src="/images/onboarding.mission.mallow.2.svg" alt="No Image" width={74} height={74} />
      )}

      {isCompleteArray[2] ? (
        <Image src="/images/onboarding.mission.mallow.finish.3.svg" alt="No Image" width={74} height={74} />
      ) : (
        <Image src="/images/onboarding.mission.mallow.3.svg" alt="No Image" width={74} height={74} />
      )}

      {isCompleteArray[3] ? (
        <Image src="/images/onboarding.mission.mallow.finish.4.svg" alt="No Image" width={74} height={74} />
      ) : (
        <Image src="/images/onboarding.mission.mallow.4.svg" alt="No Image" width={74} height={74} />
      )}
    </div>
  );
}
