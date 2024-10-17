'use client';

import KakaoLoginButton from '@/app/login/_components/KakaoLoginButton';
import { getLocalStorage, isAppleDevice, setLocalStorage } from '@/utils/utils';
import AppleLoginButton from '@/app/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/login/_components/GoogleLoginButton';
import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/login/page.module.scss';
import useToastStore from '@/store/toastStore';
import useRedirectOnAuthLogin from '@/hooks/useRedirectOnAuthLogin';

export default memo(function Login() {
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  const router = useRouter();
  const isRestoreAccountToastShow = getLocalStorage('RESTORE_ACCOUNT_TOAST_SHOW');
  const { openToast } = useToastStore();
  useRedirectOnAuthLogin('/office'); // 로그인 후 적절한 페이지로 리다이렉션 처리

  useEffect(() => {
    const isAppleOS = isAppleDevice();
    setIsAppleOS(isAppleOS);
    if (isRestoreAccountToastShow) {
      openToast('계정이 재활성화되었어요.\n다시 로그인해주세요.😀');
      setLocalStorage('RESTORE_ACCOUNT_TOAST_SHOW', false);
    }
  }, []);

  if (isAppleOS === null) {
    return (
      <>
        <KakaoLoginButton style={{ marginTop: '2rem' }} />
      </>
    );
  } else {
    return (
      <>
        <KakaoLoginButton style={{ marginTop: '2rem' }} />
        {isAppleOS ? (
          <AppleLoginButton style={{ marginTop: '1rem' }} />
        ) : (
          <GoogleLoginButton style={{ marginTop: '1rem' }} />
        )}

        <div className={styles.lookAroundButton} onClick={() => router.push('/desk')}>
          <p>마시멜로우 둘러보기 </p>
        </div>
      </>
    );
  }
});
