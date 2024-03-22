'use client';
import style from './termsBottomSheet.module.scss';
import { useModalStore } from '@/store/modal';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import React, { useEffect, useRef } from 'react';
import Checkbox from '@/app/(beforeLogin)/signup/@modal/identify/_components/Checkbox';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TermsBottomSheet() {
  const { isShowTermsBottomSheet, showTermsBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      showTermsBottomSheet(true);
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
        showTermsBottomSheet(false);
        router.back();
      }, 250);
    } else {
      bottomSheetRef.current.style.transition = `transform 300ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(0)`;
    }
  };

  useEffect(() => {
    if (isShowTermsBottomSheet) {
      bottomSheetRef.current?.addEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.addEventListener('pointermove', onPointerMove);
      bottomSheetRef.current?.addEventListener('pointerup', onPointerUp);

      backDropRef.current.addEventListener('pointerup', () => {
        showTermsBottomSheet(false);
        router.back();
      });
    }
  }, [isShowTermsBottomSheet]);
  useEffect(() => {
    return () => {
      bottomSheetRef.current?.removeEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointermove', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointerup', onPointerDown);
    };
  }, []);

  return (
    <>
      <CSSTransition in={isShowTermsBottomSheet} timeout={200} unmountOnExit>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowTermsBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <div className={style.bottomSheet} ref={bottomSheetRef}>
          <div className={style.topLine} />
          <div className={style.content}>
            <div className={style.allAgree}>
              <div className={style.checkboxGroup}>
                <Checkbox disabled={false} checked={false} onChange={() => {}} />
                <div className={style.title}>약관에 모두 동의합니다.</div>
              </div>
            </div>
            <div className={style.grayBoxArea}>
              <div className={style.terms}>
                <div className={style.checkboxGroup}>
                  <Checkbox disabled={false} checked={false} onChange={() => {}} />
                  <div className={style.title}>
                    (필수) 마시멜로우 <span>이용약관</span>에 동의합니다.
                  </div>
                </div>
                <div className={style.link}>
                  <div>
                    <div>개인정보 수집 이용동의</div>
                    <div className={style.image}>
                      <Image src="/images/icon_arrow_right.svg" alt="No Image" fill objectFit="contain" />
                    </div>
                  </div>

                  <div>
                    <div>서비스 이용 약관 동의</div>
                    <div className={style.image}>
                      <Image src="/images/icon_arrow_right.svg" alt="No Image" fill objectFit="contain" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.marketing}>
                <div className={style.checkboxGroup} style={{ marginBottom: '.2rem' }}>
                  <Checkbox disabled={false} checked={false} onChange={() => {}} />
                  <div className={style.title} style={{ marginBottom: '.4rem' }}>
                    (선택) <span>마케팅 및 광고 정보 수신동의.</span>
                  </div>
                </div>
                <div className={style.description}>
                  마케팅 정보 동의를 하면 마시멜로우의 다양한 혜택 및 이벤트를 빠르게 알 수 있어요
                </div>
              </div>

              <div className={style.push}>
                <div className={style.checkboxGroup} style={{ marginBottom: '.4rem' }}>
                  <Checkbox disabled={false} checked={false} onChange={() => {}} />
                  <div className={style.title}>(선택) 푸시 알림 켜기</div>
                </div>
                <div className={style.description}>푸시 알림을 켜면 마시멜로우 획득에 도움이 돼요</div>
              </div>

              <div className={style.age}>
                <div className={style.checkboxGroup}>
                  <Checkbox disabled={false} checked={false} onChange={() => {}} />
                  <div className={style.title}>(필수) 만 14세 이상입니다.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.button} onClick={() => router.push('/signup/info')}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
