'use client';
import useModalStore from '@/store/modalStore';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import style from './filterDateBottomSheet.module.scss';
import React, { useCallback, useRef } from 'react';
import useBottomSheet from '@/app/_hook/useBottomSheet';
import useMallowHistoryStore from '@/store/mallowHistoryStore';

export default function FilterDataBottomSheet() {
  const { isShowMallowFilterDateBottomSheet, showMallowFilterDateBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const { setHistoryFilterMonth } = useMallowStore();

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
        <div className={style.bottomSheet} ref={bottomSheetRef}>
          <div className={style.topLine} />
          <div className={style.title}>기간</div>
          <div className={style.selectPeriod}>
            <div onClick={() => onClickFilterDate(1)} className={style.active}>
              1개월
            </div>
            <div onClick={() => onClickFilterDate(3)}>3개월</div>
            <div onClick={() => onClickFilterDate(6)}>6개월</div>
            <div onClick={() => onClickFilterDate(12)}>12개월</div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
