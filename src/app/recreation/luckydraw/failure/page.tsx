import styles from './page.module.scss';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function LuckyDrawFailurePage() {
  return (
    <div className={styles.luckyDrawFailurePage}>
      <p className={styles.title}>{`아쉬워요ㅠㅠ\n다음 기회를 노려보세요!`}</p>
      <div className={styles.failureImg}>
        <Image src="/images/luckydraw.failture.svg" alt="No Image" fill />
      </div>
      <Link className={styles.confirmButton} href="/recreation/luckydraw" replace={true}>
        <p>확인</p>
      </Link>

      <div className={styles.researchImg}>
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
