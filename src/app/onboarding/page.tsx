'use client';
import style from './onboarding.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';

export default function OnBoardingPage() {
  const [cartoonPage, setCartoonPage] = useState(1);

  return (
    <div className={style.onboarding}>
      <Image src="/images/x.cancel.black.svg" alt={'No Image'} className={style.xButton} width={24} height={24} />
      <div className={style.body}>
        <div className={style.cartoonArea}>
          <Image src="/images/onboarding.1.png" alt={'No Image'} fill />
        </div>
        <div className={style.infoArea}>
          <div className={style.description}>
            <p className={style.title}>마시멜로우를 소개합니다! | 마시멜로우 둘러보기</p>
            <p className={style.views}>조회수 486회</p>
          </div>
          <div className={style.channelProfile}>
            <Image src="/images/mallow.tv.profile.svg" alt={'No Image'} width={32} height={32} />
            <p>마시멜로우 TV</p>
          </div>
        </div>
      </div>

      <div className={style.buttonArea}>
        <button className={style.cancelButton}>이전</button>
        <button className={style.confirmButton}>다음</button>
      </div>
    </div>
  );
}
