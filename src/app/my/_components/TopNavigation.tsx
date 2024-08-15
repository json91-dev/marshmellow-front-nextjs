import styles from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function TopNavigation() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.leftIcon} onClick={() => router.back()}>
        <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
      </div>
      <p>사원증</p>
      <div className={styles.leftIcon}></div>
    </div>
  );
}
