import Link from 'next/link';
import { NextPage } from 'next';
import style from './not-found.module.scss';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <div className={style.notFoundPage}>
      <div className={style.inner}>
        <div className={style.header}>
          <p>404</p>
          <Image src={'/images/mallow.search.svg'} width={120} height={120} alt="No Image" />
        </div>
        <p className={style.title}>해당 페이지를 찾지 못했습니다.</p>
        <p className={style.description}>{`주소가 잘못되었거나 더이상\n제공되지 않는 페이지 입니다.`}</p>
        <Link href={'/desk'} replace={true} className={style.confirmButton}>
          메인 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
