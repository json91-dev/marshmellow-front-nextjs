'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React from 'react';
import { useMemberCurrencyQuery } from '@/app/_hook/queries/member';

export default function MyMallowHeader() {
  const { data: currencyResult, isLoading, isFetching } = useMemberCurrencyQuery();

  return (
    <div className={style.myMallowArea}>
      <div className={style.logo}></div>
      <div className={style.myMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>{currencyResult?.data?.marshmallowQuantity}</p>
      </div>
    </div>
  );
}
