'use client';
import styles from './prizeStepDefault.module.scss';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import useToastStore from '@/store/toastStore';
import useModalStore from '@/store/modalStore';

export default function PrizeStepDefault() {
  const router = useRouter();
  const mallowPageRef = useRef<HTMLDivElement>(null!);
  const [mallowPageClientWidthHeight, setMallowPageClientWidthHeight] = useState<{ width: number; height: number }>(null!);
  const randomPrize = useRef<number>(null!);
  const { openToast } = useToastStore();
  const { showLuckyDrawWinnerPrizePhoneCheckModal } = useModalStore();
  useEffect(() => {
    setMallowPageClientWidthHeight({
      width: mallowPageRef.current?.clientWidth,
      height: mallowPageRef.current?.clientHeight,
    });

    randomPrize.current = Math.floor(Math.random() * 3 + 1);
  }, []);
  return (
    <div ref={mallowPageRef} className={cx(styles.prizeStepDefault, randomPrize.current === 1 && styles.fistPrize)}>
      <div className={styles.confetti}>
        {mallowPageClientWidthHeight && (
          <Confetti
            numberOfPieces={60}
            width={mallowPageClientWidthHeight.width}
            height={mallowPageClientWidthHeight.height}
          />
        )}
      </div>

      <div className={styles.main}>
        <div className={styles.warning}>
          <p>{'0000.00.00 까지 수령정보를 입력해주세요.\n기간 내 정보 미제출 시 경품수령이 불가합니다.'}</p>
        </div>
        <p className={styles.title}>{randomPrize.current}등 당첨!</p>
        <div className={styles.prize}></div>
        <p className={styles.info}>{'[경품 이름]\n두줄인경우'}</p>
        <p className={styles.detail}>
          {'당첨 안내 문자를 받을 연락처를 확인해주세요.\n(본인인증 완료한 연락처로만 가능합니다.)'}
        </p>

        <div className={styles.phoneInfo}>
          <p>연락처</p>
          <p>인증된 연락처가 변경된 경우 본인인증 후 변경이 가능해요.</p>
        </div>

        <div className={styles.phone}>
          <p className={styles.number}>010-0000-0000</p>
          <div className={styles.changeButton} onClick={() => openToast('PASS 본인인증 이동')}>
            <p>변경하기</p>
          </div>
        </div>
      </div>

      <button onClick={() => showLuckyDrawWinnerPrizePhoneCheckModal(true)} className={styles.confirmButton}>
        확인
      </button>
    </div>
  );
}
