'use client';

import styles from './page.module.scss';
import React from 'react';
import NoticeItem from '@/app/notice/_components/NoticeItem';
import TopNavigation from '@/components/nav/TopNavigation';
import { useNoticeAll } from '@/hooks/queries/notice';

export default function noticePage() {
  const { data: result, status, error } = useNoticeAll();

  if (status === 'pending') {
    return null;
  }

  return (
    <div className={styles.noticePage}>
      <TopNavigation title={'공지사항'} />
      <div className={styles.scrollArea}>
        {result.data.map((item: any) => {
          const { id, title, description, createdAt, modifiedAt } = item;
          return <NoticeItem key={item.id} createdAt={createdAt} title={title} id={id} />;
        })}
      </div>
    </div>
  );
}
