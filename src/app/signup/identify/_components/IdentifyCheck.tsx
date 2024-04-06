'use client';

import style from './identifyCheck.module.scss';
import Image from 'next/image';
import ConfirmButton from '@/app/signup/_components/ConfirmButton';
import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import { useModalStore } from '@/store/modal';

export default function IdentifyCheck() {
  const [isRunningPASS, setIsRunningPASS] = useState(false);
  const { showTermsBottomSheet } = useModalStore();

  const onClickStartPASS = useCallback(() => {
    // setIsRunningPASS(true);
    // openAuthSuccessModal();
    showTermsBottomSheet(true);
  }, [isRunningPASS]);

  const onClickConfirmPASS = useCallback(() => {}, []);

  return (
    <div className={cx(style.container, !isRunningPASS && style.bgGray)}>
      {!isRunningPASS && (
        <>
          <div className={style.image}>
            <Image src="/images/mallow.work.svg" alt="No Image" fill objectFit="contain" />
          </div>
          <div className={style.description}>입사지원을 위해 최초 1회 본인인증이 필요합니다.</div>
          <ConfirmButton
            onClick={onClickStartPASS}
            text={'본인인증하기'}
            customStyle={{ fontSize: '1.3rem', width: '80%' }}
          />
        </>
      )}

      {isRunningPASS && (
        <>
          <div className={style.title}>현재 인증이 진행중입니다.</div>
          <div className={style.description}>통신사 앱에서 인증 후, 아래 [확인]버튼을 꼭 누르세요.</div>
          <ConfirmButton
            onClick={onClickConfirmPASS}
            text={'확인'}
            customStyle={{ fontSize: '1.3rem', width: '80%' }}
          />
        </>
      )}
    </div>
  );
}
