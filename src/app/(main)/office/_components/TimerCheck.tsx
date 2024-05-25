'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React from 'react';

export default function TimerCheck() {
  return (
    <div className={style.timeCheckArea}>
      <div className={style.timer}>09:47:15</div>
      <div className={style.timeInfo}>
        <p>
          정시출근까지 <span>12분 45초</span> 남았어요
        </p>
      </div>
      <div className={style.rightIcon}>
        <Image src="/images/mallow.sleep.circle.svg" alt="No Image" width={100} height={100} />
      </div>
    </div>
  );
}
