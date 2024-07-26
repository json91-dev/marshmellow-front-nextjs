'use client';
import style from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function FulfillAttendanceDateCheckModal() {
  const {
    isShowFulfillAttendanceDateCheckModal,
    showFulfillAttendanceDateCheckModal,
    fulfillAttendanceCheckedDateString,
    showFulfillAttendanceCompleteModal,
  } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const onClickConfirm = useCallback(() => {
    showFulfillAttendanceDateCheckModal(false, fulfillAttendanceCheckedDateString);
    showFulfillAttendanceCompleteModal(true);
  }, [fulfillAttendanceCheckedDateString]);

  return (
    <>
      <CSSTransition in={isShowFulfillAttendanceDateCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} onClick={() => showFulfillAttendanceDateCheckModal(false)} />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceDateCheckModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.fulfillAttendanceDateCheckModal, 'modal')} ref={modalRef}>
          <p className={style.title}>{dayjs(fulfillAttendanceCheckedDateString).format('M월 D일')} 출근 보충하기</p>
          <Image className={style.icon} src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          <p className={style.description}>{'광고를 끝까지 시청해야 보상으로\n출근일수를 채울 수 있어요!'}</p>
          <button className={style.confirmButton} onClick={onClickConfirm}>
            <Image
              style={{ marginRight: '0.6rem', marginBottom: '0.1rem' }}
              src="/images/advertise.svg"
              alt="No Image"
              width={20}
              height={20}
            />
            광고보고 출근 보충하기
          </button>
          <button className={style.cancelButton} onClick={() => showFulfillAttendanceDateCheckModal(false)}>
            다음에 하기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
