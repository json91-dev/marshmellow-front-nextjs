'use client';
import styles from './appleLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react';
import { signIn } from 'next-auth/react';

type Props = {
  style?: CSSProperties;
};
export default function AppleLoginButton(props: Props) {
  return (
    <div className={styles.container} style={props.style} onClick={() => signIn('apple')}>
      <div className={styles.button}>
        <Image src="/images/login.apple.svg" alt={'No Image'} width={21} height={21} style={{ marginBottom: '2px' }} />
        <p>Apple로 시작하기</p>
      </div>
    </div>
  );
}
