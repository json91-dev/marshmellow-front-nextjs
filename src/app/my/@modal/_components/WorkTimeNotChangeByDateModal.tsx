'use client';
import style from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';

export default function WorkTimeNotChangeByDateModal() {
  const { isShowWorkTimeNotChangeByDateModal, showWorkTimeNotChangeByDateModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowWorkTimeNotChangeByDateModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowWorkTimeNotChangeByDateModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.nicknameNotChangeByDateModal, 'modal')} ref={modalRef}>
          <p className={style.title}>{'00일 후에 변경이 가능해요.'}</p>
          <p className={style.description}>{'최종 변경 이후 7일이 지나야 변경이 가능해요.'}</p>

          <button className={style.confirmButton} onClick={() => showWorkTimeNotChangeByDateModal(false)}>
            {'확인'}
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
