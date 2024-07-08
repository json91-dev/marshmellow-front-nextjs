'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { AuthError } from 'next-auth';
import { isAppleDevice } from '@/utils/utils';
import { useRouter } from 'next/navigation';

export default function OfficeNewbieSignupModal() {
  const { isShowOfficeNewbieSignupModal, showOfficeNewbieSignupModal, officeNewbieSignupStatus } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  const router = useRouter();

  const authLogin = useCallback(async (provider: string) => {
    try {
      if (provider === 'kakao') {
        await signIn('kakao');
      } else if (provider === 'google') {
        await signIn('google');
      }
    } catch (error) {
      if (error instanceof AuthError) {
        console.error(error);
        return '로그인 실패';
      }
      throw error;
    }
  }, []);

  const onClickLaterButton = useCallback(() => {
    if (officeNewbieSignupStatus === 'idle') {
      router.push('/attendance');
    }

    showOfficeNewbieSignupModal(false);
  }, [officeNewbieSignupStatus]);

  useEffect(() => {
    const isAppleOS = isAppleDevice();
    setIsAppleOS(isAppleOS);
  }, []);

  return (
    <>
      <CSSTransition in={isShowOfficeNewbieSignupModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowOfficeNewbieSignupModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(style.officeNewbieSignupModal, 'modal')} ref={modalRef}>
          <div className={style.title}>
            {officeNewbieSignupStatus === 'work' && <>{`취준생님의 회사 출근 체험 성공!`}</>}
            {officeNewbieSignupStatus === 'workEnd' && <>{`취준생님의 구내 식당 점심 체험 성공!`}</>}
            {officeNewbieSignupStatus === 'lunch' && <>{`취준생님의 회사 퇴근 체험 성공!`}</>}
            {officeNewbieSignupStatus === 'idle' && <>{`입사 후 근태 관리를 할 수 있어요!`}</>}
          </div>
          <div className={style.characterImg}>
            <Image src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          </div>
          <div className={style.description}>
            {officeNewbieSignupStatus === 'idle' ? (
              <>{`마시멜로우에 빠르게 입사 지원하고\n열심히 일한 나의 출근 기록을 남겨보세요.`}</>
            ) : (
              <>{`마시멜로우 1개를 보상으로 드릴게요.\n지금 입사지원하고 마시멜로우를 받으세요!`}</>
            )}
          </div>

          <div className={style.loginButtons}>
            <div className={style.kakaoButton} onClick={() => authLogin('kakao')}>
              <div className={style.button}>
                <div className={style.image}>
                  <Image width={18} height={18} src="/images/login.kakao.svg" alt="No Image" />
                </div>
                <p>카카오톡으로 시작하기</p>
              </div>
            </div>

            <div className={style.googleButton} onClick={() => authLogin('google')}>
              <div className={style.button}>
                <div className={style.image}>
                  <Image width={18} height={18} src="/images/login.google.svg" alt="No Image" />
                </div>
                <p>구글로 시작하기</p>
              </div>
            </div>

            {/*{isAppleOS !== null && !isAppleOS ? (*/}
            {/*  <div className={style.googleButton} onClick={() => authLogin('google')}>*/}
            {/*    <div className={style.button}>*/}
            {/*      <div className={style.image}>*/}
            {/*        <Image width={18} height={18} src="/images/login.google.svg" alt="No Image" />*/}
            {/*      </div>*/}
            {/*      <p>구글로 시작하기</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <div className={style.appleButton} onClick={() => authLogin('apple')}>*/}
            {/*    <div className={style.button}>*/}
            {/*      <div className={style.image}>*/}
            {/*        <Image width={18} height={18} src="/images/login.apple.svg" alt="No Image" />*/}
            {/*      </div>*/}
            {/*      <p>Apple로 시작하기</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>

          <div className={style.laterButton} onClick={onClickLaterButton}>
            {officeNewbieSignupStatus === 'idle' ? <p>다음에 지원하기</p> : <p>마시멜로우 다음에 받기</p>}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
