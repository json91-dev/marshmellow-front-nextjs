'use client';
import style from './termsBottomSheet.module.scss';
import { useModalStore } from '@/store/modal';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Checkbox from '@/app/_components/common/Checkbox';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cx from 'classnames';

export default function TermsBottomSheet() {
  const { isShowTermsBottomSheet, showTermsBottomSheet } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const router = useRouter();

  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  /** "모두 동의" 체크시 다른 체크박스 자동 선택  **/
  const handleAllCheckboxChange = useCallback((isChecked: boolean) => {
    setAllCheck(isChecked);
    setCheck1(isChecked);
    setCheck2(isChecked);
    setCheck3(isChecked);
    setCheck4(isChecked);
  }, []);

  /** 약관 체크에 따라 "모두 동의" 체크박스 제어 **/
  useEffect(() => {
    // 다른 체크박스가 참일때만 "모두 동의" 체크박스 선택되도록 설정
    setAllCheck(check1 && check2 && check3 && check4);
  }, [check1, check2, check3, check4]);

  /** 맨 처음 약관화면 애니메이션 로딩시 타이밍 조절 **/
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
        router.push('/signup/info');
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
        router.push('/signup/info');
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
              <label htmlFor={'all'} className={style.checkboxGroup}>
                <Checkbox
                  labelId={'all'}
                  checked={allCheck}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleAllCheckboxChange(e.target.checked)}
                />
                <div className={style.title}>약관에 모두 동의합니다.</div>
              </label>
            </div>
            <div className={style.grayBoxArea}>
              <div className={style.terms}>
                <label htmlFor={'check1'} className={style.checkboxGroup}>
                  <Checkbox
                    labelId={'check1'}
                    checked={check1}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck1(e.target.checked)}
                  />
                  <div className={style.title}>
                    (필수) 마시멜로우 <span>이용약관</span>에 동의합니다.
                  </div>
                </label>
                <div className={style.link}>
                  <div>
                    <div>개인정보 수집 이용동의</div>
                    <div className={style.image}>
                      <Image src="/images/arrow.right.svg" alt="No Image" fill objectFit="contain" />
                    </div>
                  </div>

                  <div>
                    <div>서비스 이용 약관 동의</div>
                    <div className={style.image}>
                      <Image src="/images/arrow.right.svg" alt="No Image" fill objectFit="contain" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.marketing}>
                <label htmlFor={'check2'} className={style.checkboxGroup} style={{ marginBottom: '.2rem' }}>
                  <Checkbox
                    labelId={'check2'}
                    checked={check2}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck2(e.target.checked)}
                  />
                  <div className={style.title} style={{ marginBottom: '.4rem' }}>
                    (선택) <span>마케팅 및 광고 정보 수신동의.</span>
                  </div>
                </label>
                <div className={style.description}>
                  마케팅 정보 동의를 하면 마시멜로우의 다양한 혜택 및 이벤트를 빠르게 알 수 있어요
                </div>
              </div>

              <div className={style.push}>
                <label htmlFor={'check3'} className={style.checkboxGroup} style={{ marginBottom: '.4rem' }}>
                  <Checkbox
                    labelId={'check3'}
                    checked={check3}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck3(e.target.checked)}
                  />
                  <div className={style.title}>(선택) 푸시 알림 켜기</div>
                </label>
                <div className={style.description}>푸시 알림을 켜면 마시멜로우 획득에 도움이 돼요</div>
              </div>

              <div className={style.age}>
                <label htmlFor={'check4'} className={style.checkboxGroup}>
                  <Checkbox
                    labelId={'check4'}
                    checked={check4}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck4(e.target.checked)}
                  />
                  <div className={style.title}>(필수) 만 14세 이상입니다.</div>
                </label>
              </div>
            </div>
          </div>
          <div
            className={cx(check1 ? style.buttonActive : style.buttonInActive)}
            onClick={() => {
              if (check1) {
                router.push('/signup/info');
              }
            }}
          >
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
