'use client';

import KakaoLoginButton from '@/app/(beforeLogin)/login/_components/KakaoLoginButton';
import { isAppleBrowser } from '@/utils/utils';
import AppleLoginButton from '@/app/(beforeLogin)/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/(beforeLogin)/login/_components/GoogleLoginButton';
import React, { useEffect, useState } from 'react';
import Spinner from '@/app/(beforeLogin)/login/_components/Spinner';

export default function LoginButtons() {
  const [isIOS, setIsIOS] = useState<boolean>(null!);

  useEffect(() => {
    const isIOS = isAppleBrowser();
    setIsIOS(isIOS);
  }, []);

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
}
