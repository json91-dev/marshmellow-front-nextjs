'use client';

import styles from './kakaoLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react';
import { signIn } from 'next-auth/react';
import AuthError from 'next-auth';

type Props = {
  style?: CSSProperties;
};
export default function KakaoLoginButton(props: Props) {
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
    <div className={styles.container} style={props.style} onClick={onClickButton}>
      <div className={styles.button}>
        <Image src="/images/login.kakao.svg" alt="No Image" width={20} height={20} />
        <p>카카오톡으로 시작하기</p>
      </div>
    </div>
  );
}
