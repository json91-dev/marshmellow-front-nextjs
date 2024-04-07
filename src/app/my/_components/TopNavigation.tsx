import style from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function TopNavigation() {
  const router = useRouter();
  return (
    <div className={style.container}>
      <div className={style.leftIcon} onClick={() => router.back()}>
        <Image src="/images/arrow.left.svg" alt="No Image" fill objectFit="contain" />
      </div>
      <p>사원증</p>
      <div className={style.leftIcon}></div>
    </div>
  );
}
