'use client';
import style from './nameCard.module.scss';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { isAppleBrowser } from '@/utils/utils';
import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';

export default function PassCard() {
  const [isIOS, setIsIOS] = useState<boolean>(null!);

  const loginKakao = useCallback(async () => {
    try {
      await signIn('kakao');
    } catch (error) {
      if (error instanceof AuthError) {
        console.error(error);
        return '카카오 로그인 실패';
      }
      throw error;
    }
  }, []);

  useEffect(() => {
    const isIOS = isAppleBrowser();
    setIsIOS(isIOS);
  }, []);

  return (
    <div className={style.passCard}>
      <div className={style.topName}>MARSHMALLOW</div>

      <div className={style.title}>출입증</div>
      <div className={style.info}>
        <p>
          {'마시멜로우에 입사하시면\n'}
          <span className={'bold'}>{'다양한 혜택'}</span>
          {'과 '}
          <span className={'bold'}>{'이벤트'}</span>
          {'를 즐기실 수 있어요'}
        </p>
      </div>

      <div className={style.horizontalLine} />

      <div className={style.loginButtons}>
        <div className={style.kakaoButton}>
          <div className={style.button} onClick={() => loginKakao()}>
            <div className={style.image}>
              <Image width={18} height={18} src="/images/login.kakao.svg" alt="No Image" />
            </div>
            <p>카카오톡으로 시작하기</p>
          </div>
        </div>

        <div className={style.googleButton}>
          <div className={style.button}>
            <div className={style.image}>
              <Image width={18} height={18} src="/images/login.google.svg" alt="No Image" />
            </div>
            <p>구글로 시작하기</p>
          </div>
        </div>

        {/* TODO: 애플 로그인 미구현 => 구현 이후 설정 */}
        {/*<div className={style.appleButton}>*/}
        {/*  <div className={style.button}>*/}
        {/*    <div className={style.image}>*/}
        {/*      <Image width={18} height={18} src="/images/login.apple.svg" alt="No Image" />*/}
        {/*    </div>*/}
        {/*    <p>Apple로 시작하기</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className={style.logo} />
    </div>
  );
}
