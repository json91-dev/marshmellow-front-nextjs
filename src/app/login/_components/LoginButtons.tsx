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

  const mutation = useMutation({
    async mutationFn(data: { accessToken: string; vendor: string; idToken: string }) {
      const { accessToken, vendor, idToken } = data;
      console.log(data);

      if (vendor === 'kakao') {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accessToken: accessToken, vendor: vendor }),
        });
      } else if (vendor === 'google') {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accessToken: idToken, vendor: vendor }),
        });
      }
    },
    async onSuccess(response: any) {
      const result = response.json();
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
    if (status === 'authenticated') {
      mutation.mutate({
        accessToken: session.accessToken,
        vendor: session.vendor,
        idToken: session.idToken,
      });
    }
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
          // <AppleLoginButton style={{ marginTop: '1rem' }} />
          <GoogleLoginButton style={{ marginTop: '1rem' }} />
        ) : (
          <GoogleLoginButton style={{ marginTop: '1rem' }} />
        )}
      </>
    );
  }
});
