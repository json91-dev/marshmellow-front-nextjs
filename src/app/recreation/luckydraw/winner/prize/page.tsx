'use client';
import style from './page.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import PrizeStepDefault from '@/app/recreation/luckydraw/winner/prize/_components/PrizeStepDefault';
import { isNumeric } from '@/utils/utils';
import PrizeStep2 from '@/app/recreation/luckydraw/winner/prize/_components/PrizeStep2';

export default function LuckyDrawWinnerMarshmallowPage() {
  return (
    <Suspense>
      <LuckyDrawWinnerMarshmallowContent />
    </Suspense>
  );
}

function LuckyDrawWinnerMarshmallowContent() {
  const mallowPageRef = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (step && (!isNumeric(step) || parseInt(step) !== 2)) {
      router.replace('/recreation/luckydraw/winner/prize');
    }
  }, [step, router]);

  if (!step) {
    return (
      <div ref={mallowPageRef} className={style.winnerPrizePage}>
        <PrizeStepDefault />
      </div>
    );
  }

  if (isNumeric(step) && parseInt(step) === 2) {
    return (
      <div ref={mallowPageRef} className={style.winnerPrizePage}>
        <PrizeStep2 />
      </div>
    );
  }
}
