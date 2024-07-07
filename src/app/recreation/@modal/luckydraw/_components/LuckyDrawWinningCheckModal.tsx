'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';

export default function LuckyDrawWinningCheckModal() {
  const { isShowLuckyDrawWinningCheckModal, showLuckyDrawWinningCheckModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawWinningCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowLuckyDrawWinningCheckModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(style.luckyDrawWinningCheckModal, 'modal')} ref={modalRef}></div>
      </CSSTransition>
    </>
  );
}
