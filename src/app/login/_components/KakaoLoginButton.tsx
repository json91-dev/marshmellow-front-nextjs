'use client';

import styles from './kakaoLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react';
import { signIn } from 'next-auth/react';

type Props = {
  style?: CSSProperties;
};
export default function KakaoLoginButton(props: Props) {
  return (
    <div className={styles.container} style={props.style} onClick={() => signIn('kakao')}>
      <div className={styles.button}>
        <Image src="/images/login.kakao.svg" alt="No Image" width={20} height={20} />
        <p>카카오톡으로 시작하기</p>
      </div>
    </div>
  );
}
