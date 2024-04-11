import style from './noticeDetail.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';

export default function NoticeDetailpage({ params }) {
  const id = params.id;
  console.log(id);

  return (
    <div className={style.noticeDetailPage}>
      <TopNavigation isTitleExist={false} />
      <div className={style.notice}>
        <div className={style.dateString}>2022.05.01</div>
        <div className={style.title}>공지사항입니다.</div>
        <div className={style.horizontalLine} />
        <div className={style.description}>
          시에는 지금의 애국가로 치면 3절에 해당되는 가사가 없어 지금의 4절에 해당하는 가사가 3절이었던 시절이었고,1절
          가사중엔 ‘하느님이 보우하사’가 ‘하나님이 보호하사’로 2절 가사 내용 중에서는 '바람 서리'가 '바람 이슬'로 불렸던
          것을 알 수 있다.{' '}
        </div>
      </div>
    </div>
  );
}
