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
import CheckButton from '@/components/forms/CheckButton';
export default function Step3() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const router = useRouter();
  const itemId = watch('itemId');
  const itemOtherComment = watch('itemOtherComment');

  /** 다음 버튼 활성 상태 확인 **/
  const activeNextButton = useMemo(() => {
    const isItemSelected = Array.isArray(itemId) ? itemId.length > 0 : false;

    if (!isItemSelected) {
      return false;
    }

    // 기타 선택시, 1글자 이상 입력 확인
    if (Array.isArray(itemId) && itemId.includes('itemOther')) {
      return itemOtherComment !== undefined && itemOtherComment.length > 0;
    }

    return true;
  }, [itemId, itemOtherComment]);

  /** 기타 선택 해지시 텍스트 필드 초기화 **/
  useEffect(() => {
    if (Array.isArray(itemId) && !itemId.includes('itemOther')) {
      setValue('itemOtherComment', '');
    }
  }, [itemId]);

  return (
    <form className={styles.step}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <StepIndicator currentStep={3} totalSteps={6} />

      <div className={styles.scrollArea}>
        <div className={styles.headerBox}>
          <p>
            {'회사 생활 중, 힘들었던 일들이 있었나요?\n'}
            {'어떤 점들이 힘들었는지 알려주세요.'}
          </p>
        </div>
        <div className={styles.selectInfo}>
          <p>복수 선택</p>
        </div>

        <div className={styles.selectBox}>
          <div className={styles.checkItem}>
            <CheckButton value={'0'} label={'커피'} register={register} name={'itemId'} />
          </div>

          <div className={styles.checkItem}>
            <CheckButton value={'1'} label={'워라밸 붕괴'} register={register} name={'itemId'} />
          </div>

          <div className={styles.checkItem}>
            <CheckButton value={'2'} label={'실적압박'} register={register} name={'itemId'} />
          </div>

          <div className={styles.checkItem}>
            <CheckButton value={'3'} label={'미래에 대한 불안감'} register={register} name={'itemId'} />
          </div>

          <div className={styles.checkItem}>
            <CheckButton value={'4'} label={'업무량 과다'} register={register} name={'itemId'} />
          </div>

          <div className={styles.checkItem}>
            <CheckButton value={'itemOther'} label={'기타:'} register={register} name={'itemId'} />
            <TextInput
              placeholder={'50자 이내로 작성해주세요.'}
              register={register}
              disabled={!(Array.isArray(itemId) && itemId.includes('itemOther'))}
              name={'itemOtherComment'}
              customStyle={{ height: '2.4rem', borderBottom: '1px solid #DDE2ED' }}
            />
          </div>
        </div>
      </div>

      <div className={buttonStyle.horizontalButtonArea} onClick={() => router.push('/research/pantry?step=4')}>
        <div className={cx(buttonStyle.prevButton, activeNextButton && buttonStyle.active)} onClick={() => router.back()}>
          이전
        </div>

        <div className={cx(buttonStyle.confirmButton, activeNextButton && buttonStyle.active)}>다음</div>
      </div>
    </form>
  );
}
