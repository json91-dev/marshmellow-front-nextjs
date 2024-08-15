'use client';
import styles from './page.module.scss';
// import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import TopNavigation from '@/components/nav/TopNavigation';
import cx from 'classnames';
import Step5 from '@/app/prize/luckydraw/tax/info/_containers/Step5';

export default function LuckyDrawAddressInfo() {
  // const searchParams = useSearchParams();
  // const mode = searchParams.get('mode');

  return (
    <div className={styles.luckyDrawPrizeTaxPage}>
      <TopNavigation title={'배송정보 입력'} />
      <Step5 />
    </div>
  );
}

function TaxStepIndicator({ currentStep = 1, totalSteps = 5 }) {
  return (
    <div className={styles.taxStepIndicator}>
      {[...Array(totalSteps)].map((_, index) => {
        return <div key={index} className={cx(styles.step, index <= currentStep - 1 && styles.active)}></div>;
      })}
    </div>
  );
}
