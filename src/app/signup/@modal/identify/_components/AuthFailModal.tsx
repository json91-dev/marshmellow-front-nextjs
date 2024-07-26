'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import React from 'react';
export default function AuthFailModal() {
  const { isShowAuthFailModal, showAuthFailModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowAuthFailModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowAuthFailModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={style.modal} ref={modalRef}>
          <div className={style.title}>본인인증에 실패했어요.</div>
          <div className={style.description}>
            본인인증에 실패했어요 <br />
            다시 시도해주세요
          </div>
          <div className={style.firstButton} onClick={() => showAuthFailModal(false)}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
