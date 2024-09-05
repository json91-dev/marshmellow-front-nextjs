'use client';
import styles from './noticeDetail.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import useNotice from '@/api/queries/notice/useNotice';

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
    <div className={styles.noticeDetailPage}>
      <TopNavigation />
      <div className={styles.notice}>
        <div className={styles.dateString}>{result.data.createdAt.substring(0, 10).replaceAll('-', '. ')}</div>
        <div className={styles.title}>{result.data.title}</div>
        <div className={styles.horizontalLine} />
        <div className={styles.description}>{result.data.description}</div>
      </div>
    </div>
  );
}
