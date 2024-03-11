import style from './verify.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

/** 회원가입 인증 페이지  **/
export default function Verify() {
  return (
    <div className={style.container}>
      <InformationTab index={1} />
      <div>정보 확인 페이지</div>
    </div>
  );
}
