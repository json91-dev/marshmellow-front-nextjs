'use client';
import styles from '@/app/onboarding/mission/page.module.scss';
import Image from 'next/image';
import { formatRemainingTime } from '@/utils/utils';
import React, { useEffect, useRef, useState } from 'react';

type PropsType = {
  endAt: string;
};

export default function MissionTimer({ endAt }: PropsType) {
  const [remainTime, setRemainTime] = useState<string>('');
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setRemainTime(formatRemainingTime(endAt));
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [endAt]);

  return (
    <div className={styles.timerBox}>
      <div className={styles.timerInfo}>
        <p>현재 남은 참여 가능시간</p>
        <Image src="/images/onboarding.clock.svg" alt="No Image" width={14} height={14} />
      </div>
      <p className={styles.timerTime}>{remainTime}</p>
    </div>
  );
}
