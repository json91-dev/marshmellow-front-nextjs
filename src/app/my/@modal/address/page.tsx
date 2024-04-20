'use client';
import { useModalStore } from '@/store/modal';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import style from '@/app/my/@modal/mallow/_components/modal.module.scss';
import React from 'react';

export default function addressDeleteModal() {
  const { isShowAddressDeleteModal, showAddressDeleteModal } = useModalStore();
  return (
    <>
      <CSSTransition in={isShowAddressDeleteModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowAddressDeleteModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.mallowExpiredThisMonthModal, 'modal')}>
          <p className={style.title}>배송지를 삭제하실건가요?</p>
          <p className={style.description}>{'해당 배송지를 삭제하면\n배송지 정보는 다시 불러올 수 없어요.'}</p>
          <button className={style.confirmButton} onClick={() => showAddressDeleteModal(false)}>
            확인
          </button>
          <button className={style.cancelButton} onClick={() => showAddressDeleteModal(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
