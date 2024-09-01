'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function FulfillAttendanceNoDayModal() {
  const { isShowFulfillAttendanceNoDayModal, showFulfillAttendanceNoDayModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowFulfillAttendanceNoDayModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceNoDayModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.fulfillAttendanceNoDayModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>출근 보충할 날이 없어요.</p>
          <Image className={styles.icon} src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          <p className={styles.description}>{'현재 출근 보충할 날이 없어요!'}</p>
          <button className={styles.confirmButton} onClick={() => showFulfillAttendanceNoDayModal(false)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
