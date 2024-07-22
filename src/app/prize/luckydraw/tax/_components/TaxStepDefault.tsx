'use client';
import style from './taxStep.module.scss';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function TaxStepDefault() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className={style.taxStepDefault}>
      <div className={style.headInfoBox}>
        <p>행운의 뽑기 당첨 경품 발송 및 수령을 위한 정보기입 페이지에요.</p>
        <p>응답기간 : 0000.00.00(월) - 0000.00.00(월)</p>
      </div>

      <p className={style.checkInfo}>당첨 경품에 대한 제세공과금(현금,22%)는 당첨자 본인 부담이에요.</p>

      <div className={style.select}>
        <div className={style.radioWrapper}>
          <label className={style.radioLabel}>
            <input type="radio" {...register('optionRadio', { required: true })} />
            <span className={style.radioInnerCircle}></span>
            <p>확인했어요.</p>
          </label>
        </div>

        <div className={style.radioWrapper}>
          <label className={style.radioLabel}>
            <input type="radio" {...register('optionRadio', { required: true })} />
            <span className={style.radioInnerCircle}></span>
            <p>제세공과금 부담하지 않을래요</p>
          </label>
          <p className={style.warning}>(제세공과금 미부담시 경품 수령이 불가능해요.)</p>
        </div>
      </div>

      <div className={style.buttonsArea}>
        <div className={style.confirmButton}>저장 후 다음</div>
      </div>
    </div>
  );
}
