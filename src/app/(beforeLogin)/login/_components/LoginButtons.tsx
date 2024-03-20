'use client';

import KakaoLoginButton from '@/app/(beforeLogin)/login/_components/KakaoLoginButton';
import { isMobile } from '@/utils/utils';
import AppleLoginButton from '@/app/(beforeLogin)/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/(beforeLogin)/login/_components/GoogleLoginButton';
import React from 'react';

export default function LoginButtons() {
  return (
    <>
      <KakaoLoginButton style={{ marginTop: '2rem' }} />
      {isMobile.iOS() ? (
        <AppleLoginButton style={{ marginTop: '1rem' }} />
      ) : (
        <GoogleLoginButton style={{ marginTop: '1rem' }} />
      )}
    </>
  );
}
