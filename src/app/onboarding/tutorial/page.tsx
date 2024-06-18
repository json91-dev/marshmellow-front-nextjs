'use client';
import style from './tutorial.module.scss';
import React, { useState } from 'react';
import TutorialBottomNavMenu from '@/app/onboarding/tutorial/_components/TutorialBottomNavMenu';
import Tutorial1 from '@/app/onboarding/tutorial/_components/TutorialPage.1';

export default function OnBoardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className={style.tutorialPage}>
      <div className={style.layoutChild}>
        <Tutorial1 />
      </div>

      <TutorialBottomNavMenu step={step} />
    </div>
  );
}
