'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React from 'react';
import { useOnboardingStatusQuery } from '@/app/_hook/queries/onboarding';
import Spinner from '@/app/login/_components/Spinner';
import { useRouter } from 'next/navigation';

export default function EnjoyItems() {
  const { data: result, status, isLoading, isFetching } = useOnboardingStatusQuery();
  const router = useRouter();

  if (isLoading || isFetching) {
    return (
      <div className={style.enjoy}>
        <Spinner />
      </div>
    );
  }

  if (result?.data?.displayOnboardingMissionIcon) {
    return (
      <div className={style.enjoy}>
        <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
        <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
        <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
        <Image
          src="/images/enjoy.mission.svg"
          alt="No Image"
          width={100}
          height={100}
          onClick={() => router.push('/onboarding/mission')}
        />
      </div>
    );
  }

  return (
    <div className={style.enjoy}>
      <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
      <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
      <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
    </div>
  );
}
