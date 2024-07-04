import style from '@/app/recreation/luckydraw/luckdraw.module.scss';
import React from 'react';
import cx from 'classnames';

type props = {
  percentage: number;
};
export default function FeverGauge({ percentage }: props) {
  return (
    <div className={style.feverGauge}>
      <div className={cx(style.fill, percentage === 100 && style.full)} style={{ width: `${percentage}%` }}></div>
    </div>
  );
}
