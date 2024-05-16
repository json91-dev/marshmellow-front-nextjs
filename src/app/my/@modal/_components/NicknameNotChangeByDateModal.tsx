'use client';
import style from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';

export default function NicknameNotChangeByDateModal() {
  const { isShowNicknameNotChangeByDateModal, showNicknameNotChangeByDateModal, nicknameChangeRemainDays } =
    useModalStore();

  return (
    <>
      <CSSTransition in={isShowNicknameNotChangeByDateModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowNicknameNotChangeByDateModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.nicknameNotChangeByDateModal, 'modal')}>
          <p className={style.title}>{`${nicknameChangeRemainDays}일 후에 변경이 가능해요.`}</p>
          <p className={style.description}>{'닉네임 변경 후 30일 이후에 변경 가능해요.'}</p>

          <button className={style.confirmButton} onClick={() => showNicknameNotChangeByDateModal(false)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
