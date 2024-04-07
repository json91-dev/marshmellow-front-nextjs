'use client';
import style from './submitComplete.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/** 회원가입 제출 페이지 **/
export default function SignupSubmitCompletePage() {
  const [isSubmit, setIsSubmit] = useState(true);
  const router = useRouter();
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>마시멜로우 채용팀</div>
        <div className={style.headerImage}>
          <Image src="/images/document.svg" alt="No Image" fill objectFit="contain" />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.mainTitle}>00님 입사지원을 감사드려요!</div>
        <div className={style.mainDescription}>
          000님의 입사지원서가 무사히 제출되었어요! 마시멜로우에 관심을 가지고 지원해 주셔서 너무나도 기뻐요! :)
          <br />
          <br />
          마시멜로우 채용팀에서 빠르게 검토하고 결과를 알려드릴게요. 결과는 하단의 버튼을 누르면 바로 보실 수 있습니다.
          <br />
          <br />
          감사합니다. 마시멜로우 채용팀 드림
        </div>
      </div>

      <div className={style.confirmButton} onClick={() => router.push('/desk')}>
        채용 결과 보기
      </div>
    </div>
  );
}
