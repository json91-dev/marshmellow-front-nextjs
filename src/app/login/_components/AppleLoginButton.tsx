'use client';

import style from './appleLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';
import { useMutation } from '@tanstack/react-query';
// import {signIn} from "next-auth/react";

type Props = {
  style?: CSSProperties;
};
export default function AppleLoginButton(props: Props) {
  const router = useRouter();
  const onClickButton = useCallback(async () => {
    try {
      await signIn('apple');
    } catch (error) {
      if (error instanceof AuthError) {
        console.error(error);
        return '구글 로그인 실패';
      }
      throw error;
    }
  }, []);

  return (
    <div className={style.container} style={props.style} onClick={onClickButton}>
      <div className={style.button}>
        <Image src="/images/login.apple.svg" alt={'No Image'} width={21} height={21} style={{ marginBottom: '2px' }} />
        <p>Apple로 시작하기</p>
      </div>
    </div>
  );
}
