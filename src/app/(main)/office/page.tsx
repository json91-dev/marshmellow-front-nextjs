'use client';
import style from './office.module.scss';
import Image from 'next/image';
import React from 'react';

export default function OfficePage() {
  return (
    <div className={style.officePage}>
      <div className={style.myMallowArea}>
        <div className={style.logo}></div>
        <div className={style.myMallow}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
          <p>127</p>
        </div>
      </div>

      <div className={style.body}>
        <div className={style.topCarousel}>
          <div className={style.pagination}>
            <p>1/10</p>
          </div>
        </div>
        <div className={style.todayArea}>
          <div className={style.myIcon}>
            <div className={style.nameRank}>{`인턴\n`}</div>
            <div className={style.name}>{`홍길동`}</div>
            <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={100} height={100} />
          </div>
          <div className={style.todayMission}>
            <div>
              <p>오늘의 업무</p>
              <p>02.28 (수)</p>
            </div>
            <div>
              <div>
                <p>출근</p>
                <p>10:00 - 10:15</p>
                <div>
                  <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
                  <p>+?</p>
                </div>
              </div>

              <div>
                <p>점심</p>
                <p>13:00 - 13:15</p>
                <div>
                  <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
                  <p>+?</p>
                </div>
              </div>

              <div>
                <p>퇴근</p>
                <p>19:00 - 19:15</p>
                <div>
                  <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
                  <p>+?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.attendance}>
          <div>
            <p>근태 관리</p>
            <p>2024.02.26 ~ 2024.03.03</p>
            <Image src="/images/arrow.gray.right.svg" alt="No Image" width={100} height={100} />
          </div>
          <div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>월</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>화</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>수</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>목</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>금</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>토</p>
              <div className={style.dot}></div>
            </div>
            <div>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>일</p>
              <div className={style.dot}></div>
            </div>
          </div>
        </div>
        <div className={style.enjoy}>
          <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
          <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
        </div>
      </div>

      <div className={style.timeCheckArea}>
        <div className={style.timeLeft}>
          <div className={style.timer}>09:47:15</div>
          <div className={style.timeInfo}>
            <p>
              정시출근까지 <span>12분 45초</span> 남았어요
            </p>
          </div>
        </div>
        <div className={style.rightIcon}>
          <Image src="/images/mallow.sleep.circle.svg" alt="No Image" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
