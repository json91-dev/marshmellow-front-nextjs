'use client';
import style from './noticeDetail.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';
import { useNotice } from '@/app/_hook/queries/notice';

type Props = {
  params: {
    id: string;
  };
};

export default function NoticeDetailpage({ params }: Props) {
  const id = params.id;
  const { data: result, status } = useNotice(id);

  if (status === 'pending') {
    return null;
  }

  return (
    <div className={style.noticeDetailPage}>
      <TopNavigation />
      <div className={style.notice}>
        <div className={style.dateString}>{result.data.createdAt.substring(0, 10).replaceAll('-', '. ')}</div>
        <div className={style.title}>{result.data.title}</div>
        <div className={style.horizontalLine} />
        <div className={style.description}>{result.data.description}</div>
      </div>
    </div>
  );
}
