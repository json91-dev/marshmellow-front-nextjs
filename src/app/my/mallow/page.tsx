'use client';
import style from './marshmallow.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import cx from 'classnames';
import { useModalStore } from '@/store/modal';
import TopNavigation from '@/app/_components/common/TopNavigation';

type filterActionType = 'All' | 'Acquire' | 'Use' | 'Expire';

export default function MarshmallowPage() {
  const [filterAction, setFilterAction] = useState<filterActionType>('All');
  const { showMallowFilterDateBottomSheet, showMallowExpiredThisMonthModal } = useModalStore();

  // 액션을 클릭할 때 호출되는 함수
  const handleActionClick = (action: filterActionType) => {
    setFilterAction(action); // 상태 업데이트
  };

  return (
    <div className={style.myMarshMallowPage}>
      <TopNavigation title={'내 마시멜로우'} />
      <div className={style.content}>
        <div className={style.title}>사용 가능 마시멜로우</div>
        <div className={style.currentMallow}>
          <div className={style.left}>
            <Image src="/images/snack.gray.svg" alt="No Image" width={34} height={34} />
            <div>324개</div>
          </div>
          <div className={style.right} onClick={() => showMallowExpiredThisMonthModal(true)}>
            <div>당월 소멸 예정 마시멜로우 조회</div>
            <Image src={'/images/arrow.right.svg'} width={30} height={30} alt="No Image" />
          </div>
        </div>

        <div className={style.horizontalLine}></div>

        <div className={style.filterAction}>
          <div
            className={cx(style.action, filterAction === 'All' && style.active)}
            onClick={() => handleActionClick('All')}
          >
            전체
          </div>
          <div
            className={cx(style.action, filterAction === 'Acquire' && style.active)}
            onClick={() => handleActionClick('Acquire')}
          >
            획득
          </div>
          <div
            className={cx(style.action, filterAction === 'Use' && style.active)}
            onClick={() => handleActionClick('Use')}
          >
            사용
          </div>
          <div
            className={cx(style.action, filterAction === 'Expire' && style.active)}
            onClick={() => handleActionClick('Expire')}
          >
            소멸
          </div>
        </div>

        <div className={style.banner}>적응형 배너</div>

        <div className={style.filterDate} onClick={() => showMallowFilterDateBottomSheet(true)}>
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
              <div className={cx(style.count, style.decrease)}>-3개</div>
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
    </div>
  );
}
