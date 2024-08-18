'use client';

import React, { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Main from '@/app/research/pantry/_containers/Main';
import Step1 from '@/app/research/pantry/_containers/Step1';
import Step2 from '@/app/research/pantry/_containers/Step2';
import Step3 from '@/app/research/pantry/_containers/Step3';
import Step4 from '@/app/research/pantry/_containers/Step4';
import Step5 from '@/app/research/pantry/_containers/Step5';
import Step6 from '@/app/research/pantry/_containers/Step6';

export default function PantryResearchPage() {
  return (
    <Suspense>
      <PantryResearchContent />
    </Suspense>
  );
}

function PantryResearchContent() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');
  const router = useRouter();

  useEffect(() => {
    if (!step) {
      return;
    }

    const validSteps = [1, 2, 3, 4, 5, 6];
    const stepNumber = parseFloat(step); // step을 숫자로 변환

    if (!validSteps.includes(stepNumber)) {
      router.replace('/not-found');
    }
  }, [step, router]);

  if (step) {
    return (
      <>
        {step === '1' && <Step1 />}
        {step === '2' && <Step2 />}
        {step === '3' && <Step3 />}
        {step === '4' && <Step4 />}
        {step === '5' && <Step5 />}
        {step === '6' && <Step6 />}
      </>
    );
  }

  return <Main />;
}
