import Image from 'next/image';
import React from 'react';
import style from '../page.module.scss';

export function MissionIcons() {
  return (
    <div className={style.missionIcons}>
      <Image src="/images/onboarding.mission.mallow.1.svg" alt="No Image" width={74} height={74} />
      <Image src="/images/onboarding.mission.mallow.2.svg" alt="No Image" width={74} height={74} />
      <Image src="/images/onboarding.mission.mallow.3.svg" alt="No Image" width={74} height={74} />
      <Image src="/images/onboarding.mission.mallow.4.svg" alt="No Image" width={74} height={74} />
    </div>
  );
}
