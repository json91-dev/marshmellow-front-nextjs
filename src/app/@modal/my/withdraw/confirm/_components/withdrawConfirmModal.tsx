'use client';
import styles from './modal.module.scss';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { getLocalStorage } from '@/utils/utils';
import { useWithdrawMutation } from '@/api/queries/member';

export default function WithdrawConfimModal() {
  const { isShowWithdrawConfirmModal, showWithdrawConfirmModal, showWithdrawConfirmCompleteModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const { mutate } = useWithdrawMutation();

  const onClickWithdraw = useCallback(() => {
    const reason = getLocalStorage('withdrawReason');
    mutate(reason, {
      onSuccess: () => {
        showWithdrawConfirmModal(false);
        showWithdrawConfirmCompleteModal(true);
      },
      onError: () => {},
      onSettled: () => {},
    });
  }, []);

  const onClickCancel = useCallback(() => {
    showWithdrawConfirmModal(false);
  }, []);

  return (
    <>
      <CSSTransition in={isShowWithdrawConfirmModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowWithdrawConfirmModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.withdrawConfirmModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>정말 탈퇴하실건가요?</p>
          <p className={styles.description}>{`탈퇴시 모든 계정 정보가 삭제되며\n삭제된 정보는 복구할 수 없습니다.`}</p>

          <button className={styles.confirmButton} onClick={onClickWithdraw}>
            탈퇴하기
          </button>
          <button className={styles.cancelButton} onClick={onClickCancel}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
