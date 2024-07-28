'use client';
import style from './page.module.scss';
// import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import TopNavigation from '@/app/_components/common/TopNavigation';
import cx from 'classnames';
import Step5 from '@/app/prize/luckydraw/tax/info/_components/Step5';

export default function LuckyDrawAddressInfo() {
  // const searchParams = useSearchParams();
  // const mode = searchParams.get('mode');

  return (
    <div className={style.luckyDrawPrizeTaxPage}>
      <TopNavigation title={'배송정보 입력'} />
      <Step5 />
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
