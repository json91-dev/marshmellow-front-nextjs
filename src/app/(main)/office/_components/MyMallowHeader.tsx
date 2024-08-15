'use client';
import styles from '@/app/(main)/office/page.module.scss';
import Image from 'next/image';
import React from 'react';
import { useMemberCurrencyQuery } from '@/hooks/queries/member';

export default function MyMallowHeader() {
  const { data: currencyResult, isLoading, isFetching } = useMemberCurrencyQuery();

  return (
    <div className={styles.myMallowArea}>
      <div className={styles.logo}></div>
      <div className={styles.myMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>{currencyResult?.data ? currencyResult.data.marshmallowQuantity : 0}</p>
      </div>
    </div>
  );
}
