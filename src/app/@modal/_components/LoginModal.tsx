'use client';
import styles from './LoginModal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';
import { isAppleDevice } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import useAuthLogin from '@/hooks/useAuthLogin';

export default function LoginModal() {
  const { isShowLoginModal, showLoginModal, loginModalStatus } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const [isAppleOS, setIsAppleOS] = useState<boolean>(null!);
  const router = useRouter();
  const { authLogin } = useAuthLogin();

  const onClickLaterButton = useCallback(() => {
    if (loginModalStatus === 'Attendance') {
      router.push('/attendance');
    }

    showLoginModal(false);
  }, [loginModalStatus]);

  useEffect(() => {
    const isAppleOS = isAppleDevice();
    setIsAppleOS(isAppleOS);
  }, []);

  return (
    <>
      <CSSTransition in={isShowLoginModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} onClick={() => showLoginModal(false)} />
      </CSSTransition>

      <CSSTransition in={isShowLoginModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.officeNewbieSignupModal, 'modal')} ref={modalRef}>
          <div className={styles.title}>
            {loginModalStatus === 'Work' && <>{`취준생님의 회사 출근 체험 성공!`}</>}
            {loginModalStatus === 'Lunch' && <>{`취준생님의 구내 식당 점심 체험 성공!`}</>}
            {loginModalStatus === 'WorkEnd' && <>{`취준생님의 회사 퇴근 체험 성공!`}</>}
            {loginModalStatus === 'Attendance' && <>{`입사 후 근태 관리를 할 수 있어요!`}</>}
            {loginModalStatus === 'Service' && <>{`입사 후 서비스를 이용할 수 있어요!`}</>}
          </div>
          <div className={styles.characterImg}>
            <Image src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          </div>
          <div className={styles.description}>
            {loginModalStatus === 'Attendance' && (
              <>{`마시멜로우에 빠르게 입사 지원하고\n열심히 일한 나의 출근 기록을 남겨보세요.`}</>
            )}

            {(loginModalStatus === 'Work' || loginModalStatus === 'WorkEnd' || loginModalStatus === 'Lunch') && (
              <>{`마시멜로우 1개를 보상으로 드릴게요.\n지금 입사지원하고 마시멜로우를 받으세요!`}</>
            )}

            {loginModalStatus === 'Service' && <>{`마시멜로우의 서비스를 이용하기위해\n빠르게 입사 지원 해보세요!`}</>}
          </div>

          <div className={styles.loginButtons}>
            <div className={styles.kakaoButton} onClick={() => authLogin('kakao')}>
              <div className={styles.button}>
                <div className={styles.image}>
                  <Image width={18} height={18} src="/images/login.kakao.svg" alt="No Image" />
                </div>
                <p>카카오톡으로 시작하기</p>
              </div>
            </div>

            {isAppleOS !== null && !isAppleOS ? (
              <div className={styles.googleButton} onClick={() => authLogin('google')}>
                <div className={styles.button}>
                  <div className={styles.image}>
                    <Image width={18} height={18} src="/images/login.google.svg" alt="No Image" />
                  </div>
                  <p>구글로 시작하기</p>
                </div>
              </div>
            ) : (
              <div className={styles.appleButton} onClick={() => authLogin('apple')}>
                <div className={styles.button}>
                  <div className={styles.image}>
                    <Image width={18} height={18} src="/images/login.apple.svg" alt="No Image" />
                  </div>
                  <p>Apple로 시작하기</p>
                </div>
              </div>
            )}
          </div>

          <div className={styles.laterButton} onClick={onClickLaterButton}>
            {loginModalStatus === 'Work' || loginModalStatus === 'WorkEnd' || loginModalStatus === 'Lunch' ? (
              <p>마시멜로우 다음에 받기</p>
            ) : (
              <p>다음에 지원하기</p>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
