'use client';

import style from './info.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DateSelect from '@/app/(beforeLogin)/signup/info/_components/DateSelect';
import HorizontalLine from '@/app/(beforeLogin)/signup/info/_components/HorizontalLine';
import Image from 'next/image';
import GenderSelect from '@/app/(beforeLogin)/signup/info/_components/GenderSelect';
import NicknameSelect from '@/app/(beforeLogin)/signup/info/_components/NicknameSelect';
import ContactSelect from '@/app/(beforeLogin)/signup/info/_components/ContectSelect';
import RecomendSelect from '@/app/(beforeLogin)/signup/info/_components/RecomendSelect';

/** 회원가입 정보 입력 페이지 **/
export default function Info() {
  return (
    <div className={style.container}>
      <InformationTab index={2} />

      <div className={style.secitionInfo}>
        <div>*기본정보</div>
        <HorizontalLine />
      </div>

      <div className={style.imageArea}>
        <div className={style.image}>
          <Image src="/images/icon_airpod.png" alt="No Image" fill objectFit="contain" />
        </div>
        <div className={style.info}>
          <div className={style.label}>지원서 사진등록</div>
          <div className={style.label}>권장사이즈: 가로 160px X 세로 160px)</div>
        </div>
      </div>

      <div className={style.nameArea}>
        <div className={style.label}>이름</div>
        <input className={style.textInput} type="text" placeholder="아이디를 입력해주세요" />
      </div>

      <div className={style.nicknameArea}>
        <div className={style.label}>닉네임</div>
        <NicknameSelect />
      </div>

      <div className={style.genderArea}>
        <div className={style.label}>성별</div>
        <GenderSelect />
      </div>

      <div className={style.birthArea}>
        <div className={style.label}>생년월일</div>
        <DateSelect />
      </div>

      {/*기타*/}
      <div className={style.secitionInfo}>
        <div>*기타</div>
        <HorizontalLine />
      </div>

      <div className={style.contactArea}>
        <div className={style.labelLarge}>지원경로</div>
        <ContactSelect />
      </div>

      <div className={style.recommendArea}>
        <div className={style.labelLarge}>추천인 입력</div>
        <div className={style.label}>추천인 입력시, 마시멜로우 10개를 드려요</div>
        <RecomendSelect />
      </div>

      {/*<div>다음 단계 버튼</div>*/}
    </div>
  );
}
