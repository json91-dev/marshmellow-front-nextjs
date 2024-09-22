'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './submitInfoBody.module.scss';
import useSignupStore from '@/store/signUpStore';
import { useSession } from 'next-auth/react';
import useToastStore from '@/store/toastStore';

export default function () {
  const router = useRouter();
  const { signupInfo } = useSignupStore();
  const { data: session } = useSession();
  const { name, nickname, gender, birth, funnelId, recommender, phoneNumber } = signupInfo;
  const { openToast } = useToastStore();

  const onSubmit = async () => {
    try {
      // @ts-ignore
      if (!session.accountId) {
        console.log('[OnSubmit] session.accountId is not found.');
        return;
      }

      const requestBody = {
        // @ts-ignore
        accountId: session.accountId,
        memberInfo: {
          name,
          nickname,
          gender,
          // @ts-ignore
          phoneNumber: phoneNumber.replaceAll('-', '') /** TODO: 현재 PASS 인증이 없어서 임시로 넣어둠 **/,
          birth: birth.replaceAll('.', '-'),
          funnelId: funnelId ? (parseInt(funnelId) === 0 ? null : parseInt(funnelId)) : null,
          recommender: recommender ? recommender : null,
          profileImageUrl: null,
        },
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        openToast('회원가입 요청이 실패하였습니다.');
        const result = await response.json();
        console.log(result.data.errorCode);
        return;
      } else {
        router.push('/signup/complete');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className={styles.infoCheckArea}>
        <div>
          <div>이 름</div>
          <div>{name}</div>
        </div>
        <div>
          <div>연락처</div>
          <div>{phoneNumber}</div>
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
          <div>{recommender ? recommender : '없음'}</div>
        </div>
      </div>
      <div className={styles.confirmButton} onClick={onSubmit}>
        최종제출
      </div>
    </>
  );
}
