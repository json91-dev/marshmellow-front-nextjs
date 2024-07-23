'use client';
import style from './tax.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import TaxStepDefault from '@/app/prize/luckydraw/tax/_components/TaxStepDefault';
import TopNavigation from '@/app/_components/common/TopNavigation';
import cx from 'classnames';
import TaxStep2 from '@/app/prize/luckydraw/tax/_components/TaxStep2';

export default function LuckyDrawWinnerMarshmallow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (!step) {
      return;
    }

    const validSteps = [2, 3, 4];
    const stepNumber = parseFloat(step); // step을 숫자로 변환

    if (!validSteps.includes(stepNumber)) {
      router.replace('/prize/luckydraw/tax');
    }
  }, [step, router]);

  return (
    <div className={style.luckyDrawPrizeTaxPage}>
      <TopNavigation title={'제세공과금 정보 입력'} />
      {step ? <TaxStepIndicator currentStep={parseFloat(step)} /> : <TaxStepIndicator currentStep={1} />}

      {!step && <TaxStepDefault />}
      {step === '2' && <TaxStep2 />}
      {/*{step === '3' && <p>2</p>}*/}
      {/*{step === '4' && <p>4</p>}*/}
    </div>
  );
}

function TaxStepIndicator({ currentStep = 1, totalSteps = 5 }) {
  return (
    <div className={style.taxStepIndicator}>
      {[...Array(totalSteps)].map((_, index) => {
        return <div key={index} className={cx(style.step, index <= currentStep - 1 && style.active)}></div>;
      })}
    </div>
  );
}
