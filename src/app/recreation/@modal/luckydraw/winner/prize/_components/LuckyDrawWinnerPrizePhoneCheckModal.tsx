'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';

export default function LuckyDrawWinnerPrizePhoneCheckModal() {
  const { isShowLuckyDrawWinnerPrizePhoneCheckModal, showLuckyDrawWinnerPrizePhoneCheckModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawWinnerPrizePhoneCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowLuckyDrawWinnerPrizePhoneCheckModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.luckyDrawWinnerPrizePhoneCheckModal, 'modal')} ref={modalRef}>
          <p>입력하신 정보가 맞으신가요?</p>
          <p>해당 연락처로 영업일 2~3일 이내 문자로 경품수령 관련 연락을 드려요</p>
          <button className={style.confirmButton} onClick={() => showLuckyDrawWinnerPrizePhoneCheckModal(false)}>
            확인
          </button>
          <button className={style.confirmButton} onClick={() => showLuckyDrawWinnerPrizePhoneCheckModal(false)}>
            다시 입력하기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
