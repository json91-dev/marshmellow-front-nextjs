import style from './login.module.scss';
import React from 'react';
import Image from 'next/image';
import KakaoLoginButton from '@/app/(beforeLogin)/login/_components/KakaoLoginButton';
import GoogleLoginButton from '@/app/(beforeLogin)/login/_components/GoogleLoginButton';

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.titleSection}>
        <h2>{'오늘도 열심히 일한 당신! 혜택을 누리고 즐겨라!'}</h2>
        <h1>{'직장인들의 달달한 간식 \n 마시멜로우'}</h1>
        <div className={style.image}>
          <Image src="/images/login_main.svg" alt="No Image" fill objectFit="contain" />
        </div>
      </div>

      <div className={style.bottomLoginSection}>
        <p>합류하시면 다양한 서비스들을 이용해보실 수 있어요!</p>
        <KakaoLoginButton style={{ marginTop: '2rem' }} />
        <GoogleLoginButton style={{ marginTop: '1rem' }} />
        <div className={style.lookAroundButton}>
          <p>마시멜로우 둘러보기 </p>
        </div>
      </div>
    </div>
  );
}
