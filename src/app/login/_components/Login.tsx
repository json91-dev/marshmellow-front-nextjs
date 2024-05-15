'use client';

import KakaoLoginButton from '@/app/login/_components/KakaoLoginButton';
import { fakeServerCall, isMacintosh, setLocalStorage } from '@/utils/utils';
import AppleLoginButton from '@/app/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/login/_components/GoogleLoginButton';
import React, { memo, useEffect, useRef, useState } from 'react';
import Spinner from '@/app/login/_components/Spinner';
import { useSession, signOut, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/modal';
import style from '@/app/login/login.module.scss';

export default memo(function Login() {
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    const isAppleOS = isMacintosh();
    setIsAppleOS(isAppleOS);
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      const type = session.type;
      console.log('현재 상태 : ' + type);
      if (!type) {
        console.log('타입이 존재하지 않습니다. (로그인 실패)');
        return;
      }

      if (type === 'NEED_IDENTITY') {
        router.push('/signup/identify');
      } else if (type === 'NEED_REGISTER') {
        router.push('/signup/info');
      } else if (type === 'SIGNIN_SUCCESS') {
        router.replace('/desk');
      }
    } else {
      console.log(status);
    }
  }, [status, session]);

  if (isAppleOS === null) {
    return (
      <>
        <KakaoLoginButton style={{ marginTop: '2rem' }} />
        <div
          style={{ marginTop: '1rem', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Spinner />
        </div>
      </>
    );
  } else {
    return (
      <>
        <KakaoLoginButton style={{ marginTop: '2rem' }} />
        {/*<GoogleLoginButton style={{ marginTop: '1rem' }} />*/}
        {isAppleOS ? (
          <AppleLoginButton style={{ marginTop: '1rem' }} />
        ) : (
          <GoogleLoginButton style={{ marginTop: '1rem' }} />
        )}

        <div className={style.lookAroundButton} onClick={() => router.replace('/desk')}>
          <p>마시멜로우 둘러보기 </p>
        </div>
      </>
    );
  }
});
