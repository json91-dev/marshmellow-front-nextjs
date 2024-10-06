'use client';
import styles from './Step.module.scss';
import React, { useEffect, useMemo } from 'react';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import { StepIndicator } from '@/components/common/StepIndicator';
import { useForm } from 'react-hook-form';
import RadioButton from '@/components/forms/RadioButton';
import TextInput from '@/components/forms/TextInput';
import { useRouter } from 'next/navigation';
import TextAreaInput from '@/components/forms/TextAreaInput';

export default function Step6() {
  const { register, watch, setValue } = useForm();
  const router = useRouter();
  const opinion = watch('opinion');

  /** 다음 버튼 활성 상태 확인 **/
  const activeNextButton = useMemo(() => {
    return !!(opinion && opinion.length > 0);
  }, [opinion]);

  return (
    <form className={styles.step}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <StepIndicator currentStep={6} totalSteps={6} />

      <div className={styles.scrollArea}>
        <div className={styles.headerBox}>
          <p>
            {'회사 생활 중, 가장 원하는\n'}
            {'복지가 있다면 알려주세요.'}
          </p>
        </div>

        <div className={styles.textAreaItem}>
          <TextAreaInput
            register={register}
            name={'opinion'}
            maxLength={500}
            placeholder={'1~500자 이내로 직원분들의 의견을 자유롭게 적어주세요.'}
          />
        </div>
      </div>

      <div className={buttonStyle.horizontalButtonArea}>
        <div className={cx(buttonStyle.prevButton, activeNextButton && buttonStyle.active)} onClick={() => router.back()}>
          이전
        </div>
        <div
          className={cx(buttonStyle.confirmButton, activeNextButton && buttonStyle.active)}
          onClick={() => router.push('/research/pantry/complete')}
        >
          제출하기
        </div>
      </div>
    </form>
  );
}
