'use client';
import { useCallback } from 'react';
import { signIn } from 'next-auth/react';
import AuthError from 'next-auth';

export default function useAuthLogin() {
  const authLogin = useCallback(async (provider: 'kakao' | 'google' | 'apple') => {
    try {
      if (provider === 'kakao') {
        await signIn('kakao');
      } else if (provider === 'google') {
        await signIn('google');
      } else if (provider === 'apple') {
        await signIn('apple');
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
