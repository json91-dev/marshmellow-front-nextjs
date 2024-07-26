'use client';
import style from './feverGauge.module.scss';
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
      <div className={style.feverGaugeLabel}>
        <p>피버 게이지</p>

        <Image
          onClick={() => showFeverGuideModal(true)}
          src="/images/question.mark.svg"
          alt="No Image"
          width={24}
          height={24}
        />
      </div>
      <div className={style.feverGauge}>
        <div className={cx(style.fill, percentage === 100 && style.full)} style={{ width: `${percentage}%` }}></div>
        <div className={style.feverCount}>(1/10)</div>
      </div>
    </>
  );
}
