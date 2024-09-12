'use client'; // 클라이언트 컴포넌트로 처리

import { useEffect } from 'react';
import styles from './error.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error('Error caught by error.js:', error);
  }, [error]);

  return (
    <div className={styles.errorPage}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p>404</p>
          <Image src={'/images/mallow.search.svg'} width={120} height={120} alt="No Image" />
        </div>
        <p className={styles.title}>서버 오류가 발생했어요.</p>
        <p className={styles.description}>{`페이지에 오류가 생겼어요\n잠시 후에 다시 시도해주세요.`}</p>
        <Link href={'/desk'} replace={true} className={styles.confirmButton}>
          다시 시도하기
        </Link>
      </div>
    </div>
  );
}
