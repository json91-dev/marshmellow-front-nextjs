'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './submitInfoBody.module.scss';
import useSignupStore from '@/store/signUpStore';

export default function () {
  const router = useRouter();
  const { signupInfo } = useSignupStore();
  const { name, nickname, gender, birth, funnelId, recommender } = signupInfo;

  return (
    <>
      <div className={styles.infoCheckArea}>
        <div>
          <div>이 름</div>
          <div>{name}</div>
        </div>
        <div>
          <div>닉네임</div>
          <div>{nickname}</div>
        </div>
        <div>
          <div>성별</div>
          <div>{gender === 'M' ? '남' : '여'}</div>
        </div>
        <div>
          <div>생년월일</div>
          <div>{birth}</div>
        </div>
        <div>
          <div>지원경로</div>
          {funnelId === '0' && <div>선택없음</div>}
          {funnelId === '1' && <div>광고</div>}
          {funnelId === '2' && <div>지인 추천</div>}
          {funnelId === '3' && <div>기타</div>}
        </div>
        <div>
          <div>추천인</div>
          <div>{recommender}</div>
        </div>
      </div>
      <div className={styles.confirmButton} onClick={() => router.push('/signup/submit-complete')}>
        최종제출
      </div>
    </>
  );
}
