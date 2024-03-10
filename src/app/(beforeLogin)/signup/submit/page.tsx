import style from './submit.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

export default function SignUpSubmit() {
  return (
    <div className={style.container}>
      <InformationTab index={3} />
      <div>제출 페이지</div>
    </div>
  );
}
