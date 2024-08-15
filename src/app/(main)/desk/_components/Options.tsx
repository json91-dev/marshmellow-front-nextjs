'use client';

import styles from './options.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Options() {
  const router = useRouter();
  const { status } = useSession();

  const onClickNotice = useCallback(() => {
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/login');
    } else {
      router.push('/my/alarm');
    }
  }, [status]);

  const onClickSetting = useCallback(() => {
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/login');
    } else {
      router.push('/my');
    }
  }, [status]);

  return (
    <div className={styles.options}>
      <div className={styles.image} onClick={onClickNotice}>
        <Image src="/images/notice.svg" alt="No Image" width={25} height={25} />
      </div>
      <div className={styles.image} onClick={onClickSetting}>
        <Image src="/images/setting.svg" width={25} height={25} alt={'No Image'} />
      </div>
    </div>
  );
}
