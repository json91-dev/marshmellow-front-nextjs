'use client';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import styles from '../modal.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function addressChangeQuitModal() {
  const { isShowAddressChangeQuitModal, showAddressChangeQuitModal } = useModalStore();
  const router = useRouter();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowAddressChangeQuitModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowAddressChangeQuitModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.addressChangeQuitModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>배송지를 삭제하실건가요?</p>
          <p className={styles.description}>{'해당 배송지를 삭제하면\n배송지 정보는 다시 불러올 수 없어요.'}</p>
          <button
            className={styles.confirmButton}
            onClick={() => {
              router.back();
              showAddressChangeQuitModal(false);
            }}
          >
            확인
          </button>
          <button className={styles.cancelButton} onClick={() => showAddressChangeQuitModal(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
