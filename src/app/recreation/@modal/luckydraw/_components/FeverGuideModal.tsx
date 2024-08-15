'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';

export default function FeverGuideModal() {
  const { isShowFeverGuideModal, showFeverGuideModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowFeverGuideModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowFeverGuideModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.feverGuideModal, 'modal')} ref={modalRef}>
          <p>피버 게이지란?</p>
          <p>
            {`행운의 뽑기에 00회 참여하면 Fever time이 발동해 1회 무료로 뽑기가 가능해요.\n1일 뽑기 횟수에는 포함이 되지 않아요.`}
          </p>
          <button className={styles.confirmButton} onClick={() => showFeverGuideModal(false)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
