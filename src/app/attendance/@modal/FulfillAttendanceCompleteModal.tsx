'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';

export default function FulfillAttendanceCompleteModal() {
  const { isShowFulfillAttendanceCompleteModal, showFulfillAttendanceCompleteModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowFulfillAttendanceCompleteModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceCompleteModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.fulfillAttendanceCompleteModal, 'modal')} ref={modalRef}></div>
      </CSSTransition>
    </>
  );
}
