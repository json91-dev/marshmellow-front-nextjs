'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import style from './Step3.module.scss';
import buttonStyle from '@/app/_style/Button.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import useLuckyDrawStore from '@/store/luckydrawStore';
import { getBase64 } from '@/utils/utils';

export default function Step3() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { setTaxInfo } = useLuckyDrawStore();

  const router = useRouter();
  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/tax/info?step=4');
  }, []);
  const hiddenInputRef = useRef<any>(null!);
  const { ref: registerFileRef, ...rest } = register('IdCardImg');
  const idCardImgFile = watch('IdCardImg');
  const [fileUrl, setFileUrl] = useState<any>(null!);
  const [fileType, setFileType] = useState(null!);

  const handleDivClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  useEffect(() => {
    setTaxInfo({ currentStep: 3 });
  }, []);

  useEffect(() => {
    if (!idCardImgFile) return;

    (async () => {
      if (idCardImgFile.length > 0) {
        const file = idCardImgFile[0];
        if (file) {
          const base64 = await getBase64(file);
          setFileUrl(base64);
          setFileType(file.type);
        } else {
          console.log('No file selected');
        }
      }
    })();
  }, [idCardImgFile]);

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
        <div className={buttonStyle.prevButton} onClick={() => router.back()}>
          이전
        </div>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, 1 === 1 && buttonStyle.active)}>
          저장 후 다음
        </div>
      </div>

      <input
        type="file"
        hidden={true}
        accept=".jpg,.pdf,.png"
        {...rest}
        ref={(e) => {
          /** 숨겨진 input[type="file"] 태그에 클릭 이벤트를 전달하기 위한 방법 **/
          registerFileRef(e);
          hiddenInputRef.current = e;
        }}
      />

      <div className={style.fileInputArea} onClick={handleDivClick}>
        <p>파일 및 이미지 첨부 (PDF, JPG, PNG 가능)</p>
        {fileUrl ? (
          fileType === 'application/pdf' ? (
            <embed src={fileUrl} type="application/pdf" style={{ width: 'auto', height: '200px' }} />
          ) : (
            <img src={fileUrl} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )
        ) : null}
        {!fileUrl && (
          <div className={style.fileInputBox}>
            <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
            <p>파일 첨부</p>
          </div>
        )}
      </div>
    </form>
  );
}
