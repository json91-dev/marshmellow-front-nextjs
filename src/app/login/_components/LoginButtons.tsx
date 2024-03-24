'use client';

import KakaoLoginButton from '@/app/login/_components/KakaoLoginButton';
import { fakeServerCall, isAppleBrowser } from '@/utils/utils';
import AppleLoginButton from '@/app/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/login/_components/GoogleLoginButton';
import React, { memo, useEffect, useRef, useState } from 'react';
import Spinner from '@/app/login/_components/Spinner';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/modal';

export default memo(function LoginButtons() {
  const [isIOS, setIsIOS] = useState<boolean>(null!);
  const { data: session, status } = useSession();
  const isFetchingServer = useRef<boolean>(false);
  const router = useRouter();
  const { showExistNumberModal } = useModalStore();

  useEffect(() => {
    const isIOS = isAppleBrowser();
    setIsIOS(isIOS);
  }, []);

  useEffect(() => {
    if (status === 'authenticated' && !isFetchingServer.current) {
      console.log('authenticated');
      isFetchingServer.current = true;
      fakeServerCall({}).then((result) => {
        if (result.success) {
          console.log(session.accessToken);
          router.push('/signup/identify');
        } else {
          console.log(session.accessToken);
          showExistNumberModal(true);
          console.log('모달 띄우기');
        }
      });
      isFetchingServer.current = false;

      isFetchingServer.current = false;
    } else if (status === 'loading') {
      console.log('loading');
    } else if (status === 'unauthenticated') {
      console.log('unauthenticated');
    }
  }, [status, isFetchingServer]);

  if (isIOS === null) {
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
        {isIOS ? (
          <AppleLoginButton style={{ marginTop: '1rem' }} />
        ) : (
          <GoogleLoginButton style={{ marginTop: '1rem' }} />
        )}
      </>
    );
  }
});
