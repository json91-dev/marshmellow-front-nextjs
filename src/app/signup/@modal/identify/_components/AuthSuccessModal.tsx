'use client';

import styles from './modal.module.scss';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import React from 'react';
export default function AuthSuccessModal() {
  const { isShowAuthSuccessModal, showAuthSuccessModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowAuthSuccessModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowAuthSuccessModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={styles.signUpModal} ref={modalRef}>
          <div className={styles.title}>
            본인인증이 완료되었습니다. <br />
            지원정보를 작성후 제출하시겠어요?
          </div>
          <div className={styles.description}>
            지원정보를 작성해주시면 <br />
            마시멜로우 10개를 드려요!
          </div>

          <div className={styles.firstButton}>지원 정보 작성하기</div>
          <div className={styles.secondButton} onClick={() => showAuthSuccessModal(true)}>
            다음에 작성할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
