'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';

export default function LuckyDrawErrorModal() {
  const { isShowLuckyDrawErrorModal, showLuckyDrawErrorModal, luckyDrawErrorType } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawErrorModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowLuckyDrawErrorModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.luckDrawErrorModal, 'modal')} ref={modalRef}>
          {luckyDrawErrorType === 'DRAW_COUNT_EXCEED' && <p>{`오늘 행운의 뽑기\n횟수가 초과되었어요.`}</p>}
          {luckyDrawErrorType === 'MALLOW_NOT_ENOUGH' && (
            <p>{`마시멜로우가 부족해요!\n마시멜로우를 모아서 도전해주세요.`}</p>
          )}

          <Image src="/images/mallow.sad.2.svg" alt="No Image" width={72} height={72} />
          <button className={styles.confirmButton} onClick={() => showLuckyDrawErrorModal(false, null)}>
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
