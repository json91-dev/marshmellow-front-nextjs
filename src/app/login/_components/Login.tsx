'use client';

import KakaoLoginButton from '@/app/login/_components/KakaoLoginButton';
import { getLocalStorage, isAppleDevice, setLocalStorage } from '@/utils/utils';
import AppleLoginButton from '@/app/login/_components/AppleLoginButton';
import GoogleLoginButton from '@/app/login/_components/GoogleLoginButton';
import React, { memo, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from '@/app/login/page.module.scss';
import useToastStore from '@/store/toastStore';

export default memo(function Login() {
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  const { data: session, status } = useSession();
  const router = useRouter();
  const isRestoreAccountToastShow = getLocalStorage('RESTORE_ACCOUNT_TOAST_SHOW');
  const { openToast } = useToastStore();

  useEffect(() => {
    const isAppleOS = isAppleDevice();
    setIsAppleOS(isAppleOS);
    if (isRestoreAccountToastShow) {
      openToast('계정이 재활성화되었어요.\n다시 로그인해주세요.😀');
      setLocalStorage('RESTORE_ACCOUNT_TOAST_SHOW', false);
    }
  }, []);

  // TODO: 맨처음 로그인시 타입이 결정되면 이후에 바꾸기 힘듬
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
      } else if (type === 'DISABLED_MEMBER_ACCOUNT') {
        router.replace('/my/restore');
      }
    } else {
      console.log(status);
    }
  }, [status, session]);

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

        <div className={styles.lookAroundButton} onClick={() => router.replace('/desk')}>
          <p>마시멜로우 둘러보기 </p>
        </div>
      </>
    );
  }
});
