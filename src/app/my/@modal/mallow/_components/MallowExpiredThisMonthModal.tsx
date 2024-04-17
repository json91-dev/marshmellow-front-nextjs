'use client';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import style from './modal.module.scss';
import React from 'react';
import { useModalStore } from '@/store/modal';

export default function MallowExpiredThisMonthModal() {
  const { isShowMallowExpiredThisMonthModal, showMallowExpiredThisMonthModal } = useModalStore();
  return (
    <>
      <CSSTransition in={isShowMallowExpiredThisMonthModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowMallowExpiredThisMonthModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.mallowExpiredThisMonthModal, 'modal')}>
          <p className={style.title}>당월 소멸 예정 마시멜로우: 0개 </p>
          <p className={style.description}>{'매월 말일 0시에 소멸됩니다.\n(예: 1월 기준, 30일에서 31일이 되는 0시)'}</p>
          <button className={style.confirmButton} onClick={() => showMallowExpiredThisMonthModal(false)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
