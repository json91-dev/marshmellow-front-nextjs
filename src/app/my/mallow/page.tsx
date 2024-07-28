'use client';
import style from './page.module.scss';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import cx from 'classnames';
import useModalStore from '@/store/modalStore';
import TopNavigation from '@/app/_components/common/TopNavigation';
import { useMarshmallowHistoryQuery } from '@/app/_hook/queries/currency';
import Spinner from '@/app/login/_components/Spinner';
import { extractHourMinute } from '@/utils/utils';
import FilterState from '@/app/my/mallow/_components/FilterState';
import useMallowHistoryStore from '@/store/mallowHistoryStore';
import { useMemberCurrencyQuery } from '@/app/_hook/queries/member';
import MallowHistoryItems from '@/app/my/mallow/_components/MallowHistoryItems';

export type MallowStateType = 'ALL' | 'GAIN' | 'USE' | 'EXPIRED';

export default function MarshmallowPage() {
  const { showMallowFilterDateBottomSheet, showMallowExpiredThisMonthModal } = useModalStore();
  const { history } = useMallowHistoryStore();
  const { data: currencyResult } = useMemberCurrencyQuery();

  return (
    <div className={style.myMarshMallowPage}>
      <TopNavigation title={'내 마시멜로우'} />
      <div className={style.content}>
        <div className={style.title}>사용 가능 마시멜로우</div>
        <div className={style.currentMallow}>
          <div className={style.left}>
            <Image src="/images/snack.gray.svg" alt="No Image" width={34} height={34} />
            <div>{currencyResult?.data?.expiresThisMonthCurrencies?.marshmallowQuantity}개</div>
          </div>
          <div className={style.right} onClick={() => showMallowExpiredThisMonthModal(true)}>
            <div>당월 소멸 예정 마시멜로우 조회</div>
            <Image src={'/images/arrow.right.svg'} width={30} height={30} alt="No Image" />
          </div>
        </div>

        <div className={style.horizontalLine}></div>
        <FilterState />
        <div className={style.banner}>적응형 배너</div>

        <div className={style.filterDate} onClick={() => showMallowFilterDateBottomSheet(true)}>
          <div>{history.filterMonth}개월</div>
          <Image src={'/images/arrow.bottom.svg'} width={30} height={30} alt="No Image" />
        </div>

        <MallowHistoryItems />
        <div className={style.banner}>적응형 배너</div>
      </div>
    </div>
  );
}
