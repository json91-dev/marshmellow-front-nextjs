'use client';
import style from './modal.module.scss';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';

export default function WithdrawConfimCompleteModal() {
  const { isShowWithdrawConfirmCompleteModal, closeAll } = useModalStore();
  const onClickConfirm = useCallback(() => {
    closeAll();
    // router.push('/')
  }, []);
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowWithdrawConfirmCompleteModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowWithdrawConfirmCompleteModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.withdrawConfirmModal, 'modal')} ref={modalRef}>
          <p className={style.title}>탈퇴처리 되었어요</p>
          <p
            className={style.description}
          >{`정보가 안전하게 비활성화 처리되었습니다. 30일간 보관되며 다시 돌아오길 기다리고 있을게요🥺`}</p>
          <div className={style.confirmButton} onClick={onClickConfirm}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
