import styles from './submit.module.scss';
import InformationTab from '@/app/signup/_components/InformationTab';
import React from 'react';
import SectionInfo from '@/app/signup/_components/SectionInfo';
import TopNavigation from '@/components/nav/TopNavigation';
import SubmitInfoBody from '@/app/signup/submit/_components/SubmitInfoBody';

/** 회원가입 제출 페이지 **/
export default function SignupSubmitPage() {
  return (
    <div className={styles.submitPage}>
      <TopNavigation title={'지원하기'} />
      <div className={styles.content}>
        <InformationTab index={3} />
        <SectionInfo title={'최종제출'} />
        <div className={styles.label}>
          최종 제출 전 정보가 올바르게 입력되었는지 확인부탁드립니다. 입사완료후 내 책상 {'>'} 내 사원증에서 정보 변경이
          가능합니다.
        </div>
        <SubmitInfoBody />
      </div>
    </div>
  );
}
