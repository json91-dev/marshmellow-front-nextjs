import Image from 'next/image';
import React from 'react';
import styles from '../page.module.scss';
import cx from 'classnames';
import { OnboardingMissionState } from '@/api/queries/onboarding/useOnboardingMissionStatus';
import AdBanner from '@/components/ads/AdBanner';

type PropTypes = {
  onboardingMissionStates: OnboardingMissionState[];
};

export function MissionCards({ onboardingMissionStates }: PropTypes) {
  return (
    <div className={styles.missionCards}>
      {onboardingMissionStates.map((item, index) => {
        return (
          <>
            {index === 3 && (
              <div className={styles.banner}>
                <AdBanner dataAdSlot={'3341770865'} dataFullWidthResponsive={true} />
              </div>
            )}
            <div className={cx(styles.missionCard, item.isComplete && styles.complete)}>
              <div className={styles.missionInfo}>
                <p className={styles.title}>{item.missionName}</p>
                <p className={styles.description}>{item.missionDescription}</p>
              </div>
              <div className={styles.missionCheckIcon}>
                {item.isComplete ? (
                  <>
                    <Image src="/images/snack.gray.svg" alt="No Image" width={18} height={18} />
                    <p>완료</p>
                  </>
                ) : (
                  <>
                    <Image src="/images/snack.gray.light.svg" alt="No Image" width={18} height={18} />
                    <p>미완료</p>
                  </>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
