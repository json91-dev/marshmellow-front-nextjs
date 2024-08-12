import style from './page.module.scss';
import React from 'react';
import Image from 'next/image';

export default function DeskPage() {
  return (
    <div className={style.deskPage}>
      <div className={style.header}>
        <p>탕비실</p>
      </div>
      <div className={style.main}>
        <p className={style.mainTitle}>
          {'직원들을 위한 탕비실 간식을\n'}
          {'차곡차곡 쌓고 있어요!'}
        </p>
        <div className={style.mainImage}>
          <Image src="/images/pantry.main.png" alt="No Image" fill objectFit={'contain'} />
        </div>

        <div className={style.researchCard}>
          <p>
            {'탕비실 물건 및 회사 생활에 대해\n'}
            {'설문조사를 하고 있습니다.'}
          </p>
          <Image src="/images/pantry.document.svg" alt="No Image" width={100} height={100} />
          <div className={style.button}>
            <p>설문조사</p>
          </div>
        </div>
        <div className={style.alarmCard}>
          <p>탕비실 오픈 시 알림을 보내드려요</p>
          <div className={style.alarmButton}>
            <p>오픈 알림 받기</p>
          </div>
        </div>
      </div>
      <div className={style.banner}>적응형 배너</div>
    </div>
  );
}
