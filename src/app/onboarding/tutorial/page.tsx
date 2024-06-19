'use client';
import style from './tutorial.module.scss';
import React, { useState } from 'react';
import TutorialBottomNavMenu from '@/app/onboarding/tutorial/_components/TutorialBottomNavMenu';
import Tutorial1 from '@/app/onboarding/tutorial/_components/TutorialPage.1';
import Tutorial2 from '@/app/onboarding/tutorial/_components/TutorialPage.2';

export default function OnBoardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className={style.tutorialPage}>
      <div className={style.layoutChild}>{step === 1 && <Tutorial1 setStep={setStep} />}</div>
      <div className={style.layoutChild}>{step === 2 && <Tutorial2 setStep={setStep} />}</div>

      <TutorialBottomNavMenu step={step} />
    </div>
  );
}
