'use client';

import style from './info.module.scss';
import InformationTab from '@/app/signup/_components/InformationTab';
import React, { useCallback, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import SectionInfo from '@/app/signup/_components/SectionInfo';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import TopNavigation from '@/app/_components/common/TopNavigation';
import { Controller, useForm } from 'react-hook-form';
import { useToastStore } from '@/store/toast';
import { debounce, getBirthNumberWithDot } from '@/utils/utils';
import { useSignupStore } from '@/store/signup';

interface Inputs {
  name: string;
  gender: 'M' | 'F';
  nickname: string;
  funnelId: string;
  birth: string;
  recommender: string;
}

type SignupRequestBody = {
  accountId: string;
  memberInfo: {
    name: string;
    nickname: string;
    gender: 'M' | 'F';
    profileImageUrl: string;
    phoneNumber: string;
    birth: string;
    funnelId: string;
    recommender: string | null;
  };
};

const profileImageUploadApi = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images`, { method: 'POST', body: formData })
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
    });
};

/** 회원가입 정보 입력 페이지 **/
export default function SignupInfoPage() {
  const { data: session } = useSession();
  const { openToast } = useToastStore();
  const { setSignupInfo } = useSignupStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    setError,
    getValues,
    trigger,
    control,
  } = useForm<Inputs>();

  // const watchProfile = watch('image');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [isPassNickname, setIsPassNickname] = useState(false); // 닉네임 유효성 서버 검증 여부
  console.log(errors);

  /** 프로필 이미지 미리보기 **/
  const onChangeInputImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images`, { method: 'POST', body: formData });
        const result = await response.json();
        if (!result.errorCode) {
          setProfileImageUrl(result.data);
        }

        if (result.errorCode === 'INVALID_IMAGE_NAME_FORMAT') {
          openToast('jpg|png|gif|bmp|jpeg 형식만 허용합니다.');
        } else if (result.errorCode === 'INVALID_IMAGE_SIZE') {
          openToast('160x160 이미지만 사용할 수 있습니다.');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

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
            setError('nickname', { type: 'custom', message: '중복된 닉네임입니다.' });
          } else {
            setError('nickname', { type: 'custom', message: '사용할 수 없는 닉네임입니다.' });
          }
          return;
        }

        const result = await response.json();
        if (result.data === 'INVALID_NAME_FORMAT') {
          setError('nickname', { type: 'custom', message: '사용할 수 없는 닉네임입니다.' });
        } else if (result.data === 'PASSED') {
          setIsPassNickname(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  /** 폼 제출 요청 **/
  const onSubmit = async (data: Inputs) => {
    try {
      // @ts-ignore
      if (!session.accountId) {
        console.log('[OnSubmit] session.accountId is not found.');
        return;
      }

      const { name, nickname, gender, birth, funnelId, recommender } = data;

      const requestBody = {
        // @ts-ignore
        accountId: session.accountId,
        memberInfo: {
          name,
          nickname,
          gender,
          // @ts-ignore
          profileImageUrl: profileImageUrl ? profileImageUrl : session.profileImg,
          phoneNumber: '01011111111' /** TODO: 현재 PASS 인증이 없어서 임시로 넣어둠 **/,
          birth: birth.replaceAll('.', '-'),
          funnelId: parseInt(funnelId),
          recommender: recommender ? recommender : null,
        },
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result = response.json();
      console.log(result);

      if (!response.ok) {
        /** TODO: 현재 한번 등록이 되면 서버 에러가 발생하는 문제가 있다. **/
        setSignupInfo({
          name,
          nickname,
          gender,
          birth,
          funnelId,
          recommender,
        });
        router.replace('/signup/submit');
        return;
      } else {
        setSignupInfo({
          name,
          nickname,
          gender,
          birth,
          funnelId,
          recommender,
        });
        router.replace('/signup/submit');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (session?.user?.name) {
      setValue('name', session.user.name);
    }
  }, [session?.user?.name]);

  return (
    <div className={style.signupInfoPage}>
      <TopNavigation title={'지원하기'} />

      <div className={style.content}>
        <InformationTab index={2} />
        <SectionInfo title={'*기본정보'} />

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.imageArea}>
            <input
              type="file"
              id="profileInput"
              autoComplete={'off'}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={onChangeInputImage}
            />
            <div className={style.image} onClick={() => document.getElementById('profileInput')?.click()}>
              <>
                {!profileImageUrl && <Image src="/images/mallow.image.svg" alt="No Image" fill objectFit="contain" />}
                {profileImageUrl && <Image src={profileImageUrl} alt="No Image" fill objectFit="contain" />}
              </>
            </div>
            <div className={style.info}>
              <div className={style.label}>지원서 사진등록</div>
              <div className={style.label}>권장사이즈: 가로 160px X 세로 160px)</div>
            </div>
          </div>

          <div className={style.nameArea}>
            <div className={style.label}>이름</div>
            <input autoComplete={'off'} type="text" {...register('name')} required disabled readOnly />
          </div>

          <div className={style.nicknameArea}>
            <div className={style.label}>닉네임</div>
            <div className={style.nickname}>
              <div>
                <input
                  type="text"
                  placeholder="닉네임을 입력해주세요"
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
                      setIsPassNickname(false);
                    }, 300),
                  })}
                />
              </div>
              <div onClick={onClickNicknameCheck}>중복 확인</div>
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

          <Controller
            control={control}
            defaultValue={'M'}
            render={({ field }) => {
              return (
                <div className={style.genderArea}>
                  <div className={style.label}>성별</div>
                  <div
                    className={cx(
                      style.gender,
                      field.value === 'M' && style.leftSelected,
                      field.value === 'F' && style.rightSelected,
                    )}
                  >
                    <div
                      onClick={() => setValue('gender', 'M')}
                      className={cx(style.genderOption, field.value === 'M' && style.selected)}
                    >
                      <div>남</div>
                    </div>
                    <div
                      onClick={() => setValue('gender', 'F')}
                      className={cx(style.genderOption, field.value === 'F' && style.selected)}
                    >
                      <div>여</div>
                    </div>
                  </div>
                </div>
              );
            }}
            name={'gender'}
          ></Controller>
          <div className={style.birthArea}>
            <div className={style.label}>생년월일</div>
            <div className={style.date}>
              <input
                type="text"
                {...register('birth', {
                  required: '생년월일을 입력해주세요.',
                  minLength: {
                    value: 10,
                    message: '생년월일을 모두 입력해주세요.', // 에러 메세지
                  },
                  pattern: {
                    value: /^(19[0-9]{2}|20[0-9]{2}|2100)\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/,
                    message: '올바른 날짜를 입력해주세요.', // 에러 메세지
                  },
                })}
                maxLength={10}
                placeholder="YYYY.MM.DD"
                onChange={async (e) => {
                  const { value } = e.target;
                  const onlyNumber = value.replace(/[^0-9]/g, ''); // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
                  const birthdayString = getBirthNumberWithDot(onlyNumber);
                  setValue('birth', birthdayString);
                  await trigger('birth');
                }}
              />
            </div>

            {errors.birth && (
              <div className={cx(style.errorMessage, style.fail)}>
                <Image src="/images/nickname.wrong.svg" alt="No Image" width={20} height={20} />
                <div>{errors.birth.message}</div>
              </div>
            )}
          </div>

          <SectionInfo title={'*기타'} />

          <div className={style.contactArea}>
            <div className={style.labelLarge}>지원경로</div>
            <div className={style.contact}>
              <select className={style.input} {...register('funnelId')} autoComplete={'off'}>
                <option value={0}>선택없음</option>
                <option value={1}>광고</option>
                <option value={2}>지인 추천</option>
                <option value={3}>기타</option>
              </select>
              <div className={style.image}>
                <Image src="/images/arrow.bottom.svg" alt="No Image" fill objectFit="contain" />
              </div>
            </div>
          </div>

          <div className={style.recommendArea}>
            <div className={style.labelLarge}>추천인 입력</div>
            <div className={style.label}>추천인 입력시, 마시멜로우 10개를 드려요</div>

            <div className={style.recommend}>
              <input
                {...register('recommender', {})}
                autoComplete={'off'}
                type="text"
                placeholder="추천인 닉네임을 입력해주세요."
              />
            </div>
          </div>

          <div className={style.confirmArea}>
            <button type="submit" className={cx(style.confirmButton, isValid && isPassNickname && style.isActive)}>
              다음 단계
            </button>
          </div>
        </form>
        <div className={style.emptyArea}></div>
      </div>
    </div>
  );
}
