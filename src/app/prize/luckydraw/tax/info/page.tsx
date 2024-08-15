'use client';
import styles from './tax.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import Step1 from '@/app/prize/luckydraw/tax/info/_containers/Step1';
import TopNavigation from '@/components/nav/TopNavigation';
import Step2 from '@/app/prize/luckydraw/tax/info/_containers/Step2';
import Step3 from '@/app/prize/luckydraw/tax/info/_containers/Step3';
import Step4 from '@/app/prize/luckydraw/tax/info/_containers/Step4';
import Step5 from '@/app/prize/luckydraw/tax/info/_containers/Step5';
import { StepIndicator } from '@/components/common/StepIndicator';

export default function LuckyDrawTaxInfo() {
  return (
    <Suspense>
      <LuckyDrawInfoContent />
    </Suspense>
  );
}

function LuckyDrawInfoContent() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');
  const router = useRouter();

  useEffect(() => {
    if (!step) {
      return;
    }

    const validSteps = [1, 2, 3, 4, 5];
    const stepNumber = parseFloat(step); // step을 숫자로 변환

    if (!validSteps.includes(stepNumber)) {
      router.replace('/prize/luckydraw/tax/info');
    }
  }, [step, router]);

  return (
    <div className={styles.luckyDrawPrizeTaxPage}>
      {step ? (
        <>
          <TopNavigation title={parseFloat(step) !== 5 ? '제세공과금 정보 입력' : '배송정보 입력'} />
          <StepIndicator currentStep={parseFloat(step)} />
        </>
      ) : (
        <>
          <TopNavigation title={'제세공과금 정보 입력'} />
          <StepIndicator currentStep={1} />
          <Step1 />
        </>
      )}
      {step === '1' && <Step1 />}
      {step === '2' && <Step2 />}
      {step === '3' && <Step3 />}
      {step === '4' && <Step4 />}
      {step === '5' && <Step5 />}
    </div>
  );
}
