'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import OnboardingGuide from '@/app/_components/onboarding/OnboardingGuide';

export default function OnboardingGuideModal() {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR) return <></>;

  const onboardingGuideModal = document.getElementById('onboarding-guide-modal');

  if (onboardingGuideModal) {
    return createPortal(<OnboardingGuide />, onboardingGuideModal);
  }
  return null;
}
