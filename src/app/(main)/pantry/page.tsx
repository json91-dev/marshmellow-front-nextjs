import styles from './page.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AlarmCard from '@/app/(main)/pantry/_components/AlarmCard';
import AdBanner from '@/components/ads/AdBanner';

export default function PantryPage() {
  return (
    <div className={styles.pantryPage}>
      <div className={styles.header}>
        <p>탕비실</p>
      </div>
      <div className={styles.main}>
        <p className={styles.mainTitle}>
          {'직원들을 위한 탕비실 간식을\n'}
          {'차곡차곡 쌓고 있어요!'}
        </p>
        <div className={styles.mainImage}>
          <Image src="/images/pantry.main.png" alt="No Image" fill objectFit={'contain'} />
        </div>

        <div className={styles.researchCard}>
          <p>
            {'탕비실 물건 및 회사 생활에 대해\n'}
            {'설문조사를 하고 있습니다.'}
          </p>
          <Image src="/images/pantry.document.svg" alt="No Image" width={100} height={100} />

          <Link href={'/research/pantry'} className={styles.button}>
            <p>설문조사</p>
          </Link>
        </div>
        <AlarmCard />
      </div>
      <div className={styles.banner}>
        <AdBanner dataAdSlot={'3341770865'} dataFullWidthResponsive={false} dataAdFormat={'inline'} />
      </div>
    </div>
  );
}
