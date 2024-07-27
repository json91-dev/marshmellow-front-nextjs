'use client';
import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import style from './Step3.module.scss';
import buttonStyle from './Button.module.scss';
import cx from 'classnames';
import Image from 'next/image';

export default function Step3() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const depositChecked = watch('deposit');

  const router = useRouter();
  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/tax/info?step=3');
  }, []);
  const hiddenInputRef = useRef<any>(null!);
  const { ref: registerRef, ...rest } = register('imageFileInput');
  const handleDivClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.taxStep3}>
      <div className={style.headInfoBox}>
        <p>당첨자 신분증 제출</p>
      </div>

      <div className={style.taxInfo}>
        <p>
          {'제세공과금 신고를 위해 '}
          <span>{'당첨자 본인의 신분증'}</span>
          {
            '이 필요해요.\n주민등록번호를 가지리 말고 신분증 사본을 문서 파일 또는 이미지로 첨부해주세요. 해당 정보는 상품 발송을 위해서만 사용되며, 상품 발송 완료 시 즉각 폐기됩니다.\n'
          }
          <span>{'(신분증: 여권, 주민등록증, 가족관계증명서, 운전면허증)'}</span>
        </p>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={buttonStyle.prevButton}>이전</div>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, depositChecked && buttonStyle.active)}>
          저장 후 다음
        </div>
      </div>

      <input
        type="file"
        hidden={true}
        {...rest}
        ref={(e) => {
          registerRef(e);
          hiddenInputRef.current = e;
        }}
      />

      <div className={style.fileInputArea} onClick={handleDivClick}>
        <p>파일 및 이미지 첨부 (PDF, JPG, PNG 가능)</p>
        <div className={style.fileInputBox}>
          <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
          <p>파일 첨부</p>
        </div>
      </div>
    </form>
  );
}
