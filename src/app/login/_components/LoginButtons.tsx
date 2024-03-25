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
import { useMutation } from '@tanstack/react-query';

export default memo(function LoginButtons() {
  const [isIOS, setIsIOS] = useState<boolean>(null!);
  const { data: session, status } = useSession();
  const isFetchingServer = useRef<boolean>(false);
  const router = useRouter();
  const { showExistNumberModal } = useModalStore();
  // signOut();

  const mutation = useMutation({
    async mutationFn(data: { accessToken: string; vendor: string }) {
      const { accessToken, vendor } = data;
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: accessToken, vendor: vendor }),
      });
    },
    async onSuccess(response: any) {
      const result = response.json();
      console.log(result);
    },

    onError: (error: string) => {
      console.error(error);
      alert('업로드 중 에러가 발생했습니다.');
    },
    onSettled() {},
  });

  useEffect(() => {
    const isIOS = isAppleBrowser();
    setIsIOS(isIOS);
  }, []);

  useEffect(() => {
    console.log(status);
    if (status === 'authenticated') {
      console.log(session.vendor);
      mutation.mutate({ accessToken: session.accessToken, vendor: 'Kakao' });
    }

    // if (status === 'authenticated' && !isFetchingServer.current) {
    //   console.log('authenticated');
    //   isFetchingServer.current = true;
    //   fakeServerCall({}).then((result) => {
    //     if (result.success) {
    //       console.log(session);
    //       console.log(session.accessToken);
    //       router.push('/signup/identify');
    //     } else {
    //       console.log(session);
    //       console.log(session.accessToken);
    //       showExistNumberModal(true);
    //       signOut();
    //       console.log('모달 띄우기');
    //     }
    //   });
    //   isFetchingServer.current = false;
    //
    //   isFetchingServer.current = false;
    // } else if (status === 'loading') {
    //   console.log('loading');
    // } else if (status === 'unauthenticated') {
    //   console.log('unauthenticated');
    // }
  }, [status]);

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
