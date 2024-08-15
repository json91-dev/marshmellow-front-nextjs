import styles from './page.module.scss';
import React from 'react';
import Image from 'next/image';
import Login from '@/app/login/_components/Login';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2>{'오늘도 열심히 일한 당신! 혜택을 누리고 즐겨라!'}</h2>
        <h1>{'직장인들의 달달한 간식 \n 마시멜로우'}</h1>
        <Image src="/images/main.image.svg" alt="No Image" width={218} height={212} style={{ marginTop: '1.5rem' }} />
      </div>

      <div className={styles.bottomLoginSection}>
        <p>합류하시면 다양한 서비스들을 이용해보실 수 있어요!</p>
        <Login />
      </div>
    </div>
  );
}
