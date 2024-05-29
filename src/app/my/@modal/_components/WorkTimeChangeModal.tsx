'use client';
import style from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';
import { useWorkTimeChangeMutation } from '@/app/_hook/queries/member';

export default function WorkTimeChangeModal() {
  const { isShowWorkTimeChangeModal, showWorkTimeChangeModal, workTimeId } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const { mutate } = useWorkTimeChangeMutation();
  const onClickChangeWorkTime = () => {
    mutate(workTimeId, {
      onSuccess: () => {},
      onError: () => {},
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
        <div className={cx(style.workTimeChangeModal, 'modal')} ref={modalRef}>
          <p className={style.title}>{'00시 ~ 00시로 변경하시겠어요?'}</p>
          <p className={style.description}>{'최종 변경 이후 7일이 지나야 변경 가능해요.'}</p>

          <button className={style.confirmButton} onClick={() => showWorkTimeChangeModal(false)}>
            {'변경하기'}
          </button>
          <button className={style.cancelButton} onClick={() => showWorkTimeChangeModal(false)}>
            {'취소'}
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
