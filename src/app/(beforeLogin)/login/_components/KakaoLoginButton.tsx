'use client';

import style from './kakaoLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
// import {signIn} from "next-auth/react";

type Props = {
  style?: CSSProperties;
};
export default function KakaoLoginButton(props: Props) {
  const router = useRouter();
  const onClickButton = () => {
    router.push('/signup/identify');
  };

  return (
    <div className={style.container} style={props.style} onClick={onClickButton}>
      <div className={style.button}>
        <div className={style.image}>
          <Image src="/images/logo_kakao.png" alt="No Image" fill objectFit="contain" />
        </div>
        <p>카카오톡으로 시작하기</p>
      </div>
    </div>
  );
}
