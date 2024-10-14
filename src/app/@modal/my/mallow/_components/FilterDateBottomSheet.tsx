'use client';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import styles from './filterDateBottomSheet.module.scss';
import React, { useCallback, useRef } from 'react';
import useBottomSheet from '@/hooks/useBottomSheet';
import useMallowHistoryStore from '@/store/mallowHistoryStore';
import cx from 'classnames';

export default function FilterDataBottomSheet() {
  const { isShowMallowFilterDateBottomSheet, showMallowFilterDateBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const { setHistoryFilterMonth, history } = useMallowHistoryStore();

  const { closeBottomSheet } = useBottomSheet({
    bottomSheetRef,
    backDropRef,
    isShow: isShowMallowFilterDateBottomSheet,
    setIsShow: showMallowFilterDateBottomSheet,
  });

  const onClickFilterDate = useCallback((month: number) => {
    closeBottomSheet();
    setHistoryFilterMonth(month);
  }, []);

  return (
    <>
      <CSSTransition in={isShowMallowFilterDateBottomSheet} timeout={200} unmountOnExit nodeRef={backDropRef}>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowMallowFilterDateBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <div className={styles.bottomSheet} ref={bottomSheetRef}>
          <div className={styles.topLine} />
          <div className={styles.title}>기간</div>
          <div className={styles.selectPeriod}>
            <div onClick={() => onClickFilterDate(1)} className={cx(history.filterMonth === 1 && styles.active)}>
              1개월
            </div>
            <div onClick={() => onClickFilterDate(3)} className={cx(history.filterMonth === 3 && styles.active)}>
              3개월
            </div>
            <div onClick={() => onClickFilterDate(6)} className={cx(history.filterMonth === 6 && styles.active)}>
              6개월
            </div>
            <div onClick={() => onClickFilterDate(12)} className={cx(history.filterMonth === 12 && styles.active)}>
              12개월
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
