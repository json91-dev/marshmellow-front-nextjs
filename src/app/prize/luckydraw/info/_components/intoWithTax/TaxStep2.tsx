'use client';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import style from './TaxStep2.module.scss';
import buttonStyle from '../Button.module.scss';
import cx from 'classnames';

export default function TaxStep2() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const depositChecked = watch('deposit');

  const router = useRouter();
  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/info?step=3');
  }, []);

  return (
    <div className={style.taxStep2}>
      <div className={style.headInfoBox}>
        <p>당첨자 제세공과금 입금 안내</p>
      </div>
      <div className={style.taxInfo}>
        <p>
          {'당첨된 제품의 정가는 100,000원으로, 당첨자가 부담해야하는 제세공과금은 '}
          <span>{'5,000원이에요.\n'}</span>
          {'(소득세 4,000원, 지방소득세 1,000원)'}
        </p>
        <p>
          {'정가는 7월 25일 기준으로 작성된 금액이에요.\n'}
          <span>
            {
              '제세공과금을 12월 1일 금요일 자정 전까지 입금하신 후, 경품수령 정보를 제출까지 해주셔야 정상적으로 경품을 발송해드려요!'
            }
          </span>
        </p>
        <p>
          {'아래 계좌로 5,000원을 입금해주세요. 12월 1일 금요일 12시 전까지 정확한 금액을 입급하셔야 정상적으로 확인돼요.'}
        </p>
      </div>

      <div className={style.account}>
        <p>00은행 000-00000-00-00 (주)프롬디언노운</p>
      </div>

      <div className={style.checkBoxContainer}>
        <input type="checkbox" id="checkbox" {...register('deposit')} />
        <label htmlFor="checkbox">
          <p>네 입금했어요.</p>
        </label>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={buttonStyle.prevButton}>이전</div>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, depositChecked && buttonStyle.active)}>
          저장 후 다음
        </div>
      </div>
    </div>
  );
}
