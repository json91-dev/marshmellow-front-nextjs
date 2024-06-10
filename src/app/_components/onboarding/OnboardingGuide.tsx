'use client';
import style from './onboarding.module.scss';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getLocalStorage, setLocalStorage } from '@/utils/utils';

export default function OnboardingGuide() {
  const [currentCartoonPage, setCurrentCartoonPage] = useState(1);
  const router = useRouter();
  const [hasSeenOnboardingGuide, setHasSeenOnboardingGuide] = useState(getLocalStorage('hasSeenOnboardingGuide'));

  const onClickMoveBeforePage = useCallback(() => {
    setCurrentCartoonPage(currentCartoonPage - 1);
  }, [currentCartoonPage]);

  const onClickMoveAfterPage = useCallback(() => {
    if (currentCartoonPage === 5) {
      router.replace('login');
      setHasSeenOnboardingGuide(true);
      setLocalStorage('hasSeenOnboardingGuide', true);
      return;
    }

    setCurrentCartoonPage(currentCartoonPage + 1);
  }, [currentCartoonPage]);

  const onClickCancelButton = useCallback(() => {
    setHasSeenOnboardingGuide(true);
    setLocalStorage('hasSeenOnboardingGuide', true);
  }, []);

  if (hasSeenOnboardingGuide) {
    return <></>;
  }

  return (
    <div className={style.onboarding}>
      <Image
        onClick={onClickCancelButton}
        src="/images/x.cancel.black.svg"
        alt={'No Image'}
        className={style.xButton}
        width={24}
        height={24}
      />
      <div className={style.body}>
        <div className={style.cartoonArea}>
          {currentCartoonPage === 1 && (
            <Image className={style.fadeIn} src="/images/onboarding.1.png" alt={'No Image'} fill />
          )}
          {currentCartoonPage === 2 && (
            <Image className={style.fadeIn} src="/images/onboarding.2.png" alt={'No Image'} fill />
          )}
          {currentCartoonPage === 3 && (
            <Image className={style.fadeIn} src="/images/onboarding.3.png" alt={'No Image'} fill />
          )}
          {currentCartoonPage === 4 && (
            <Image className={style.fadeIn} src="/images/onboarding.4.png" alt={'No Image'} fill />
          )}
          {currentCartoonPage === 5 && (
            <Image className={style.fadeIn} src="/images/onboarding.5.png" alt={'No Image'} fill />
          )}
        </div>

        <div className={style.infoArea}>
          <div className={style.description}>
            <p className={style.title}>마시멜로우를 소개합니다! | 마시멜로우 둘러보기</p>
            <p className={style.views}>조회수 486회</p>
          </div>
          <div className={style.channelProfile}>
            <Image src="/images/mallow.tv.profile.svg" alt={'No Image'} width={32} height={32} />
            <p>마시멜로우 TV</p>
          </div>
        </div>
      </div>

      <div className={style.buttonArea}>
        {currentCartoonPage !== 1 && (
          <button className={style.cancelButton} onClick={onClickMoveBeforePage}>
            이전
          </button>
        )}
        <button className={style.confirmButton} onClick={onClickMoveAfterPage}>
          {currentCartoonPage === 5 ? '지원하기' : '다음'}
        </button>
      </div>
    </div>
  );
}
