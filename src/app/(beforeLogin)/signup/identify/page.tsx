import style from './identify.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';
import SectionInfo from '@/app/(beforeLogin)/signup/_components/SectionInfo';
import ConfirmButton from '@/app/(beforeLogin)/signup/_components/ConfirmButton';
import Image from 'next/image';
import IdentifyCheck from '@/app/(beforeLogin)/signup/identify/_components/IdentifyCheck';

/** 회원가입 인증 페이지  **/
export default function Identify() {
  return (
    <div className={style.container}>
      <InformationTab index={1} />
      <SectionInfo title={'*본인인증'} />
      <IdentifyCheck />
    </div>
  );
}
