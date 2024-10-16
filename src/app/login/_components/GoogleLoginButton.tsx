'use client';

import styles from './googleLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback, useEffect } from 'react';
import { signIn } from 'next-auth/react';

type Props = {
  style?: CSSProperties;
};
export default function GoogleLoginButton(props: Props) {
  return (
    <div className={styles.container} style={props.style} onClick={() => signIn('google')}>
      <div className={styles.button}>
        <Image src="/images/login.google.svg" width={20} height={20} alt={'No Image'} style={{ marginTop: '2px' }} />
        <p>구글로 시작하기</p>
      </div>
    </div>
  );
}
