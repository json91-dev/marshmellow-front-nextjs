'use client';

import styles from './page.module.scss';
import React, { useState } from 'react';
import Welcome from '@/app/onboarding/worktime-setting/_components/Welcome';
import WorkTimeSetting from '@/app/onboarding/worktime-setting/_components/WorkTimeSetting';

export default function OnBoardingPage() {
  const [step, setTutorialStep] = useState(1);

  return (
    <div className={styles.worktimeSettingPage}>
      {step === 1 && <Welcome setTutorialStep={setTutorialStep} />}
      {step === 2 && <WorkTimeSetting />}
    </div>
  );
}
