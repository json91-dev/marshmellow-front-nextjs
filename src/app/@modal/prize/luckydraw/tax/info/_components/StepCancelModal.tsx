'use client';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import styles from '@/moduleStyle/Modal.module.scss';
import { useRouter } from 'next/navigation';
export default function StepCancelModal() {
  const { isShowPrizeLuckyDrawTaxInfoCancel, showPrizeLuckyDrawTaxInfoCancel } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const router = useRouter();

  return (
    <>
      <CSSTransition in={isShowPrizeLuckyDrawTaxInfoCancel} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowPrizeLuckyDrawTaxInfoCancel}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.confirmCancelModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>작성을 중단하시나요?</p>

          <p className={styles.description}>{'작성 중인 내용은 다음에 이어서\n 작성 할 수 있어요.'}</p>

          <button
            className={styles.confirmButton}
            onClick={() => {
              router.back();
              showPrizeLuckyDrawTaxInfoCancel(false);
            }}
          >
            중단하기
          </button>

          <button className={styles.cancelButton} onClick={() => showPrizeLuckyDrawTaxInfoCancel(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
