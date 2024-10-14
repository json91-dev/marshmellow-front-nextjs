'use client';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import styles from './page.module.scss';
import React, { useCallback, useRef } from 'react';
import useBottomSheet from '@/hooks/useBottomSheet';
import useMallowHistoryStore from '@/store/mallowHistoryStore';
import cx from 'classnames';
import Image from 'next/image';

export default function FilterDataBottomSheet() {
  const { isShowAttendanceEventInfoBottomSheet, showAttendanceEventInfoBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDialogElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const { setHistoryFilterMonth, history } = useMallowHistoryStore();

  const { closeBottomSheet } = useBottomSheet({
    bottomSheetRef,
    backDropRef,
    isShow: isShowAttendanceEventInfoBottomSheet,
    setIsShow: showAttendanceEventInfoBottomSheet,
  });

  const onClickFilterDate = useCallback((month: number) => {
    closeBottomSheet();
    setHistoryFilterMonth(month);
  }, []);

  return (
    <>
      <CSSTransition in={isShowAttendanceEventInfoBottomSheet} timeout={200} unmountOnExit nodeRef={backDropRef}>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowAttendanceEventInfoBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <dialog className={styles.bottomSheet} ref={bottomSheetRef}>
          <h1 className={styles.title}>한 달 동안 매일 업무 3개를 완수하세요!</h1>
          <p className={styles.description}>매달 말일, 자동으로 이벤트에 참여돼요.</p>
          <h2 className={styles.subTitle}>참여조건</h2>
          <div className={styles.guideBox}>
            <div className={styles.guideItem}>
              <div className={styles.number}>
                <p>1</p>
              </div>
              <p className={styles.info}>오늘의 업무를 매일 3개 완수</p>
            </div>
            <div className={styles.guideItem}>
              <div className={styles.number}>
                <p>2</p>
              </div>
              <p className={styles.info}>
                한 달을 모두{' '}
                <Image
                  src="/images/snack.purple.svg"
                  alt="No Image"
                  width={20}
                  height={20}
                  style={{ marginLeft: '2px', marginRight: '2px' }}
                />
                로 채우면 이벤트에 자동 참여
              </p>
            </div>
          </div>

          <button className={styles.confirmButton} onClick={() => showAttendanceEventInfoBottomSheet(false)}>
            확인
          </button>
        </dialog>
      </CSSTransition>
    </>
  );
}
