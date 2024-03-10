import style from './info.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

export default function SignUpInfo() {
  return (
    <div className={style.container}>
      <InformationTab index={2} />
      <div>인포 페이지</div>
    </div>
  );
}
