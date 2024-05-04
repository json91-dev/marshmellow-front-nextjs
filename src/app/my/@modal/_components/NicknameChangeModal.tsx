'use client';
import style from './modal.module.scss';
import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import cx from 'classnames';
import { useToastStore } from '@/store/toast';

export default function NicknameChangeModal() {
  const { isShowNicknameChangeModal, showNicknameChangeModal } = useModalStore();
  const { openToast } = useToastStore();

  const onClicksubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onClickNicknameDuplicated = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <CSSTransition in={isShowNicknameChangeModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowNicknameChangeModal} timeout={200} unmountOnExit classNames="modal">
        <div className={cx(style.nicknameChangeModal, 'modal')}>
          <form>
            <div className={style.title}>닉네임 변경하기</div>
            <div className={style.nicknameVaildArea}>
              <div className={style.check}>
                <input type={'text'} placeholder={'특수문자 제외 2~8글자'} className={style.inputText} required />
                <button onClick={onClickNicknameDuplicated} className={style.validateButton}>
                  중복 확인
                </button>
              </div>
              <div className={style.message}>
                <Image src="/images/nickname.ok.svg" alt="No Image" width={20} height={20} />
                <div>사용할 수 있는 닉네임이에요</div>
              </div>
            </div>

            <div className={style.description}>
              {'특수문자 제외 2~8글자 입력 가능\n(닉네임 변경 후 30일 이후에 변경 가능합니다.)'}
            </div>

            <button
              onSubmit={onClicksubmit}
              className={style.confirmButton}
              onClick={(e) => {
                e.preventDefault();
                showNicknameChangeModal(false);
                openToast('내 닉네임이 변경되었어요.');
              }}
            >
              확인
            </button>
            <button
              className={style.cancelButton}
              onClick={(e) => {
                e.preventDefault();
                showNicknameChangeModal(false);
              }}
            >
              취소
            </button>
          </form>
        </div>
      </CSSTransition>
    </>
  );
}
