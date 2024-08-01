'use client';
import TopNavigation from '@/app/_components/common/TopNavigation';
import style from './page.module.scss';
import { useForm } from 'react-hook-form';
import buttonStyle from '@/app/_style/Button.module.scss';
import cx from 'classnames';
import React from 'react';
import Image from 'next/image';

export default function GuidePage() {
  const { register, watch } = useForm();
  const InquiryTextArea = watch('InquiryTextArea');
  const { ref: registerFileRef, ...rest } = register('AttachmentImg');
  const AttachmentFiles = watch('AttachmentImg');

  return (
    <div className={style.contactPage}>
      <TopNavigation title={'문의하기'} />

      <div className={style.scrollArea}>
        <p className={style.header}>
          {'안녕하세요 :)\n'}
          {'어떤 도움이 필요하신가요?'}
        </p>

        <div className={style.inputTextArea}>
          <textarea
            {...register('InquiryTextArea')}
            maxLength={1000}
            placeholder={'문의할 내용을 남겨주세요. 궁금한 부분을 사진으로 첨부해주시면 좀 더 정확한 답변을 받을 수 있어요.'}
          />
          <div className={style.charCount}>
            <p>{InquiryTextArea ? InquiryTextArea.length : 0}/1000</p>
          </div>
        </div>

        <div className={style.inputImageArea}>
          {/*<input*/}
          {/*  type="file"*/}
          {/*  hidden={true}*/}
          {/*  accept=".jpg,.pdf,.png"*/}
          {/*  {...rest}*/}
          {/*  ref={(e) => {*/}
          {/*    registerRef(e);*/}
          {/*    hiddenInputRef.current = e;*/}
          {/*  }}*/}
          {/*/>*/}
          <p className={style.infoAttachment}>이미지 첨부 (JPG PNG 가능)</p>

          <div className={style.swiperImages}>
            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>

            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>

            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>

            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>

            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>

            <div className={style.fileInputBox}>
              <Image src="/images/icon.file.svg" alt="No Image" width={40} height={40} />
              <p>파일 첨부</p>
            </div>
          </div>
        </div>

        <div className={style.notification}>
          <p>안내사항</p>
          <div className={style.notificationDetail}>
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
        <div className={cx(buttonStyle.confirmButton, 1 === 2 && buttonStyle.active)}>문의하기</div>
      </div>
    </div>
  );
}
