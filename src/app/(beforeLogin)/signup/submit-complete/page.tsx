'use client';
import style from './submitComplete.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React, { useState } from 'react';
import SectionInfo from '@/app/(beforeLogin)/signup/_components/SectionInfo';
import ConfirmButton from '@/app/(beforeLogin)/signup/_components/ConfirmButton';

/** 회원가입 제출 페이지 **/
export default function SubmitComplete() {
  const [isSubmit, setIsSubmit] = useState(true);
  return (
    <div className={style.container}>
      <div>마시멜로우 채용팀</div>
      <div>00님 입사지원을 감사드려요!</div>
      <div>
        000님의 입사지원서가 무사히 제출되었어요! 마시멜로우에 관심을 가지고 지원해 주셔서 너무나도 기뻐요! :)
        마시멜로우 채용팀에서 빠르게 검토하고 결과를 알려드릴게요. 결과는 하단의 버튼을 누르면 바로 보실 수 있습니다.
        감사합니다. 마시멜로우 채용팀 드림
      </div>
    </div>
  );
}
