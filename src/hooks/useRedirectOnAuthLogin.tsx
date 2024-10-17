'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

/** 로그인 이후 Callback이 넘어왔을때 session 체크후 적절한 페이지로 redirect 시켜주는 로직을 위한 hook **/
const useRedirectOnAuthLogin = (redirectUrlOnSuccess?: string) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session) {
      const type = session.type;
      if (!type) {
        console.log('타입이 존재하지 않습니다.');
        return;
      }
      if (type === 'SIGNIN_SUCCESS') {
        if (redirectUrlOnSuccess) {
          router.replace(redirectUrlOnSuccess);
        }
      } else if (type === 'NEED_IDENTITY') {
        router.push('/signup/identify');
      } else if (type === 'NEED_REGISTER') {
        router.push('/signup/info');
      } else if (type === 'DISABLED_MEMBER_ACCOUNT') {
        router.replace('/my/restore');
      }
    }
  }, [status, session]);
};

export default useRedirectOnAuthLogin;
