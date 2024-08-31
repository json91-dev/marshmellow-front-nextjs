'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import { useRouter } from 'next/navigation';

export default function LuckyDrawWinnerPrizePhoneCheckModal() {
  const { isShowLuckyDrawWinnerPrizePhoneCheckModal, showLuckyDrawWinnerPrizePhoneCheckModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const router = useRouter();

  return (
    <>
      <CSSTransition in={isShowLuckyDrawWinnerPrizePhoneCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowLuckyDrawWinnerPrizePhoneCheckModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.luckyDrawWinnerPrizePhoneCheckModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>입력하신 정보가 맞으신가요?</p>
          <p className={styles.description}>{'해당 연락처로 영업일 2~3일 이내\n 문자로 경품수령 관련 연락을 드려요'}</p>

          <div className={styles.phoneInfoBox}>
            <p>연락처</p>
            <p>010-0000-0000</p>
          </div>

          <button
            className={styles.confirmButton}
            onClick={() => {
              showLuckyDrawWinnerPrizePhoneCheckModal(false);
              router.push('/recreation/luckydraw/winner/prize?step=2');
            }}
          >
            확인
          </button>
          <button className={styles.cancelButton} onClick={() => showLuckyDrawWinnerPrizePhoneCheckModal(false)}>
            다시 입력하기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
