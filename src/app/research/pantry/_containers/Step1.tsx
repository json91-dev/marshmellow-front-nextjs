'use client';
import styles from './Step.module.scss';
import React from 'react';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import { StepIndicator } from '@/components/common/StepIndicator';
import inputStyle from '@/moduleStyle/Inputs.module.scss';
import { useForm } from 'react-hook-form';
export default function Step1() {
  const { register } = useForm();

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
          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>커피</p>
            </label>
          </div>

          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>음료수</p>
            </label>
          </div>

          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>과자</p>
            </label>
          </div>

          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>젤리</p>
            </label>
          </div>

          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>에너지바</p>
            </label>
          </div>

          <div className={inputStyle.radioButton}>
            <label className={inputStyle.radioLabel}>
              <input value={'no'} type="radio" {...register('optionRadio', { required: true })} />
              <span className={inputStyle.radioInnerCircle}></span>
              <p>사탕</p>
            </label>
          </div>
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>다음</div>
      </div>
    </form>
  );
}
