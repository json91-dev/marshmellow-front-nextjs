'use client';
import styles from './onboarding.module.scss';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getLocalStorage, setLocalStorage } from '@/utils/utils';

export default function OnboardingGuide() {
  const [currentCartoonPage, setCurrentCartoonPage] = useState(1);
  const router = useRouter();
  const [hasSeenOnboardingGuide, setHasSeenOnboardingGuide] = useState(getLocalStorage('HAS_SEEN_ONBOARDING_GUIDE'));

  const onClickMoveBeforePage = useCallback(() => {
    setCurrentCartoonPage(currentCartoonPage - 1);
  }, [currentCartoonPage]);

  const onClickMoveAfterPage = useCallback(() => {
    if (currentCartoonPage === 5) {
      router.replace('login');
      setHasSeenOnboardingGuide(true);
      setLocalStorage('HAS_SEEN_ONBOARDING_GUIDE', true);
      return;
    }

    setCurrentCartoonPage(currentCartoonPage + 1);
  }, [currentCartoonPage]);

  const onClickCancelButton = useCallback(() => {
    setHasSeenOnboardingGuide(true);
    setLocalStorage('HAS_SEEN_ONBOARDING_GUIDE', true);
  }, []);

  if (hasSeenOnboardingGuide) {
    return <></>;
  }

  return (
    <div className={styles.onboarding}>
      <Image
        onClick={onClickCancelButton}
        src="/images/x.cancel.black.svg"
        alt={'No Image'}
        className={styles.xButton}
        width={24}
        height={24}
      />
      <div className={styles.body}>
        <div className={styles.cartoonArea}>
          {currentCartoonPage === 1 && (
            <Image className={styles.fadeIn} src="/images/onboarding.1.png" alt={'No Image'} width={266} height={213} />
          )}
          {currentCartoonPage === 2 && (
            <Image className={styles.fadeIn} src="/images/onboarding.2.png" alt={'No Image'} width={266} height={207} />
          )}
          {currentCartoonPage === 3 && (
            <Image className={styles.fadeIn} src="/images/onboarding.3.png" alt={'No Image'} width={266} height={207} />
          )}
          {currentCartoonPage === 4 && (
            <Image className={styles.fadeIn} src="/images/onboarding.4.png" alt={'No Image'} width={266} height={207} />
          )}
          {currentCartoonPage === 5 && (
            <Image className={styles.fadeIn} src="/images/onboarding.5.png" alt={'No Image'} width={266} height={207} />
          )}
        </div>

        <div className={styles.infoArea}>
          <div className={styles.description}>
            <p className={styles.title}>마시멜로우를 소개합니다! | 마시멜로우 둘러보기</p>
            <p className={styles.views}>조회수 486회</p>
          </div>
          <div className={styles.channelProfile}>
            <Image src="/images/mallow.tv.profile.svg" alt={'No Image'} width={32} height={32} />
            <p>마시멜로우 TV</p>
          </div>
        </div>
      </div>

      <div className={styles.buttonArea}>
        {currentCartoonPage !== 1 && (
          <button className={styles.cancelButton} onClick={onClickMoveBeforePage}>
            이전
          </button>
        )}
        <button className={styles.confirmButton} onClick={onClickMoveAfterPage}>
          {currentCartoonPage === 5 ? '지원하기' : '다음'}
        </button>
      </div>
    </div>
  );
}
