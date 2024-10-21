import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';
import TopNavigationWithMallow from '@/components/nav/TopNavigationWithMallow';
import Link from 'next/link';
import AdBanner from '@/components/ads/AdBanner';

export default function RecreationPage() {
  return (
    <div className={styles.recreationPage}>
      <TopNavigationWithMallow title={'레크레이션'} />
      <div className={styles.main}>
        <div className={styles.bg}></div>
        <div className={styles.title}>
          <p>{`마시멜로우로\n참여하고 선물 받으세요!`}</p>
        </div>
        <div className={styles.recreationImage}>
          <Image src="/images/recreation.header.svg" alt="No Image" width={360} height={151} />
        </div>

        <div className={styles.headerImage}></div>
        <div className={styles.banner}>
          <AdBanner dataAdSlot={'3341770865'} dataFullWidthResponsive={true} />
        </div>
        <Link href={'/recreation/luckydraw'}>
          <div className={styles.luckyDrawLink}>
            <Image src="/images/recreation.luckdraw.card.svg" alt="No Image" fill />
          </div>
        </Link>
        <Image src="/images/recreation.new.card.svg" alt="No Image" width={320} height={155} />
        <div className={styles.banner}>
          <AdBanner dataAdSlot={'3341770865'} dataFullWidthResponsive={true} />
        </div>
      </div>
    </div>
  );
}
