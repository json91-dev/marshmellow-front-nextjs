'use client';
import styles from './RestoreWelcomeModal.module.scss';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';
import { getLocalStorage } from '@/utils/utils';
import dayjs from 'dayjs';

export default function RestoreWelcomeModal() {
  const { isShowRestoreWelcomeModal, showRestoreWelcomeModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const restoreAccountDate = getLocalStorage('RESTORE_ACCOUNT_DATE');

  return (
    <>
      <CSSTransition in={isShowRestoreWelcomeModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowRestoreWelcomeModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <dialog className={cx(styles.restoreWelcomeModal, 'modal')} ref={modalRef}>
          <h1 className={styles.title}>{'다시 돌아오신걸 환영해요!\n로그인 후 서비스를 시작해 보세요.'}</h1>
          <Image src="/images/mallow.happy.pink.svg" alt="No Image" width={72} height={72} style={{ marginTop: '1.2rem' }} />
          <p
            className={styles.description}
          >{`${dayjs(restoreAccountDate).format('YYYY. MM. DD')}\n계정이 활성화 됐습니다.`}</p>
          <button className={styles.confirmButton} onClick={() => showRestoreWelcomeModal(false)}>
            <p>확인</p>
          </button>
        </dialog>
      </CSSTransition>
    </>
  );
}
