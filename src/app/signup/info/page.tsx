'use client';

import style from './info.module.scss';
import InformationTab from '@/app/signup/_components/InformationTab';
import React, { useCallback, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import SectionInfo from '@/app/signup/_components/SectionInfo';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
// import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import TopNavigation from '@/app/_components/common/TopNavigation';

/** 회원가입 정보 입력 페이지 **/
export default function SignupInfoPage() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birth, setBirth] = useState('');
  const [recommender, setRecommender] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [gender, setGender] = useState<string>('M');
  const [isActive, setIsActive] = useState(true);
  const router = useRouter();
  const { data: session } = useSession();

  const selectGender = useCallback(
    (gender: string) => {
      setGender(gender);
    },
    [gender],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSubmitted(true);

    if (!nickname) {
      console.log('닉네임을 입력해주세요.');
      return; // 닉네임이 입력되지 않았을 경우 함수를 여기서 종료
    }

    if (!gender) {
      console.log('성별을 선택해주세요.');
      return; // 성별이 선택되지 않았을 경우 함수를 여기서 종료
    }

    // 닉네임과 성별이 모두 입력되었을 때 처리할 로직
    console.log('Submitted data:', { nickname, gender });
  };

  useEffect(() => {
    // setBirthdate('1991.09.11');
  }, []);

  // const onDateTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let { value } = e.target;
  //   value = value.replace(/[^0-9]/g, ''); // 숫자가 아닌 문자는 제거
  //   if (value.length > 4) {
  //     value = value.slice(0, 4) + '.' + value.slice(4);
  //   }
  //   if (value.length > 7) {
  //     value = value.slice(0, 7) + '.' + value.slice(7);
  //   }
  //   setBirthdate(value);
  // };

  return (
    <div className={style.signupInfoPage}>
      <TopNavigation title={'지원하기'} />

      <div className={style.content}>
        <InformationTab index={2} />
        <SectionInfo title={'*기본정보'} />

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.imageArea}>
            <div className={style.image}>
              <Image src="/images/mallow.image.svg" alt="No Image" fill objectFit="contain" />
            </div>
            <div className={style.info}>
              <div className={style.label}>지원서 사진등록</div>
              <div className={style.label}>권장사이즈: 가로 160px X 세로 160px)</div>
            </div>
          </div>

          <div className={style.nameArea}>
            <div className={style.label}>이름</div>
            <input value={session?.user?.name} type="text" required disabled={true} />
          </div>

          <div className={style.nicknameArea}>
            <div className={style.label}>닉네임</div>
            <div className={style.nickname}>
              <div>
                <input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  type="text"
                  placeholder="특수문자 제외 2~8자"
                  required
                />
              </div>
              <div onClick={() => {}}>중복 확인</div>
            </div>

            <div className={style.message}>
              <Image src="/images/nickname.ok.svg" alt="No Image" width={20} height={20} />
              <div>사용할 수 있는 닉네임이에요</div>
            </div>
          </div>

          <div className={style.genderArea}>
            <div className={style.label}>성별</div>
            <div
              className={cx(style.gender, gender === 'M' && style.leftSelected, gender === 'F' && style.rightSelected)}
            >
              <div
                onClick={() => selectGender('M')}
                className={cx(style.genderOption, gender === 'M' && style.selected)}
              >
                <div>남</div>
              </div>
              <div
                onClick={() => selectGender('F')}
                className={cx(style.genderOption, gender === 'F' && style.selected)}
              >
                <div>여</div>
              </div>
            </div>
          </div>

          <div className={style.birthArea}>
            <div className={style.label}>생년월일</div>
            <div className={style.date}>
              <input
                type={'text'}
                value={birth}
                pattern="\d*"
                // onChange={onDateTextChange}
                maxLength={10}
                placeholder="YYYY.MM.DD"
                required
              />
            </div>
          </div>

          <SectionInfo title={'*기타'} />

          <div className={style.contactArea}>
            <div className={style.labelLarge}>지원경로</div>
            <div className={style.contact}>
              <select className={style.input}>
                <option selected={true} value="선택없음">
                  선택없음
                </option>
                <option value="0">광고</option>
                <option value="1">지인 추천</option>
                <option value="2">기타</option>
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
              <input type="text" placeholder="추천인 닉네임을 입력해주세요." />
            </div>
          </div>

          <div className={style.confirmArea}>
            <button
              onClick={() => router.push('/signup/submit')}
              type="submit"
              className={cx(style.confirmButton, isActive && style.isActive)}
            >
              다음 단계
            </button>
          </div>
        </form>
        <div className={style.emptyArea}></div>
      </div>
    </div>
  );
}
