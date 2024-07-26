'use client';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import style from './TaxStep4.module.scss';
import { useForm } from 'react-hook-form';
import buttonStyle from '../Button.module.scss';
import cx from 'classnames';

export default function TaxStep4() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/info?step=3');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.taxStep4}>
      <div className={style.headInfoBox}>
        <p>당첨자 이메일 주소</p>
      </div>
      <div className={style.emailInfo}>
        <p>당첨자 이메일 주소를 적어주세요.</p>
        <p>제세공과금에 대한 원천징수영수증 수령을 위해 이메일 주소를 적어주세요.</p>
      </div>
      <div className={style.emailInputArea}>
        <input type="text" {...register('email')} placeholder={'이메일 주소를 입력해주세요.'} />
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={buttonStyle.prevButton}>이전</div>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, 1 == 1 && buttonStyle.active)}>
          저장 후 다음
        </div>
      </div>
    </form>
  );
}
