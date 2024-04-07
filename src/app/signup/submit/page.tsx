'use client';
import style from './submit.module.scss';
import InformationTab from '@/app/signup/_components/InformationTab';
import React from 'react';
import SectionInfo from '@/app/signup/_components/SectionInfo';
import ConfirmButton from '@/app/signup/_components/ConfirmButton';
import { useRouter } from 'next/navigation';
import Confirm from '@/app/signup/submit/_components/Confirm';

/** 회원가입 제출 페이지 **/
export default function SignupSubmitPage() {
  const router = useRouter();

  return (
    <div className={style.submit}>
      <InformationTab index={3} />
      <SectionInfo title={'최종제출'} />
      <div className={style.label}>
        최종 제출 전 정보가 올바르게 입력되었는지 확인부탁드립니다. 입사완료후 내 책상 {'>'} 내 사원증에서 정보 변경이
        가능합니다.
      </div>
      <div className={style.infoCheckArea}>
        <div>
          <div>이름</div>
          <div>김이름</div>
        </div>
        <div>
          <div>닉네임</div>
          <div>꽈자</div>
        </div>
        <div>
          <div>성별</div>
          <div>여</div>
        </div>
        <div>
          <div>생년월일</div>
          <div>0000.00.00</div>
        </div>
        <div>
          <div>지원경로</div>
          <div>광고</div>
        </div>
        <div>
          <div>추천인</div>
          <div>추천인닉네임</div>
        </div>
      </div>
      <div className={style.confirmButton} onClick={() => router.push('/signup/submit-complete')}>
        최종 제출
      </div>
    </div>
  );
}
