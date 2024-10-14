'use client';
import styles from './page.module.scss';
import Image from 'next/image';
import React from 'react';
import useModalStore from '@/store/modalStore';
import TopNavigation from '@/components/nav/TopNavigation';
import FilterState from '@/app/my/mallow/_components/FilterState';
import useMallowHistoryStore from '@/store/mallowHistoryStore';
import MallowHistoryItems from '@/app/my/mallow/_components/MallowHistoryItems';
import useMemberCurrency from '@/api/queries/member/useMemberCurrency';

export type MallowStateType = 'ALL' | 'GAIN' | 'USE' | 'EXPIRED';

export default function MarshmallowPage() {
  const { showMallowFilterDateBottomSheet, showMallowExpiredThisMonthModal } = useModalStore();
  const { history } = useMallowHistoryStore();
  const { data: currencyResult } = useMemberCurrency();

  return (
    <div className={styles.myMarshMallowPage}>
      <TopNavigation title={'내 마시멜로우'} />
      <div className={styles.content}>
        <div className={styles.title}>사용 가능 마시멜로우</div>
        <div className={styles.currentMallow}>
          <div className={styles.left}>
            <Image src="/images/snack.gray.svg" alt="No Image" width={34} height={34} />
            <div>{currencyResult?.data?.marshmallowQuantity}개</div>
          </div>
          <div className={styles.right} onClick={() => showMallowExpiredThisMonthModal(true)}>
            <div>당월 소멸 예정 마시멜로우 조회</div>
            <Image src={'/images/arrow.right.svg'} width={30} height={30} alt="No Image" />
          </div>
        </div>

        <div className={styles.horizontalLine}></div>
        <FilterState />
        <div className={styles.banner}>적응형 배너</div>

        <div className={styles.filterDate} onClick={() => showMallowFilterDateBottomSheet(true)}>
          <div>{history.filterMonth}개월</div>
          <Image src={'/images/arrow.bottom.svg'} width={30} height={30} alt="No Image" />
        </div>

        <MallowHistoryItems />
        <div className={styles.banner}>적응형 배너</div>
      </div>
    </div>
  );
}
