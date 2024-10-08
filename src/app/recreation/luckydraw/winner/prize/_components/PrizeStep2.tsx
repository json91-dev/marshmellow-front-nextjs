'use client';
import styles from './prizeStep2.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function () {
  const router = useRouter();
  return (
    <div className={styles.prizeStep2}>
      <div className={styles.main}>
        <div className={styles.infoBox}>
          <p className={styles.title}>{'영업일 2~3일 이내로\n문자드릴게요!'}</p>

          <div className={styles.emailIcon}>
            <Image src="/images/luckydraw.prize.email.png" alt="No Image" width={148} height={148} />
          </div>

          <p className={styles.description}>
            {'영업일 2~3일 이내 문자가 오지 않는 경우,\n스팸 메일함을 확인해주세요. 더 궁금하신 점은\n'}
            <span>{'마시멜로우 카카오채널'}</span>
            {'로 문의해 주세요!'}
          </p>
        </div>
      </div>
      <button onClick={() => router.push('/recreation/luckydraw')} className={styles.confirmButton}>
        확인
      </button>
    </div>
  );
}
