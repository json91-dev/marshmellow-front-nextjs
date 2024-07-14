'use client';
import style from './luckydraw.complete.module.scss';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useToastStore } from '@/store/toast';
import { useModalStore } from '@/store/modal';
import { useRouter } from 'next/navigation';

export default function LuckyDrawResearchCompletePage() {
  const { openToast } = useToastStore();
  const { showLuckyDrawResearchCompleteModal } = useModalStore();
  const router = useRouter();
  const { control, register } = useForm({
    defaultValues: {
      phoneNumber: '010-xxxx-xxxx', // 미리 지정된 값
    },
  });

  return (
    <div className={style.luckyDrawResearchCompletePage}>
      <div className={style.scrollArea}>
        <p className={style.title}>행운의 뽑기 경품 투표</p>
        <p className={style.description}>{'투표에 참여해 주셔서 감사해요.\n확인을 누르면 이벤트에 자동 참여돼요.'}</p>
        <div className={style.checkInfo}>
          <div className={style.messageBox}>
            <p>{'다음 경품 선정에\n큰 도움이 될거에요!'}</p>
          </div>
          <Image src={'/images/mallow.smile.svg'} width={128} height={128} alt="No Image" />
          <p className={style.checkPhoneNumber}>
            {'당첨 안내 문자를 받을 연락처를 확인해주세요\n(본인인증 완료한 연락처로만 가능합니다.)'}
          </p>
        </div>

        <div className={style.phoneInfo}>
          <p>연락처</p>
          <p>인증된 연락처가 변경된 경우 본인인증 후 변경이 가능해요.</p>
        </div>

        <div className={style.phoneInput}>
          <input type={'text'} {...register('phoneNumber')} placeholder={'010-xxxx-xxxx'} readOnly />
          <button onClick={() => openToast('PASS 인증 화면 이동')}>
            <p>변경하기</p>
          </button>
        </div>
      </div>

      <div className={style.buttonArea}>
        <div className={style.horizontalLine}></div>
        <button onClick={() => showLuckyDrawResearchCompleteModal(true)} className={style.confirmButton}>
          확인
        </button>
        <button onClick={() => router.push('/recreation/luckydraw')} className={style.cancelButton}>
          이벤트 참여안하기
        </button>
      </div>
    </div>
  );
}
