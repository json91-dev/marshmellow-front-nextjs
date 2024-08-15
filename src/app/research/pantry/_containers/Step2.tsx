'use client';
import styles from './Step.module.scss';
import React, { useMemo } from 'react';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import { StepIndicator } from '@/components/common/StepIndicator';
import { useForm } from 'react-hook-form';
import RadioButton from '@/components/forms/RadioButton';
import TextInput from '@/components/forms/TextInput';
export default function Step2() {
  const { register, handleSubmit, watch } = useForm();

  return (
    <form className={styles.step}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <StepIndicator currentStep={1} totalSteps={6} />

      <div className={styles.scrollArea}>
        <div className={styles.headerBox}>
          <p>
            {'회사 생활 중, 가장 먹고싶은\n'}
            {'간식을 알려주세요.'}
          </p>
        </div>
        <div className={styles.selectInfo}>
          <p>1개 선택</p>
        </div>

        <div className={styles.selectBox}>
          <div className={styles.radioItem}>
            <RadioButton value={'0'} label={'커피'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'1'} label={'음료수'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'2'} label={'과자'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'3'} label={'젤리'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'4'} label={'에너지바'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'5'} label={'사탕'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton
              value={'other'}
              label={'기타:'}
              register={register}
              name={'itemOtherComment'}
              customStyle={{ width: 'auto' }}
            />
            <TextInput
              placeholder={'50자 이내로 작성해주세요.'}
              register={register}
              name={'text'}
              customStyle={{ height: '2.4rem', borderBottom: '1px solid #DDE2ED' }}
            />
          </div>
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>다음</div>
      </div>
    </form>
  );
}
