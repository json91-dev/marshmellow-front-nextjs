'use client';

import styles from './ticketLink.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useMemberMeQuery } from '@/api/queries/member';

export default function TicketLinks() {
  const router = useRouter();
  const { data: result, status, error } = useMemberMeQuery();

  if (status === 'pending' || status === 'error') {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <div>
          <Image src="/images/snack.gray.svg" alt="No Image" width={26} height={26} />
          <div>마시멜로우</div>
        </div>
        <div onClick={() => router.push('/my/mallow')}>
          {status === 'success' && <div>{result?.data?.currency?.marshmallowQuantity}개</div>}
          <div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
}
