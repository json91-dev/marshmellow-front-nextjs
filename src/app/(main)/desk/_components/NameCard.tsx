import style from './nameCard.module.scss';
import Image from 'next/image';
import React from 'react';
import TicketLinks from '@/app/(main)/desk/_components/TickekLinks';

export default function NameCard() {
  return (
    <div className={style.container}>
      <div className={style.topName}>MARSHMALLOW</div>

      <div className={style.profile}>
        <Image src="/images/icon_marshmellow.svg" alt="No Image" width={68} height={68} />
      </div>

      <div className={style.nickname}>
        <div>닉네임</div>
        <div> {'>'} </div>
      </div>

      <div className={style.detailInfo}>
        <div>
          <div>입사일</div>
          <div>직급</div>
          <div>근무시간</div>
        </div>

        <div>
          <div className={style.workPeriod}>
            <div>2022년 00월 00일</div>
            <div className={style.workPeriodTag}>0년 0개월 0일 재직</div>
          </div>
          <div>인턴</div>
          <div>08:00 ~ 17:00 (점심시간 12:00)</div>
        </div>
      </div>

      <div className={style.logo}></div>
    </div>
  );
}
