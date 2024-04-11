'use client';

import style from './pageLinks.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PageLinks() {
  const router = useRouter();

  return (
    <div className={style.container}>
      {/*<div className={style.link}>*/}
      {/*  <div>친구 초대</div>*/}
      {/*  <Image src={'/images/arrow.right.svg'} width={24} height={24} alt="No Image" />*/}
      {/*</div>*/}

      <div className={style.link}>
        <div>사용가이드</div>
        <Image src={'/images/arrow.right.svg'} width={24} height={24} alt="No Image" />
      </div>

      <div className={style.link}>
        <div>이벤트</div>
        <Image src={'/images/arrow.right.svg'} width={24} height={24} alt="No Image" />
      </div>

      <div className={style.link} onClick={() => router.push('/notice')}>
        <div>공지사항</div>
        <Image src={'/images/arrow.right.svg'} width={24} height={24} alt="No Image" />
      </div>
    </div>
  );
}
