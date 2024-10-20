'use client';
import styles from '@/app/(main)/office/page.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import useOnboardingCompleteStatus from '@/api/queries/onboarding/useOnboardingCompleteStatus';

export default function EnjoyItems() {
  const { data: result, status, isLoading, isFetching } = useOnboardingCompleteStatus();
  const router = useRouter();

  if (isLoading || isFetching) {
    return null;
  }

  return (
    <div className={styles.enjoy}>
      <Image
        src="/images/enjoy.game.svg"
        alt="No Image"
        width={100}
        height={100}
        onClick={() => router.push('/recreation')}
      />
      <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} onClick={() => router.push('/event')} />
      <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} onClick={() => router.push('/guide')} />
      {result?.data?.displayOnboardingMissionIcon && (
        <Image
          src="/images/enjoy.mission.svg"
          alt="No Image"
          width={100}
          height={100}
          onClick={() => router.push('/onboarding/mission')}
        />
      )}
    </div>
  );
}
