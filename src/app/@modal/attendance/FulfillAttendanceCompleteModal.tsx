'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
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
        <ModalBackdrop ref={backdropRef} onClick={onClickConfirm} />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceCompleteModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.fulfillAttendanceCompleteModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>{dayjs(fulfillAttendanceCheckedDateString).format('M월 D일')} 출근 보충 완료!</p>
          <Image className={styles.icon} src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          <p className={styles.description}>{'마시멜로우 1개로 출근을 보충했어요!'}</p>
          <button className={styles.confirmButton} onClick={onClickConfirm}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
