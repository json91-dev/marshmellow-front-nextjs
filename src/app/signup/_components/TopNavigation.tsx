'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function TopNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.leftIcon}>
        {pathname !== '/signup/submit-complete' && (
          <Image src="/images/arrow.left.svg" alt="No Image" fill objectFit="contain" onClick={() => router.back()} />
        )}
      </div>
      <p>지원하기</p>
      <div className={style.leftIcon}></div>
    </div>
  );
}
