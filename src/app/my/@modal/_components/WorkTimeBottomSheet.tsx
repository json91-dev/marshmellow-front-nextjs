'use client';
import style from './workTimeBottomSheet.module.scss';
import { useModalStore } from '@/store/modal';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Checkbox from '@/app/signup/@modal/identify/_components/Checkbox';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cx from 'classnames';

export default function WorkTimeBottomSheet() {
  const { isShowWorkTimeBottomSheet, showWorkTimeBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const router = useRouter();

  /** 맨 처음 약관화면 애니메이션 로딩시 타이밍 조절 **/
  useEffect(() => {
    setTimeout(() => {
      showWorkTimeBottomSheet(true);
    }, 300);
  }, []);

  const onPointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    bottomSheetRef.current.style.transition = `none`;
    startY.current = e.clientY;
    isDragging.current = true;
  };

  const onPointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    if (!isDragging.current) return;

    const deltaY = e.clientY - startY.current;
    if (deltaY < 0) return;

    bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`;
  };

  const onPointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    if (!isDragging.current) return;
    isDragging.current = false;

    const bottomSheetHeight = bottomSheetRef.current.offsetHeight;
    const currentTranslateY =
      parseInt(bottomSheetRef.current.style.transform.replace('translateY(', '').replace('px)', '')) || 0;

    /** 전체 영역중 1/6 이상 움직였을때 모달창이 닫히고 이전페이지 이동 **/
    if (Math.abs(currentTranslateY) >= bottomSheetHeight / 6) {
      bottomSheetRef.current.style.transition = `transform 200ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(${bottomSheetHeight}px`;
      setTimeout(() => {
        showWorkTimeBottomSheet(false);
        // router.back();
      }, 250);
    } else {
      bottomSheetRef.current.style.transition = `transform 300ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(0)`;
    }
  };

  useEffect(() => {
    if (isShowWorkTimeBottomSheet) {
      bottomSheetRef.current?.addEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.addEventListener('pointermove', onPointerMove);
      bottomSheetRef.current?.addEventListener('pointerup', onPointerUp);

      backDropRef.current.addEventListener('pointerup', () => {
        showWorkTimeBottomSheet(false);
        router.back();
      });
    }
  }, [isShowWorkTimeBottomSheet]);
  useEffect(() => {
    return () => {
      bottomSheetRef.current?.removeEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointermove', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointerup', onPointerDown);
    };
  }, []);

  return (
    <>
      <CSSTransition in={isShowWorkTimeBottomSheet} timeout={200} unmountOnExit>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowWorkTimeBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <div className={style.bottomSheet} ref={bottomSheetRef}>
          <div className={style.topLine} />

          <div className={style.title}>{'원하는 근무시작을 선택해주세요.\n근무시간에따라 업무시간이 달라져요.'}</div>
          <div className={style.description}>
            {'최종 변경 이후 7일이 지나야 변경 가능합니다.\n* 08시~19시에는 변경이 불가능합니다.'}
          </div>

          <div className={style.workTimeSelect}>
            <div className={style.item}>
              <div className={style.select}>
                <div>08시 ~ 17시</div>
                <input type={'checkbox'} />
              </div>

              <div className={style.info}>
                <div>정시출근: 08:00 ~ 08:15</div>
                <div>점심시간: 11:00 ~ 11:15</div>
                <div>정시퇴근: 15:00 ~ 15:15</div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.select}>
                <div>09시 ~ 18시</div>
                <input type={'checkbox'} />
              </div>

              <div>
                <div>정시출근: 08:00 ~ 08:15</div>
                <div>점심시간: 11:00 ~ 11:15</div>
                <div>정시퇴근: 15:00 ~ 15:15</div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.select}>
                <div>10시 ~ 19시</div>
                <input type={'checkbox'} />
              </div>

              <div>
                <div>정시출근: 08:00 ~ 08:15</div>
                <div>점심시간: 11:00 ~ 11:15</div>
                <div>정시퇴근: 15:00 ~ 15:15</div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
