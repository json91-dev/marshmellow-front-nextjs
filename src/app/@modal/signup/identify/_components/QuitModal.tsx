'use client';
import styles from './modal.module.scss';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import useModalStore from '@/store/modalStore';
import { router } from 'next/client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function QuitModal() {
  const { isShowQuitModal, showQuitModal } = useModalStore();
  const router = useRouter();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowQuitModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowQuitModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={styles.signUpModal} ref={modalRef}>
          <div className={styles.title}>정말 나가실건가요?</div>
          <div className={styles.description}>현재 입사지원을 중단하시면 입력된 정보들은 저장되지 않습니다.</div>

          <div className={styles.firstButton}>계속 진행할게요!</div>
          <div
            className={styles.secondButton}
            onClick={async () => {
              showQuitModal(false);
              await signOut({ callbackUrl: '/login' });
            }}
          >
            다음에 지원할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
