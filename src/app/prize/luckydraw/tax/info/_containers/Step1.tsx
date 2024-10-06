'use client';
import styles from './Step1.module.scss';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import useLuckyDrawStore from '@/store/luckydrawStore';

export default function Step1() {
  const { setTaxInfo, taxInfo } = useLuckyDrawStore();
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      optionRadio: taxInfo.isAgreeToTax ? 'yes' : 'no',
    },
  });

  const radioValue = watch('optionRadio');
  const router = useRouter();
  const onClickButton = useCallback(() => {
    setTaxInfo({ isAgreeToTax: true });
    router.push('/prize/luckydraw/tax/info?step=2');
  }, []);

  useEffect(() => {
    setTaxInfo({ isAgreeToTax: radioValue === 'yes' });
  }, [radioValue]);

  useEffect(() => {
    setTaxInfo({ currentStep: 1 });
  }, []);

  return (
    <div className={styles.taxStepDefault}>
      <div className={styles.headInfoBox}>
        <p>행운의 뽑기 당첨 경품 발송 및 수령을 위한 정보기입 페이지에요.</p>
        <p>응답기간 : 0000.00.00(월) - 0000.00.00(월)</p>
      </div>

      <p className={styles.checkInfo}>당첨 경품에 대한 제세공과금(현금,22%)는 당첨자 본인 부담이에요.</p>

      <div className={styles.select}>
        <div className={styles.radioWrapper}>
          <label className={styles.radioLabel}>
            <input value={'yes'} type="radio" {...register('optionRadio', { required: true })} />
            <span className={styles.radioInnerCircle}></span>
            <p>확인했어요.</p>
          </label>
        </div>

        <div className={styles.radioWrapper}>
          <label className={styles.radioLabel}>
            <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
            <span className={styles.radioInnerCircle}></span>
            <p>제세공과금 부담하지 않을래요</p>
          </label>
          <p className={styles.warning}>(제세공과금 미부담시 경품 수령이 불가능해요.)</p>
        </div>
      </div>

      <div className={buttonStyle.horizontalButtonArea} onClick={onClickButton}>
        <div className={cx(buttonStyle.confirmButton, radioValue === 'yes' && buttonStyle.active)}>저장 후 다음</div>
      </div>
    </div>
  );
}
