'use client';

import style from './noticeItem.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function NoticeItem({ dateString, content }) {
  const router = useRouter();
  return (
    <div className={style.noticeItem} onClick={() => router.push('/notice/1')}>
      <div className={style.left}>
        <div className={style.date}>{dateString}</div>
        <div className={style.content}>{content}</div>
      </div>
      <div className={style.right}>
        <Image src="/images/arrow.gray.right.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}
