'use client';
import style from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';

export default function WorkTimeNotChangeByTimeModal() {
  const { isShowWorkTimeNotChangeByTimeModal, showWorkTimeNotChangeByTimeModal } = useModalStore();

  return (
    <>
      <CSSTransition in={isShowWorkTimeNotChangeByTimeModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowWorkTimeNotChangeByTimeModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.workTimeNotChangeByTimeModal, 'modal')}>
          <p className={style.title}>{'08시 ~ 19시에는 변경이 불가능해요.'}</p>
          <p className={style.description}>{'근무시간이 지나고 변경해주세요!'}</p>

          <button className={style.confirmButton} onClick={() => showWorkTimeNotChangeByTimeModal(false)}>
            {'확인'}
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
