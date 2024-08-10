'use client';

import style from './page.module.scss';
import React from 'react';
import NoticeItem from '@/app/notice/_components/NoticeItem';
import TopNavigation from '@/app/_components/common/TopNavigation';
import { useNoticeAll } from '@/app/_hook/queries/notice';

export default function noticePage() {
  const { data: result, status, error } = useNoticeAll();

  if (status === 'pending') {
    return null;
  }

  return (
    <div className={style.noticePage}>
      <TopNavigation title={'공지사항'} />
      <div className={style.scrollArea}>
        {result.data.map((item: any) => {
          const { id, title, description, createdAt, modifiedAt } = item;
          return <NoticeItem key={item.id} createdAt={createdAt} title={title} id={id} />;
        })}
      </div>
    </div>
  );
}
