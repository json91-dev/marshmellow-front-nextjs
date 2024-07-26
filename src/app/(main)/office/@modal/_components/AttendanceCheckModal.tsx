'use client';
import style from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';
import { useWorkAttendanceMutation } from '@/app/_hook/queries/activity';
import useToastStore from '@/store/toastStore';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';

export default function AttendanceCheckModal() {
  const { isShowAttendanceCheckModal, showAttendanceCheckModal, isAttendanceCheckInOneMinute } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  // TODO : 여기 작업
  const { mutate } = useWorkAttendanceMutation();
  const { openToast } = useToastStore();
  const queryClient = useQueryClient();

  const onClickAttendButton = useCallback(() => {
    mutate(undefined, {
      onSuccess: (result) => {
        openToast('마시멜로우를 총 4개 받았어요');
        queryClient.invalidateQueries({ queryKey: ['work', 'today'] });
        queryClient.invalidateQueries({ queryKey: ['me', 'currency'] });
        queryClient.invalidateQueries({ queryKey: ['work', 'weekly', dayjs().format('YYYY-MM-DD')] });
      },
      onError: (error) => {
        console.log(error);
        openToast('마시멜로우 획득 실패');
      },
      onSettled: () => {
        showAttendanceCheckModal(false, isAttendanceCheckInOneMinute);
      },
    });
  }, [isAttendanceCheckInOneMinute]);

  return (
    <>
      <CSSTransition in={isShowAttendanceCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowAttendanceCheckModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div
          className={cx(style.attendanceCheckModal, 'modal', isAttendanceCheckInOneMinute && style.bgPink)}
          ref={modalRef}
        >
          <p className={style.title}>업무를 시작해요</p>

          {isAttendanceCheckInOneMinute ? (
            <>
              <p className={style.bonusTitle}>{'1분 이내로 업무를 시작해서\n뽀너스 마시멜로우를 획득할 수 있어요!'}</p>
              <Image
                className={style.mallowImage}
                src="/images/mallow.happy.pink.svg"
                alt="No Image"
                width={72}
                height={72}
              />
            </>
          ) : (
            <Image className={style.mallowImage} src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
          )}

          <p className={style.description}>{'광고를 끝까지 시청해야 업무 보상으로\n마시멜로우를 받을 수 있어요!'}</p>
          <button className={style.confirmButton} onClick={onClickAttendButton}>
            <Image
              style={{ marginRight: '0.6rem', marginBottom: '0.3rem' }}
              src="/images/advertise.svg"
              alt="No Image"
              width={20}
              height={20}
            />
            <p>광고보고 마시멜로우 받기</p>
          </button>
          <button
            className={style.cancelButton}
            onClick={() => showAttendanceCheckModal(false, isAttendanceCheckInOneMinute)}
          >
            마시멜로우 다음에 받기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
