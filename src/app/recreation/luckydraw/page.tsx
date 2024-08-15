import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';
import TopNavigationWithMallow from '@/components/nav/TopNavigationWithMallow';
import FeverGauge from '@/app/recreation/luckydraw/_components/FeverGauge';
import LuckDrawCarousel from '@/app/recreation/luckydraw/_components/LuckDrawCarousel';
import AccordionInfo from '@/app/recreation/luckydraw/_components/AccordionInfo';

export default function luckDrawPage() {
  return (
    <div className={styles.luckyDrawPage}>
      <TopNavigationWithMallow title={'행운의 뽑기'} path={'/recreation'} />
      <div className={styles.inner} id={'scrollArea'}>
        <div className={styles.header}>
          <div className={styles.pickupCount}>
            <p>1번째 뽑기판</p>
          </div>
          <Image src="/images/luckydraw.header.title.svg" alt="No Image" width={174} height={46} />
          <div className={styles.prizeImg}>
            <Image src="/images/luckydraw.header.card.png" alt="No Image" fill />
          </div>

          <FeverGauge percentage={10} />
        </div>

        <div className={styles.main}>
          <p className={styles.pickupInfo}>뽑기를 클릭해 뽑아보세요 (0/5)</p>

          <LuckDrawCarousel />
          <div className={styles.luckyDrawProduct}>
            <Image src="/images/luckydraw.prize.text.svg" alt="No Image" width={131} height={30} />
            <Image src="/images/luckydraw.prize.card.png" alt="No Image" width={320} height={510} />
          </div>

          <div className={styles.luckyDrawHowto}>
            <Image src="/images/luckydraw.howto.text.svg" alt="No Image" width={79} height={30} />
            <p>{'마시멜로우 직원분들이라면\n누구나 마시멜로우를 이용해 뽑기가 가능해요!'}</p>
            <Image src="/images/luckydraw.howto.card.png" alt="No Image" width={320} height={316} />
          </div>

          <AccordionInfo />
        </div>
      </div>
    </div>
  );
}
