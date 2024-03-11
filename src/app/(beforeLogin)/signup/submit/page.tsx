import style from './submit.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

/** 회원가입 제출 페이지 **/
export default function Submit() {
  return (
    <div className={style.container}>
      <InformationTab index={3} />
      <div>제출 페이지</div>
    </div>
  );
}
