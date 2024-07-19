import style from './failure.module.scss';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function LuckyDrawFailurePage() {
  return (
    <div className={style.luckyDrawFailurePage}>
      <p className={style.title}>{`아쉬워요ㅠㅠ\n다음 기회를 노려보세요!`}</p>
      <div className={style.failureImg}>
        <Image src="/images/luckydraw.failture.svg" alt="No Image" fill />
      </div>
      <Link className={style.confirmButton} href="/recreation/luckydraw" replace={true}>
        <p>확인</p>
      </Link>

      <div className={style.researchImg}>
        <Link href="/research/luckydraw">
          <Image
            src="/images/luckydraw.research.starbucks.png"
            alt="No Image"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </Link>
      </div>
    </div>
  );
}
