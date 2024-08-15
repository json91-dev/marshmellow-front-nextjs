import Link from 'next/link';
import { NextPage } from 'next';
import styles from './not-found.module.scss';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p>404</p>
          <Image src={'/images/mallow.search.svg'} width={120} height={120} alt="No Image" />
        </div>
        <p className={styles.title}>해당 페이지를 찾지 못했습니다.</p>
        <p className={styles.description}>{`주소가 잘못되었거나 더이상\n제공되지 않는 페이지 입니다.`}</p>
        <Link href={'/desk'} replace={true} className={styles.confirmButton}>
          메인 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
