'use client';
import style from './termsBottomSheet.module.scss';
import { useIdentifyStore } from '@/store/identify';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef } from 'react';

export default function TermsBottomSheet() {
  const { isOpenTermsBottomSheet, closeTermsBottomSheet } = useIdentifyStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const startY = useRef(0);
  const isDragging = useRef(false);

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

    console.log(bottomSheetRef.current.style.transform);
    bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`;
  };

  const onPointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    if (!isDragging.current) return;
    isDragging.current = false;

    const bottomSheetHeight = bottomSheetRef.current.offsetHeight;
    const currentTranslateY =
      parseInt(bottomSheetRef.current.style.transform.replace('translateY(', '').replace('px)', '')) || 0;

    if (Math.abs(currentTranslateY) >= bottomSheetHeight / 6) {
      console.log('절반 이상 이동');
      bottomSheetRef.current.style.transition = `transform 200ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(${bottomSheetHeight}px`;
      setTimeout(() => {
        closeTermsBottomSheet();
      }, 250);
    } else {
      console.log('절반 이하 이동');
      bottomSheetRef.current.style.transition = `transform 300ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(0)`;
    }
  };

  useEffect(() => {
    if (isOpenTermsBottomSheet) {
      bottomSheetRef.current?.addEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.addEventListener('pointermove', onPointerMove);
      bottomSheetRef.current?.addEventListener('pointerup', onPointerUp);

      backDropRef.current.addEventListener('pointerup', () => closeTermsBottomSheet());
    }
  }, [isOpenTermsBottomSheet]);
  useEffect(() => {
    return () => {
      bottomSheetRef.current?.removeEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointermove', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointerup', onPointerDown);
    };
  }, []);

  return (
    <>
      <CSSTransition in={isOpenTermsBottomSheet} timeout={200} unmountOnExit>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isOpenTermsBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <div className={style.bottomSheet} ref={bottomSheetRef}>
          <div className={style.topLine} />
          <div>
            <div>
              <div>체크박스</div>
              <div>약관에 모두 동의합니다.</div>
            </div>
            <div className={style.gray}>
              <div>
                <div>
                  <div>체크박스</div>
                  <div>(필수) 마시멜로우 이용약관에 동의합니다.</div>
                </div>
                <div>
                  <div>개인정보 수집 이용동의</div>
                  <div>아이콘</div>
                </div>
                <div>
                  <div>서비스 이용 약관 동의</div>
                  <div>아이콘</div>
                </div>
              </div>

              <div>
                <div>
                  <div>체크박스</div>
                  <div>(선택) 마시멜로우 이용약관에 동의합니다.</div>
                </div>
                <div>마케팅 정보 동의를 하면 마시멜로우의 다양한 혜택 및 이벤트를 빠르게 알 수 있어요</div>
              </div>

              <div>
                <div>
                  <div>체크박스</div>
                  <div>(선택) 푸시 알림 켜기</div>
                </div>
                <div>푸시 알림을 켜면 마시멜로우 획득에 도움이 돼요</div>
              </div>

              <div>
                <div>
                  <div>체크박스</div>
                  <div>(필수) 만 14세 이상입니다.</div>
                </div>
              </div>

              <div>확인 버튼</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
