import Image from 'next/image';
import React from 'react';
import style from './recreation.module.scss';
import TopNavigationWithMallow from '@/app/_components/common/TopNavigationWithMallow';
import Link from 'next/link';

export default function RecreationPage() {
  return (
    <div className={style.recrationPage}>
      <TopNavigationWithMallow title={'레크레이션'} path={'/recreation'} />
      <div className={style.main}>
        <div className={style.bg}></div>
        <div className={style.title}>
          <p>{`마세멜로우로\n참여하고 선물 받으세요!`}</p>
        </div>
        <div className={style.recreationImage}>
          <Image src="/images/recreation.header.svg" alt="No Image" width={360} height={151} />
        </div>

        <div className={style.headerImage}></div>
        <div className={style.banner}>적응형 배너</div>
        <Link href={'/recreation/luckydraw'}>
          <div className={style.luckyDrawLink}>
            <Image src="/images/recreation.luckdraw.card.svg" alt="No Image" fill />
          </div>
        </Link>
        <Image src="/images/recreation.new.card.svg" alt="No Image" width={320} height={155} />
        <div className={style.banner}>적응형 배너</div>
      </div>
    </div>
  );
}
