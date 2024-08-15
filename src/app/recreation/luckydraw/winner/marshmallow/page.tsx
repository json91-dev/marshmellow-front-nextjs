'use client';
import Image from 'next/image';
import styles from './winnerMarshmallow.module.scss';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';
import { useEffect, useRef, useState } from 'react';
export default function LuckyDrawWinnerMarshmallow() {
  const router = useRouter();
  const mallowPageRef = useRef<HTMLDivElement>(null!);
  const [mallowPageClientWidthHeight, setMallowPageClientWidthHeight] = useState<{ width: number; height: number }>(null!);

  useEffect(() => {
    setMallowPageClientWidthHeight({
      width: mallowPageRef.current?.clientWidth,
      height: mallowPageRef.current?.clientHeight,
    });
  }, []);
  return (
    <div ref={mallowPageRef} className={styles.winnerMallowPage}>
      <p className={styles.title}>4등 당첨!</p>
      <div className={styles.prize}>
        <MallowPrizeBox count={3} />
      </div>
      <p className={styles.info}>마시멜로우 3개</p>
      <p className={styles.detail}>{'축하해요! 4등에 당첨되었어요.\n지금 바로 마시멜로우를 지급해드려요.'}</p>
      <button onClick={() => router.push('/recreation/luckydraw')} className={styles.confirmButton}>
        확인
      </button>
      <div className={styles.confetti}>
        {mallowPageClientWidthHeight && (
          <Confetti
            numberOfPieces={60}
            width={mallowPageClientWidthHeight.width}
            height={mallowPageClientWidthHeight.height}
          />
        )}
      </div>
    </div>
  );
}

function MallowPrizeBox({ count }: { count: number }) {
  return (
    <div className={styles.mallowPrizeBox}>
      <div>
        <Image src={'/images/snack.gray.svg'} width={92} height={92} alt="No Image" />
      </div>
      <div className={styles.count}>
        <p>X{count}</p>
      </div>
    </div>
  );
}
