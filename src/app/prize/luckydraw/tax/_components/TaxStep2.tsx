'use client';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import style from './TaxStep2.module.scss';
import buttonStyle from './Button.module.scss';

export default function TaxStep2() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const selectedValue = watch('optionRadio');
  const router = useRouter();
  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/tax?step=2');
  }, []);

  return (
    <div className={style.taxStep2}>
      <div>
        <p>당첨자 제세공과금 입금 안내</p>
      </div>
      <div>
        <p>
          {"당첨된 ‘제품이름'의 정가는 00,000원으로,\n" +
            '당첨자가 부담해야하는 제세공과금은 00,000원이에요.\n' +
            '(소득세 00,000원, 지방소득세 0,000원)'}
        </p>
        <p>
          {'정가는 0월 0일 기준으로 작성된 금액이에요.\n' +
            '제세공과금을 00월 00일 0요일 자정 전까지 입금하신 후,\n' +
            '경품수령 정보를 제출까지 해주셔야 정상적으로 경품을 발송해드려요!'}
        </p>
        <p>
          {
            '아래 계좌로 00,000원을 입금해주세요. 00월 00일 0요일 00시간 전까지 정확한 금액을 입급하셔야 정상적으로 확인돼요.'
          }
        </p>
      </div>

      <div>
        <p>00은행 000-00000-00-00 (주)프롬디언노운</p>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={buttonStyle.prevButton}>이전</div>
        <div className={buttonStyle.confirmButton}>확인</div>
      </div>
    </div>
  );
}
