'use client';
import style from './accordionInfo.module.scss';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';

export default function AccordionInfo() {
  const accordionContentRef = useRef<HTMLDivElement>(null!);
  const accordionToggleRef = useRef<HTMLDivElement>(null!);
  const isOpenedAccordion = useRef<boolean>(false);

  const onClickAccordionToggle = useCallback(() => {
    if (!isOpenedAccordion.current) {
      accordionContentRef.current.classList.add(style.active);
      accordionToggleRef.current.classList.add(style.active);
      isOpenedAccordion.current = true;
    } else {
      accordionContentRef.current.classList.remove(style.active);
      accordionToggleRef.current.classList.remove(style.active);
      isOpenedAccordion.current = false;
    }
  }, []);

  return (
    <div className={style.accordionInfo}>
      <div className={style.accordionToggle} ref={accordionToggleRef} onClick={onClickAccordionToggle}>
        <p>안내사항</p>
        <Image src={'/images/arrow.bottom.svg'} width={24} height={24} alt="No Image" />
      </div>
      <div className={style.accordionContent} ref={accordionContentRef}>
        <div className={style.col}>
          <p>•</p>
          <p>행운의 뽑기 이벤트는 임직원만 참여하실 수 있습니다.</p>
        </div>
        <div className={style.col}>
          <p>•</p>
          <p>사용하지 않은 마시멜로우는 12개월 뒤 소멸됩니다.</p>
        </div>
        <div className={style.col}>
          <p>•</p>
          <p>부적절한 방법으로 이벤트에 참여한 경우, 적립된 마시멜로우는 회수되며 추후 이벤트 참여에 제한될 수 있습니다.</p>
        </div>
        <div className={style.col}>
          <p>•</p>
          <p>본 이벤트는 당사 사정에 따라 별도 고지 없이 변경 또는 중단될 수 있습니다.</p>
        </div>
        <div className={style.col}>
          <p>•</p>
          <p>행운의 뽑기는 1인 1일 5회까지 기본 참여가 가능합니다. (피버타임은 횟수에 포함되지 않습니다.)</p>
        </div>
        <div className={style.col}>
          <p>•</p>
          <p>뽑기 참여 횟수는 0시를 기준으로 초기화됩니다.</p>
        </div>
      </div>
    </div>
  );
}
