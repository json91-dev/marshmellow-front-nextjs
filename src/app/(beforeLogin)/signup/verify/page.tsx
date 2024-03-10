import style from './verify.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';
export default function SignUpVerify() {
  return (
    <div className={style.container}>
      <InformationTab index={1} />
      <div>정보 확인 페이지</div>
    </div>
  );
}
