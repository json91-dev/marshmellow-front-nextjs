'use client';
import styles from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';

export default function NicknameNotChangeByDateModal() {
  const { isShowNicknameNotChangeByDateModal, showNicknameNotChangeByDateModal, nicknameChangeRemainDays } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowNicknameNotChangeByDateModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowNicknameNotChangeByDateModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.nicknameNotChangeByDateModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>{`${nicknameChangeRemainDays}일 후에 변경이 가능해요.`}</p>
          <p className={styles.description}>{'닉네임 변경 후 30일 이후에 변경 가능해요.'}</p>

          <button className={styles.confirmButton} onClick={() => showNicknameNotChangeByDateModal(false)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
