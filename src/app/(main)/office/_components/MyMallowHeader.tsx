'use client';
import styles from '@/app/(main)/office/page.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import useMemberCurrency from '@/api/queries/member/useMemberCurrency';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useModalStore from '@/store/modalStore';

export default function MyMallowHeader() {
  const { data: currencyResult } = useMemberCurrency();
  const { status: sessionStatus } = useSession();
  const router = useRouter();
  const { showLoginModal } = useModalStore();
  const onClickMallowIcon = useCallback(() => {
    if (sessionStatus === 'authenticated') {
      router.push('/my/mallow');
    } else {
      showLoginModal(true, 'Service');
    }
  }, [sessionStatus]);

  return (
    <div className={styles.myMallowArea}>
      <div className={styles.logo}></div>
      <div className={styles.myMallow} onClick={onClickMallowIcon}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>{currencyResult?.data ? currencyResult.data.marshmallowQuantity : 0}</p>
      </div>
    </div>
  );
}
