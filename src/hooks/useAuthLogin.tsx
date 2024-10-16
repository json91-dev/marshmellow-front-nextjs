'use client';
import { useCallback } from 'react';
import { signIn, SignInOptions } from 'next-auth/react';
import AuthError from 'next-auth';

export default function useAuthLogin() {
  const authLogin = useCallback(async (provider: 'kakao' | 'google' | 'apple', callbackUrl?: string) => {
    const options: SignInOptions = callbackUrl ? { callbackUrl } : {};
    try {
      if (provider === 'kakao') {
        await signIn('kakao', options);
      } else if (provider === 'google') {
        await signIn('google, options');
      } else if (provider === 'apple') {
        await signIn('apple', options);
      }
    } catch (error) {
      if (error instanceof AuthError) {
        console.error(error);
        return '로그인 실패';
      }
      throw error;
    }
  }, []);

  return {
    authLogin,
  };
}
