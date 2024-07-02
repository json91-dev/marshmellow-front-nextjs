import TopNavigation from '@/app/_components/common/TopNavigation';
import Image from 'next/image';
import React from 'react';
import style from './luckdraw.module.scss';
import TopNavigationWithMallow from '@/app/_components/common/TopNavigationWithMallow';

export default function luckDrawPage() {
  return (
    <div className={style.luckyDrawPage}>
      <TopNavigationWithMallow title={'행운의 뽑기'} path={'/recreation'} />
      <div className={style.header}>
        <div className={style.pickupCount}>
          <p>1번째 뽑기판</p>
        </div>
        <Image src="/images/luckydraw.header.title.svg" alt="No Image" width={174} height={46} />
        <div className={style.prizeImg}>
          <Image src="/images/luckydraw.header.card.png" alt="No Image" fill />
        </div>
        <div className={style.feverGaugeLabel}>
          <p>피버 게이지</p>
          <Image src="/images/question.mark.svg" alt="No Image" width={24} height={24} />
        </div>
        <div className={style.feverGauge} />
      </div>

      <p>뽑기를 클릭해 뽑아보세요 (0/5)</p>
      <div>뽑기 영역</div>
      <div>
        <Image src="/images/luckydraw.howto.text.svg" alt="No Image" width={24} height={24} />
        <Image src="/images/luckydraw.howto.card.png" alt="No Image" width={24} height={24} />
      </div>

      <div>
        <Image src="/images/luckydraw.prize.text.svg" alt="No Image" width={24} height={24} />
        <p></p>
        <Image src="/images/luckydraw.prize.card.png" alt="No Image" width={24} height={24} />
      </div>

      <div></div>
    </div>
  );
}
