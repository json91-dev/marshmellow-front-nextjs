'use client';

import style from './time-setting.module.scss';
import React, { useState } from 'react';
import Welcome from '@/app/onboarding/worktime-setting/_components/Welcome';
import WorkTimeSetting from '@/app/onboarding/worktime-setting/_components/WorkTimeSetting';

export default function OnBoardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className={style.worktimeSettingPage}>
      {step === 1 && <Welcome setStep={setStep} />}
      {step === 2 && <WorkTimeSetting />}
    </div>
  );
}
