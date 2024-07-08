'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';

export default function LuckyDrawWinningCheckModal() {
  const { isShowLuckyDrawWinningCheckModal, showLuckyDrawWinningCheckModal, luckyDrawWinningCheckType } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const dotsRef = useRef<HTMLDivElement>(null!);
  const intervalRef = useRef<NodeJS.Timeout>(null!);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isShowLuckyDrawWinningCheckModal) {
      intervalRef.current = setInterval(() => {
        if (dotsRef.current.innerText === '.') {
          dotsRef.current.innerText = '..';
        } else if (dotsRef.current.innerText === '..') {
          dotsRef.current.innerText = '...';
        } else if (dotsRef.current.innerText === '...') {
          dotsRef.current.innerText = '.';
        }
      }, 500);

      setTimeout(() => {
        showLuckyDrawWinningCheckModal(false);
      }, 5000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isShowLuckyDrawWinningCheckModal]);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawWinningCheckModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowLuckyDrawWinningCheckModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(style.luckyDrawWinningCheckModal, 'modal')} ref={modalRef}>
          <p>두근두근</p>
          <div className={style.secondText}>
            <div>긴장되는 순간</div>
            <div ref={dotsRef}>...</div>
          </div>
          {luckyDrawWinningCheckType === 'VIOLET' ? (
            <Image src="/images/luckydraw.card.violet.wet.png" alt="No Image" width={108} height={112} />
          ) : (
            <Image src="/images/luckydraw.card.purple.wet.png" alt="No Image" width={108} height={112} />
          )}
        </div>
      </CSSTransition>
    </>
  );
}
