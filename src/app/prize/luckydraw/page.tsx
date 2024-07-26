'use client';
import Image from 'next/image';
import style from './prize.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import Confetti from 'react-confetti';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
export default function LuckyDrawPrizePage() {
  const router = useRouter();
  const mallowPageRef = useRef<HTMLDivElement>(null!);
  const [mallowPageClientWidthHeight, setMallowPageClientWidthHeight] = useState<{ width: number; height: number }>(null!);
  const randomPrize = Math.floor(Math.random() * 3 + 1);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMallowPageClientWidthHeight({
      width: mallowPageRef.current?.clientWidth,
      height: mallowPageRef.current?.clientHeight,
    });
  }, []);
  return (
    <div ref={mallowPageRef} className={style.winnerPrizePage}>
      <Image src="/images/x.cancel.black.svg" alt={'No Image'} className={style.xButton} width={24} height={24} />

      {/*<p className={style.detail}>{'축하해요! 4등에 당첨되었어요.\n지금 바로 마시멜로우를 지급해드려요.'}</p>*/}

      <div className={style.confetti}>
        {mallowPageClientWidthHeight && (
          <Confetti
            numberOfPieces={60}
            width={mallowPageClientWidthHeight.width}
            height={mallowPageClientWidthHeight.height}
          />
        )}
      </div>

      <div className={style.main}>
        <div className={style.warning}>
          <p>{'0000.00.00 까지 수령정보를 입력해주세요.\n기간 내 정보 미제출 시 경품수령이 불가합니다.'}</p>
        </div>
        <p className={style.title}>{randomPrize}등 당첨!</p>
        <div className={style.prize}></div>
        <p className={style.info}>{'[경품 이름]\n두줄인경우'}</p>

        <div className={style.taxDeliveryLinks}>
          {randomPrize < 3 && (
            <div className={cx(style.link, style.idle)} onClick={() => router.push('/prize/luckydraw/tax')}>
              <p className={style.name}>제세공과금 정보 입력하기</p>
              <div className={style.rightInput}>
                <div className={style.status}>
                  <p>미입력</p>
                </div>
                <Image src={'/images/arrow.right.gray.svg'} width={24} height={24} alt="No Image" />
              </div>
            </div>
          )}
          <div className={cx(style.link, style.idle)} onClick={() => router.push('/prize/luckydraw/address')}>
            <p className={style.name}>배송정보 입력하기</p>
            <div className={style.rightInput}>
              <div className={cx(style.status, style.idle)}>
                <p>미입력</p>
              </div>
              <Image src={'/images/arrow.right.gray.svg'} width={24} height={24} alt="No Image" />
            </div>
          </div>
          <p className={style.detail}>타인의 정보로 상품 수령 시 법적 제재가 들어갑니다.</p>
        </div>
      </div>

      <button onClick={() => router.push('/recreation/luckydraw')} className={style.confirmButton}>
        입력 정보 확인
      </button>
    </div>
  );
}
