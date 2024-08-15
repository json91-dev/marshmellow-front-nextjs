'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import Confetti from 'react-confetti';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import buttonStyle from '@/moduleStyle/Button.module.scss';
export default function LuckyDrawPrizePage() {
  const router = useRouter();
  const mallowPageRef = useRef<HTMLDivElement>(null!);
  const [mallowPageClientWidthHeight, setMallowPageClientWidthHeight] = useState<{ width: number; height: number }>(null!);
  const randomPrize = useRef(1);
  // const searchParams = useSearchParams();
  // useEffect(() => {
  //   randomPrize.current = Math.floor(Math.random() * 3 + 1);
  // }, []);

  useEffect(() => {
    setMallowPageClientWidthHeight({
      width: mallowPageRef.current?.clientWidth,
      height: mallowPageRef.current?.clientHeight,
    });
  }, []);
  return (
    <div ref={mallowPageRef} className={styles.winnerPrizePage}>
      <Image src="/images/x.cancel.black.svg" alt={'No Image'} className={styles.xButton} width={24} height={24} />

      {/*<p className={styles.detail}>{'축하해요! 4등에 당첨되었어요.\n지금 바로 마시멜로우를 지급해드려요.'}</p>*/}

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

        <div className={styles.taxDeliveryLinks}>
          {randomPrize.current < 3 && (
            <div className={cx(styles.link, styles.idle)} onClick={() => router.push('/prize/luckydraw/tax/info')}>
              <p className={styles.name}>제세공과금 정보 입력하기</p>
              <div className={styles.rightInput}>
                <div className={styles.status}>
                  <p>미입력</p>
                </div>
                <Image src={'/images/arrow.right.gray.svg'} width={24} height={24} alt="No Image" />
              </div>
            </div>
          )}
          <div className={cx(styles.link, styles.idle)} onClick={() => router.push('/prize/luckydraw/tax/info')}>
            <p className={styles.name}>배송정보 입력하기</p>
            <div className={styles.rightInput}>
              <div className={cx(styles.status, styles.idle)}>
                <p>미입력</p>
              </div>
              <Image src={'/images/arrow.right.gray.svg'} width={24} height={24} alt="No Image" />
            </div>
          </div>
          <p className={styles.detail}>타인의 정보로 상품 수령 시 법적 제재가 들어갑니다.</p>
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div
          onClick={() => router.push('/recreation/luckydraw')}
          className={cx(buttonStyle.confirmButton, 1 !== 1 && buttonStyle.active)}
        >
          입력 정보 확인
        </div>
      </div>
    </div>
  );
}
