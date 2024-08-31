'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';

export default function LuckyDrawPickUpModal() {
  const { isShowLuckyDrawPickUpModal, showLuckyDrawPickUpModal, showLuckyDrawWinningCheckModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawPickUpModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowLuckyDrawPickUpModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.luckyDrawPickUpModal, 'modal')} ref={modalRef}>
          <p>{`마시멜로우 3개를 사용해\n선택한 뽑기를 뽑으시겠어요?`}</p>
          <button
            className={styles.confirmButton}
            onClick={() => {
              showLuckyDrawPickUpModal(false);
              showLuckyDrawWinningCheckModal(true);
            }}
          >
            뽑기
          </button>
          <button className={styles.cancelButton} onClick={() => showLuckyDrawPickUpModal(false)}>
            다음에 하기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
