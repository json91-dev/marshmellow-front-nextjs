import style from '@/app/signup/_components/topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';

export default function TopNavigation() {
  return (
    <div className={style.container}>
      <div className={style.leftIcon}>
        <Image src="/images/icon_arrow_left.svg" alt="No Image" fill objectFit="contain" />
      </div>
      <p>지원하기</p>
      <div className={style.leftIcon}></div>
    </div>
  );
}
