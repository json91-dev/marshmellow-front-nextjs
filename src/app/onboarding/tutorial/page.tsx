'use client';
import styles from './page.module.scss';
import React, { useState } from 'react';
import TutorialBottomNavMenu from '@/app/onboarding/tutorial/_components/TutorialBottomNavMenu';
import Tutorial1 from '@/app/onboarding/tutorial/_components/TutorialPage.1';
import Tutorial2 from '@/app/onboarding/tutorial/_components/TutorialPage.2';
import Tutorial3 from '@/app/onboarding/tutorial/_components/TutorialPage.3';
import Tutorial4 from '@/app/onboarding/tutorial/_components/TutorialPage.4';
import Tutorial5 from '@/app/onboarding/tutorial/_components/TutorialPage.5';
import Tutorial6 from '@/app/onboarding/tutorial/_components/TutorialPage.6';
import Tutorial7 from '@/app/onboarding/tutorial/_components/TutorialPage.7';

export default function OnBoardingPage() {
  const [tutorialStep, setTutorialStep] = useState(1);

  return (
    <div className={styles.tutorialPage}>
      <div className={styles.layoutChild}>{tutorialStep === 1 && <Tutorial1 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 2 && <Tutorial2 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 3 && <Tutorial3 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 4 && <Tutorial4 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 5 && <Tutorial5 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 6 && <Tutorial6 setTutorialStep={setTutorialStep} />}</div>
      <div className={styles.layoutChild}>{tutorialStep === 7 && <Tutorial7 setTutorialStep={setTutorialStep} />}</div>

      <TutorialBottomNavMenu tutorialStep={tutorialStep} />
    </div>
  );
}
