'use client';
import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Step4.module.scss';
import { useForm } from 'react-hook-form';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import useLuckyDrawStore from '@/store/luckydrawStore';

export default function Step4() {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm();
  const emailValue = watch('email');
  const { setTaxInfo } = useLuckyDrawStore();
  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/tax/info?step=5');
  }, []);

  useEffect(() => {
    setTaxInfo({ currentStep: 4 });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.taxStep4}>
      <div className={styles.headInfoBox}>
        <p>당첨자 이메일 주소</p>
      </div>
      <div className={styles.emailInfo}>
        <p>당첨자 이메일 주소를 적어주세요.</p>
        <p>제세공과금에 대한 원천징수영수증 수령을 위해 이메일 주소를 적어주세요.</p>
      </div>
      <div className={styles.emailInputArea}>
        <input type="text" {...register('email')} placeholder={'이메일 주소를 입력해주세요.'} />
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={buttonStyle.prevButton} onClick={() => router.back()}>
          이전
        </div>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, emailValue && buttonStyle.active)}>
          저장 후 다음
        </div>
      </div>
    </form>
  );
}
