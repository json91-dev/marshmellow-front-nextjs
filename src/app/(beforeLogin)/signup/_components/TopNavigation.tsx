'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function TopNavigation() {
  const pathname = usePathname();

  return (
    <div className={style.container}>
      <div className={style.leftIcon}>
        {pathname !== '/signup/submit-complete' && (
          <Image src="/images/icon_arrow_left.svg" alt="No Image" fill objectFit="contain" />
        )}
      </div>
      <p>지원하기</p>
      <div className={style.leftIcon}></div>
    </div>
  );
}
