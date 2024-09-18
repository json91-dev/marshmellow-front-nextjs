import styles from './page.module.scss';
import InformationTab from '@/app/signup/_components/InformationTab';
import React from 'react';
import SectionInfo from '@/app/signup/_components/SectionInfo';
import ConfirmButton from '@/app/signup/_components/ConfirmButton';
import Image from 'next/image';
import IdentifyCheck from '@/app/signup/identify/_components/IdentifyCheck';

/** 회원가입 인증 페이지  **/
export default function SignUpIdentifyPage() {
  return (
    <div className={styles.container}>
      <InformationTab index={1} />
      <SectionInfo title={'*본인인증'} />
      <IdentifyCheck />
    </div>
  );
}
