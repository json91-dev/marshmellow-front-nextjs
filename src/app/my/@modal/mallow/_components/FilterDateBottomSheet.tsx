'use client';
import { useModalStore } from '@/store/modal';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import style from './filterDateBottomSheet.module.scss';
import React, { useCallback, useRef } from 'react';
import useBottomSheet from '@/app/_hook/useBottomSheet';

export default function FilterDataBottomSheet() {
  const { isShowMallowFilterDateBottomSheet, showMallowFilterDateBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);

  const { closeBottomSheet } = useBottomSheet({
    bottomSheetRef,
    backDropRef,
    isShow: isShowMallowFilterDateBottomSheet,
    setIsShow: showMallowFilterDateBottomSheet,
  });

  const onClickFilterDate = useCallback(() => {
    closeBottomSheet();
  }, []);

  return (
    <>
      <CSSTransition in={isShowMallowFilterDateBottomSheet} timeout={200} unmountOnExit>
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
            <div onClick={onClickFilterDate} className={style.active}>
              1개월
            </div>
            <div onClick={onClickFilterDate}>3개월</div>
            <div onClick={onClickFilterDate}>6개월</div>
            <div onClick={onClickFilterDate}>12개월</div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
