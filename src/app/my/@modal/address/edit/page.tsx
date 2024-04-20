'use client';
import { useModalStore } from '@/store/modal';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import style from '../modal.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function addressChangeQuitModal() {
  const { isShowAddressChangeQuitModal, showAddressChangeQuitModal } = useModalStore();
  const router = useRouter();
  return (
    <>
      <CSSTransition in={isShowAddressChangeQuitModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowAddressChangeQuitModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.addressChangeQuitModal, 'modal')}>
          <p className={style.title}>배송지를 삭제하실건가요?</p>
          <p className={style.description}>{'해당 배송지를 삭제하면\n배송지 정보는 다시 불러올 수 없어요.'}</p>
          <button className={style.confirmButton} onClick={() => router.back()}>
            확인
          </button>
          <button className={style.cancelButton} onClick={() => showAddressChangeQuitModal(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
