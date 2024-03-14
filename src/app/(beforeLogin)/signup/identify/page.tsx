import style from './identify.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';
import SectionInfo from '@/app/(beforeLogin)/signup/_components/SectionInfo';
import ConfirmButton from '@/app/(beforeLogin)/signup/_components/ConfirmButton';
import Image from 'next/image';

/** 회원가입 인증 페이지  **/
export default function Identify() {
  return (
    <div className={style.container}>
      <InformationTab index={1} />
      <SectionInfo title={'*본인인증'} />
      <div className={style.grayArea}>
        <div className={style.image}>
          <Image src="/images/icon_airpod_2.png" alt="No Image" fill objectFit="contain" />
        </div>
        <div className={style.description}>입사지원을 위해 최초 1회 본인인증이 필요합니다.</div>
        <ConfirmButton text={'본인인증하기'} customStyle={{ fontSize: '1.3rem', width: '80%' }} />
      </div>
    </div>
  );
}
