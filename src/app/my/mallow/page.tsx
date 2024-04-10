import style from './marshmallow.module.scss';
import TopNavigation from '@/app/my/mallow/_components/TopNavigation';
import HorizontalLine from '@/app/my/_components/HorizontalLine';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

export default function MarshmallowPage() {
  return (
    <div className={style.myMarshMallowPage}>
      <TopNavigation />
      <div className={style.title}>사용 가능 마시멜로우</div>
      <div className={style.currentMallow}>
        <div className={style.left}>
          <Image src="/images/mallow.snack.svg" alt="No Image" width={34} height={34} />
          <div>324개</div>
        </div>
        <div className={style.right}>
          <div>당월 소멸 예정 마시멜로우 조회</div>
          <Image src={'/images/arrow.right.svg'} width={30} height={30} alt="No Image" />
        </div>
      </div>

      <div className={style.horizontalLine}></div>

      <div className={style.filterAction}>
        <div className={style.action}>전체</div>
        <div className={style.action}>획득</div>
        <div className={style.action}>사용</div>
        <div className={cx(style.action, style.active)}>소멸</div>
      </div>

      <div className={style.banner}>적응형 배너</div>

      <div className={style.filterDate}>
        <div>1개월</div>
        <Image src={'/images/arrow.bottom.svg'} width={30} height={30} alt="No Image" />
      </div>

      <div className={style.actionHistory}>
        <div className={style.actionDate}>{'2024.\n01.01'}</div>
        <div className={style.actionList}>
          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>
        </div>
      </div>

      <div className={style.banner}>적응형 배너</div>

      <div className={style.actionHistory}>
        <div className={style.actionDate}>12.31</div>
        <div className={style.actionList}>
          <div className={style.item}>
            <div className={style.info}>
              <div>레크레이션</div>
              <div>뽑기 참여</div>
              <div>18:53 | 사용</div>
            </div>
            <div className={style.count}>-3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>근태</div>
              <div>출근 완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>업무</div>
              <div>점심시간 완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>

          <div className={style.item}>
            <div className={style.info}>
              <div>업무</div>
              <div>정시퇴근 완료</div>
              <div>18:53 | 획득</div>
            </div>
            <div className={style.count}>+3개</div>
          </div>
        </div>
      </div>

      <div className={style.oneYearInfo}>최근 1년 내역만 확인할 수 있습니다.</div>

      <div className={style.banner}>적응형 배너</div>
    </div>
  );
}
