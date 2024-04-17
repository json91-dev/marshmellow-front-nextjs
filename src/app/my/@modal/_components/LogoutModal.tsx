'use client';
import style from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';

export default function LogoutModal() {
  const { isShowLogoutModal, showLogoutModal } = useModalStore();

  return (
    <>
      <CSSTransition in={isShowLogoutModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowLogoutModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.logoutModal, 'modal')}>
          <p className={style.title}>로그아웃 하시겠어요?</p>
          <p className={style.description}>{'로그아웃시 로그인 화면으로 이동해요.\n다시 출근해주실거죠?'}</p>

          <button className={style.confirmButton} onClick={() => showLogoutModal(false)}>
            확인
          </button>
          <button className={style.cancelButton} onClick={() => showLogoutModal(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
