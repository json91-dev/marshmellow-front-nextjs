'use client';

import styles from './topNavigationWithCancel.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMemberMeQuery } from '@/hooks/queries/member';

type Props = {
  title?: string;
  path?: string;
};

export default function TopNavigationWithCancel({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: result } = useMemberMeQuery();

  return (
    <div className={styles.topNavigation}>
      <div className={styles.leftIcon}></div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={styles.rightCancel} onClick={() => router.back()}>
        <Image src="/images/x.cancel.black.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}