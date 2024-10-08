'use client';
import styles from './modal.module.scss';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function QuitInfoModal() {
  const { isShowQuitInfoModal, showQuitInfoModal } = useModalStore();
  const router = useRouter();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowQuitInfoModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowQuitInfoModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.quitInfoModal, 'modal')} ref={modalRef}>
          <div className={styles.title}>정말 나가실건가요?</div>
          <div className={styles.description}>
            지원정보 작성을 중단하시면 입력된 정보들은 저장되지 않고 받은 마시멜로우가 회수됩니다.
          </div>

          <div className={styles.firstButton} onClick={() => showQuitInfoModal(false)}>
            아니오
          </div>
          <div
            className={styles.secondButton}
            onClick={() => {
              showQuitInfoModal(false);
              router.push('/signup/complete');
            }}
          >
            다음에 작성할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
