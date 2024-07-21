'use client';
import style from './tax.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import TaxStepDefault from '@/app/prize/luckydraw/tax/_components/TaxStepDefault';

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
      {!step && <TaxStepDefault />}
      {/*{step === '2' && <p>2</p>}*/}
      {/*{step === '3' && <p>2</p>}*/}
      {/*{step === '4' && <p>4</p>}*/}
    </div>
  );
}
