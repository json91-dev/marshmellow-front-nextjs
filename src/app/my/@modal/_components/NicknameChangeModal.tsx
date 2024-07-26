'use client';
import style from './modal.module.scss';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import useToastStore from '@/store/toastStore';
import { useForm } from 'react-hook-form';
import { debounce, setLocalStorage } from '@/utils/utils';

interface Inputs {
  nickname: string;
}

export default function NicknameChangeModal() {
  const { isShowNicknameChangeModal, showNicknameChangeModal, showNicknameChangeConfirmModal } = useModalStore();
  const { openToast } = useToastStore();
  const [isPassNickname, setIsPassNickname] = useState(false); // 닉네임 유효성 서버 검증 여부
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    setError,
    getValues,
    trigger,
    control,
    clearErrors,
  } = useForm<Inputs>();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  console.log(errors);
  /** 닉네임 중복 확인 이후 서버 응답 처리 구현 **/
  const onClickNicknameCheck = useCallback(async () => {
    try {
      const isValidate = await trigger('nickname'); // 강제로 유효성 검사 수행
      if (isValidate) {
        const nickname = getValues('nickname');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/valid/nickname?nickname=${nickname}`);

        if (!response.ok) {
          const result = await response.json();
          if (result.data === 'DUPLICATED') {
            setError('nickname', { type: 'custom', message: '해당 닉네임을 다른 직원이 사용중입니다.' });
          } else {
            setError('nickname', { type: 'custom', message: '사용할 수 없는 닉네임입니다.' });
          }
          return;
        }

        const result = await response.json();
        if (result.data === 'INVALID_NAME_FORMAT') {
          setError('nickname', { type: 'custom', message: '사용할 수 없는 닉네임입니다.' });
        } else if (result.data === 'PASSED') {
          clearErrors('nickname');
          setIsPassNickname(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [isPassNickname, errors]);

  /** 닉네임 검증 성공시 닉네임 변경 확인 모달로 이동 **/
  const onSubmit = async (data: Inputs) => {
    if (!isPassNickname) {
      setError('nickname', { type: 'custom', message: '닉네임 중복확인을 해주세요.' });
      return;
    }
    setLocalStorage('nickname', data.nickname);
    showNicknameChangeModal(false);
    showNicknameChangeConfirmModal(true);
  };

  /** 모달 닫을때 닉네임 상태 초기화 **/
  useEffect(() => {
    if (!isShowNicknameChangeModal) {
      setValue('nickname', '');
      clearErrors('nickname');
    }
  }, [isShowNicknameChangeModal]);

  return (
    <>
      <CSSTransition in={isShowNicknameChangeModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowNicknameChangeModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(style.nicknameChangeModal, 'modal')} ref={modalRef}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>닉네임 변경하기</div>
            <div className={style.nicknameVaildArea}>
              <div className={style.check}>
                <input
                  type={'text'}
                  placeholder={'특수문자 제외 2~8글자'}
                  className={style.inputText}
                  autoComplete={'off'}
                  {...register('nickname', {
                    required: '닉네임을 입력해주세요',
                    minLength: {
                      value: 3,
                      message: '특수문자 제외 2~8글자를 입력해주세요', // 에러 메세지
                    },
                    maxLength: {
                      value: 10,
                      message: '특수문자 제외 2~8글자를 입력해주세요', // 에러 메세지
                    },
                    pattern: {
                      value: /^[A-za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{3,10}$/,
                      message: '특수문자가 포함되어있습니다.', // 에러 메세지
                    },
                    onChange: debounce(() => {
                      console.log('111');
                      setIsPassNickname(false);
                    }, 300),
                  })}
                />
                <button className={style.validateButton} onClick={onClickNicknameCheck}>
                  중복 확인
                </button>
              </div>

              {errors.nickname && (
                <div className={cx(style.errorMessage, style.fail)}>
                  <Image src="/images/nickname.wrong.svg" alt="No Image" width={20} height={20} />
                  <div>{errors.nickname.message}</div>
                </div>
              )}

              {!errors.nickname && getValues('nickname') && isPassNickname ? (
                <div className={cx(style.errorMessage, style.success)}>
                  <Image src="/images/nickname.ok.svg" alt="No Image" width={20} height={20} />
                  <div>사용할 수 있는 닉네임이에요</div>
                </div>
              ) : null}
            </div>

            <div className={style.description}>
              {'특수문자 제외 2~8글자 입력 가능\n(닉네임 변경 후 30일 이후에 변경 가능합니다.)'}
            </div>

            <button type="submit" className={style.confirmButton}>
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
