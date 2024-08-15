'use client';
import styles from './feverGauge.module.scss';
import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import useModalStore from '@/store/modalStore';

type props = {
  percentage: number;
};

export default function FeverGauge({ percentage }: props) {
  const { showFeverGuideModal } = useModalStore();
  return (
    <>
      <div className={styles.feverGaugeLabel}>
        <p>피버 게이지</p>

        <Image
          onClick={() => showFeverGuideModal(true)}
          src="/images/question.mark.svg"
          alt="No Image"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.feverGauge}>
        <div className={cx(styles.fill, percentage === 100 && styles.full)} style={{ width: `${percentage}%` }}></div>
        <div className={styles.feverCount}>(1/10)</div>
      </div>
    </>
  );
}
