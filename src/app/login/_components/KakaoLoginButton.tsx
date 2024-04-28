'use client';

import style from './kakaoLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';
// import {signIn} from "next-auth/react";

type Props = {
  style?: CSSProperties;
};
export default function KakaoLoginButton(props: Props) {
  const router = useRouter();
  const onClickButton = useCallback(async () => {
    try {
      await signIn('kakao');
    } catch (error) {
      if (error instanceof AuthError) {
        console.error(error);
        return '카카오 로그인 실패';
      }
      throw error;
    }
  }, []);

  return (
    <div className={style.container} style={props.style} onClick={onClickButton}>
      <div className={style.button}>
        <div className={style.image}>
          <Image src="/images/login.kakao.svg" alt="No Image" fill objectFit="contain" />
        </div>
        <p>카카오톡으로 시작하기</p>
      </div>
    </div>
  );
}
