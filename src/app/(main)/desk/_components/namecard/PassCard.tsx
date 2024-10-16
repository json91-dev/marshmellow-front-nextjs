'use client';
import styles from './nameCard.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { isAppleDevice } from '@/utils/utils';
import useRedirectOnAuthLogin from '@/hooks/useRedirectOnAuthLogin';
import { signIn } from 'next-auth/react';

export default function PassCard() {
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  useRedirectOnAuthLogin();

  useEffect(() => {
    const isAppleOS = isAppleDevice();
    setIsAppleOS(isAppleOS);
  }, []);

  return (
    <div className={styles.passCard}>
      <div className={styles.topName}>MARSHMALLOW</div>

      <div className={styles.title}>출입증</div>
      <div className={styles.info}>
        <p>
          {'마시멜로우에 입사하시면\n'}
          <span className={'bold'}>{'다양한 혜택'}</span>
          {'과 '}
          <span className={'bold'}>{'이벤트'}</span>
          {'를 즐기실 수 있어요'}
        </p>
      </div>

      <div className={styles.horizontalLine} />

      <div className={styles.loginButtons}>
        <div className={styles.kakaoButton} onClick={() => signIn('kakao', { callbackUrl: '/desk' })}>
          <div className={styles.button}>
            <div className={styles.image}>
              <Image width={18} height={18} src="/images/login.kakao.svg" alt="No Image" />
            </div>
            <p>카카오톡으로 시작하기</p>
          </div>
        </div>

        {isAppleOS !== null && !isAppleOS ? (
          <div className={styles.googleButton} onClick={() => signIn('google', { callbackUrl: '/desk' })}>
            <div className={styles.button}>
              <div className={styles.image}>
                <Image width={18} height={18} src="/images/login.google.svg" alt="No Image" />
              </div>
              <p>구글로 시작하기</p>
            </div>
          </div>
        ) : (
          <div className={styles.appleButton} onClick={() => signIn('apple', { callbackUrl: '/desk' })}>
            <div className={styles.button}>
              <div className={styles.image}>
                <Image width={18} height={18} src="/images/login.apple.svg" alt="No Image" />
              </div>
              <p>Apple로 시작하기</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.logo} />
    </div>
  );
}
