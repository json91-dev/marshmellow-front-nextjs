'use client';

import styles from './noticeItem.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  createdAt: string;
  title: string;
  id: number;
};

export default function NoticeItem({ createdAt, title, id }: Props) {
  const router = useRouter();

  return (
    <div className={styles.noticeItem} onClick={() => router.push(`/notice/${id}`)}>
      <div className={styles.left}>
        <div className={styles.date}>{createdAt.substring(0, 10).replaceAll('-', '. ')}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.right}>
        <Image src="/images/arrow.gray.right.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}
