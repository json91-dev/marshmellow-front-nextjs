'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function FulfillAttendanceCompleteModal() {
  const {
    isShowFulfillAttendanceCompleteModal,
    showFulfillAttendanceCompleteModal,
    showFulfillAttendanceDateSelectModal,
    fulfillAttendanceCheckedDateString,
  } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const onClickConfirm = useCallback(() => {
    showFulfillAttendanceDateSelectModal(false);
    showFulfillAttendanceCompleteModal(false);
  }, []);

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
        <div className={cx(style.fulfillAttendanceCompleteModal, 'modal')} ref={modalRef}>
          <p className={style.title}>{dayjs(fulfillAttendanceCheckedDateString).format('M월 D일')} 출근 보충 완료!</p>
          <Image className={style.icon} src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          <p className={style.description}>{'마시멜로우 1개로 출근을 보충했어요!'}</p>
          <button className={style.confirmButton} onClick={onClickConfirm}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
