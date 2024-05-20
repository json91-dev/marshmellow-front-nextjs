'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useModalStore } from '@/store/modal';
import React from 'react';

export default function ExistPhoneModal() {
  const { isShowExistNumberModal, showExistNumberModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowExistNumberModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowExistNumberModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={style.modal} ref={modalRef}>
          <div className={style.title}>해당 번호로 입사한 이력이 있습니다.</div>
          <div className={style.description}>
            000으로 입사한 이력이 있습니다. <br />
            000으로 로그인해주세요.
          </div>

          <div className={style.firstButton} onClick={() => showExistNumberModal(false)}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
