'use client';

import TopNavigation from '@/components/nav/TopNavigation';
import styles from './page.module.scss';
import { useForm } from 'react-hook-form';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getBase64 } from '@/utils/utils';

export default function RequestPage() {
  const { register, watch } = useForm();
  const InquiryTextArea = watch('InquiryTextArea');
  const hiddenInputRef = useRef<any>(null!);
  const handleInputFileClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };
  const { ref: registerFileRef, ...rest } = register('AttachmentImg');
  const attachmentFiles = watch('AttachmentImg') as FileList;
  const [base64Images, setBase64Images] = useState<(string | ArrayBuffer | null)[]>([]);

  /** 등록된 이미지 중 특정 이미지 제거 **/
  const onImageFileCancel = useCallback((indexToRemove: number) => {
    setBase64Images((prevState) => prevState.filter((_, index) => index !== indexToRemove));
  }, []);

  /** 파일을 로드하고 base64 이미지로 바꿔줌 **/
  useEffect(() => {
    const loadFiles = async () => {
      if (attachmentFiles) {
        const base64Images = await Promise.all(Array.from(attachmentFiles).map((file) => getBase64(file)));
        setBase64Images(base64Images);
      }
    };

    loadFiles();
  }, [attachmentFiles]);

  return (
    <div className={styles.requestNew}>
      <TopNavigation title={'문의하기'} />

      <div className={styles.scrollArea}>
        <p className={styles.header}>
          {'안녕하세요 :)\n'}
          {'어떤 도움이 필요하신가요?'}
        </p>

        <div className={styles.inputTextArea}>
          <textarea
            {...register('InquiryTextArea')}
            maxLength={1000}
            placeholder={'문의할 내용을 남겨주세요. 궁금한 부분을 사진으로 첨부해주시면 좀 더 정확한 답변을 받을 수 있어요.'}
          />
          <div className={styles.charCount}>
            <p>{InquiryTextArea ? InquiryTextArea.length : 0}/1000</p>
          </div>
        </div>

        <div className={styles.inputImageArea}>
          <input
            type="file"
            hidden={true}
            accept=".jpg,.pdf,.png"
            multiple
            {...rest}
            ref={(e) => {
              registerFileRef(e);
              hiddenInputRef.current = e;
            }}
          />
          <p className={styles.infoAttachment}>이미지 첨부 (JPG PNG 가능)</p>

          <div className={styles.swiperImages}>
            <div className={styles.fileInputBox} onClick={handleInputFileClick}>
              <Image src="/images/icon.camera.svg" alt="No Image" width={40} height={40} />
              <p className={styles.fileCount}>
                <span className={cx(base64Images.length > 0 && styles.highlight)}>{base64Images.length}</span>/10
              </p>
            </div>

            {base64Images &&
              base64Images.map((base64, index) => {
                if (typeof base64 !== 'string') {
                  return null;
                }
                return (
                  <div className={styles.imgFileItem}>
                    <Image src={base64} alt={'No Image'} key={index} fill />
                    <div className={styles.imgFileCancel} onClick={() => onImageFileCancel(index)}>
                      <Image src={'/images/x.circle.cancel.svg'} alt={'No Image'} key={index} fill />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.notification}>
          <p>안내사항</p>
          <div className={styles.notificationDetail}>
            <p>{'· 고객센터 운영시간은 평일 09:00 ~ 18:00 예요.\n'}</p>
            <p>{'· 산업안전보건법에 따라 고객응대 근로자 보호자조치를 하고 있으며 모든 문의는 기록이 남아요.\n'}</p>
            <p>{'· 문의하기 버튼을 누르시면 개인정보 수집 이용동의서에 동의한 것으로 간주해요.\n'}</p>
            <p>{'· 문의하기 답변은 순차적으로 빠르게 확인 후 답변 드릴게요.\n'}</p>
            <p>
              {
                "· 문의하기는 한번에 한 건 문의가 가능하며, ‘답변 대기 중' 상태에서 답변 수정 및 취소가 가능하고 ‘답변 진행 중’ 상태에서는 답변 수정 및 취소가 불가능해요."
              }
            </p>
          </div>
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, 0 && buttonStyle.active)}>문의하기</div>
      </div>
    </div>
  );
}
