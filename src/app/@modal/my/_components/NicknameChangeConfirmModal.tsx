'use client';
import styles from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { getLocalStorage } from '@/utils/utils';
import useToastStore from '@/store/toastStore';
import { useQueryClient } from '@tanstack/react-query';
import { useChangeNicknameMutation } from '@/hooks/queries/member';

export default function NicknameChangeConfirmModal() {
  const { isShowNicknameChangeConfirmModal, showNicknameChangeConfirmModal } = useModalStore();
  const nickname = getLocalStorage('nickname');
  const { mutate } = useChangeNicknameMutation();
  const { openToast } = useToastStore();
  const queryClient = useQueryClient();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  const changeNickname = () => {
    mutate(nickname, {
      onSuccess: (data, variables, context) => {
        openToast('내 닉네임이 변경되었어요.');
        showNicknameChangeConfirmModal(false);
        queryClient.invalidateQueries({ queryKey: ['me', 'profile'] }).then();
        queryClient.invalidateQueries({ queryKey: ['me'] }).then();
      },
      onError: (data, variables, context) => {
        openToast('닉네임 변경에 실패했어요.');
        showNicknameChangeConfirmModal(false);
      },
    });
  };

  return (
    <>
      <CSSTransition in={isShowNicknameChangeConfirmModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowNicknameChangeConfirmModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.nicknameChangeConfirmModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>{`${nickname} 님으로 변경하시겠어요?`}</p>
          <p className={styles.description}>{'닉네임 변경 후 30일 이후에 변경 가능합니다.'}</p>

          <button className={styles.confirmButton} onClick={changeNickname}>
            변경하기
          </button>
          <button className={styles.cancelButton} onClick={() => showNicknameChangeConfirmModal(false)}>
            취소
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
