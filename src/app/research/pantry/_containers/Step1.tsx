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
import { useRouter } from 'next/navigation';
export default function Step1() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const itemId = watch('itemId');
  const itemOtherComment = watch('itemOtherComment');
  const router = useRouter();

  /** 다음 버튼 활성 상태 확인 **/
  const activeNextButton = useMemo(() => {
    const isItemSelected = itemId !== undefined;
    if (!isItemSelected) {
      return false;
    }

    // 기타 선택시, 1글자 이상 입력 확인
    if (itemId === 'itemOther') {
      return itemOtherComment !== undefined && itemOtherComment.length > 0;
    }

    return true;
  }, [itemId, itemOtherComment]);

  return (
    <form className={styles.step}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <StepIndicator currentStep={1} totalSteps={6} />

      <div className={styles.scrollArea}>
        <div className={styles.headerBox}>
          <p>
            {'회사 생활 중, 가장 필요하거나\n'}
            {'가지고 싶은 물품을 알려주세요.'}
          </p>
        </div>
        <div className={styles.selectInfo}>
          <p>1개 선택</p>
        </div>

        <div className={styles.selectBox}>
          <div className={styles.radioItem}>
            <RadioButton value={'0'} label={'태블릿'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'1'} label={'노트북'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'2'} label={'모니터'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'3'} label={'커피머신'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton value={'4'} label={'공기청정기'} register={register} name={'itemId'} />
          </div>

          <div className={styles.radioItem}>
            <RadioButton
              value={'itemOther'}
              label={'기타:'}
              register={register}
              name={'itemId'}
              customStyle={{ width: 'auto' }}
            />
            <TextInput
              placeholder={'50자 이내로 작성해주세요.'}
              register={register}
              name={'itemOtherComment'}
              customStyle={{ height: '2.4rem', borderBottom: '1px solid #DDE2ED' }}
            />
          </div>
        </div>
      </div>

      <div className={buttonStyle.horizontalButtonArea}>
        <div
          onClick={() => router.push('/research/pantry?step=2')}
          className={cx(buttonStyle.confirmButton, activeNextButton && buttonStyle.active)}
        >
          다음
        </div>
      </div>
    </form>
  );
}
