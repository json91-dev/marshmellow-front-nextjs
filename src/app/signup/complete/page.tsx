'use client';
import styles from './submitComplete.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/** 회원가입 제출 페이지 **/
export default function SignupSubmitCompletePage() {
  const router = useRouter();
  return (
    <div className={styles.submitCompletePage}>
      <div className={styles.title}>지원 완료</div>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="No Image" fill />
          </div>

          <p>마시멜로우 채용팀</p>
        </div>

        <div className={styles.headerImage}>
          <Image src="/images/document.svg" alt="No Image" width={56} height={68} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainTitle}>{'00님,\n입사지원을 감사드려요!'}</div>
        <div className={styles.mainDescription}>
          000님의 입사지원서가 무사히 제출되었어요! 마시멜로우에 관심을 가지고 지원해 주셔서 너무나도 기뻐요! :)
          <br />
          <br />
          마시멜로우 채용팀에서 빠르게 검토하고 결과를 알려드릴게요. 결과는 하단의 버튼을 누르면 바로 보실 수 있습니다.
          <br />
          <br />
          감사합니다. 마시멜로우 채용팀 드림
        </div>
      </div>

      <div className={styles.confirmButton} onClick={() => router.push('/onboarding/worktime-setting')}>
        채용 결과 보기
      </div>
    </div>
  );
}
