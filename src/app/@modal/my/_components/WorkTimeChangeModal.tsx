'use client';
import styles from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { useWorkTimeChangeMutation } from '@/api/queries/member';
import useToastStore from '@/store/toastStore';
import { useQueryClient } from '@tanstack/react-query';

export default function WorkTimeChangeModal() {
  const { isShowWorkTimeChangeModal, showWorkTimeChangeModal, workTimeId } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const { mutate } = useWorkTimeChangeMutation();
  const queryClient = useQueryClient();
  const { openToast } = useToastStore();

  const onClickChangeWorkTime = () => {
    mutate(workTimeId, {
      onSuccess: () => {
        openToast('내 근무시간이 변경되었어요.');
        queryClient.invalidateQueries({ queryKey: ['work', 'today'] }).then();
        queryClient.invalidateQueries({ queryKey: ['me', 'profile'] }).then();
      },
      onError: () => {
        openToast('근무시간 변경에 실패했어요.');
      },
      onSettled: () => {
        showWorkTimeChangeModal(false);
      },
    });
  };

  return (
    <>
      <CSSTransition in={isShowWorkTimeChangeModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowWorkTimeChangeModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.workTimeChangeModal, 'modal')} ref={modalRef}>
          {workTimeId === 1 && <p className={styles.title}>{'08시 ~ 17시로 변경하시겠어요?'}</p>}
          {workTimeId === 2 && <p className={styles.title}>{'09시 ~ 18시로 변경하시겠어요?'}</p>}
          {workTimeId === 3 && <p className={styles.title}>{'10시 ~ 19시로 변경하시겠어요?'}</p>}
          <p className={styles.description}>{'최종 변경 이후 7일이 지나야 변경 가능해요.'}</p>

          <button className={styles.confirmButton} onClick={onClickChangeWorkTime}>
            {'변경하기'}
          </button>
          <button className={styles.cancelButton} onClick={() => showWorkTimeChangeModal(false)}>
            {'취소'}
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
