'use client';
import styles from './modal.module.scss';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { getLocalStorage, setLocalStorage } from '@/utils/utils';
import useWithdrawMutation from '@/api/mutations/member/useWithdrawMutation';
import useToastStore from '@/store/toastStore';
import { signOut } from 'next-auth/react';

export default function WithdrawConfimModal() {
  const { isShowWithdrawConfirmModal, showWithdrawConfirmModal, showWithdrawConfirmCompleteModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const { mutate } = useWithdrawMutation();
  const { openToast } = useToastStore();

  const onClickWithdraw = useCallback(async () => {
    const reason = getLocalStorage('withdrawalReason');
    const withdrawalReason = await getLocalStorage('withdrawalReason');
    if (!withdrawalReason) {
      openToast('회원탈퇴가 정상적으로 처리되지 않았습니다.');
      return;
    }

    mutate(reason, {
      onSuccess: async () => {
        openToast('회원탈퇴 처리가 완료되었습니다.\n로그인 화면으로 이동합니다.');
        showWithdrawConfirmModal(false);
        showWithdrawConfirmCompleteModal(true);
        setLocalStorage('withdrawalReason', '');
      },
      onError: (error) => {
        console.log(error);
        openToast('회원탈퇴 처리 실패');
        showWithdrawConfirmModal(false);
      },
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
