'use client';

import style from './noticeItem.module.scss';
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
    <div className={style.noticeItem} onClick={() => router.push(`/notice/${id}`)}>
      <div className={style.left}>
        <div className={style.date}>{createdAt.substring(0, 10).replaceAll('-', '. ')}</div>
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.right}>
        <Image src="/images/arrow.gray.right.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}
