import style from './informationTab.module.scss';
import React from 'react';
import cx from 'classnames';

type Props = {
  index: number;
};

export default function InformationTab({ index }: Props) {
  console.log(index);
  return (
    <div className={style.container}>
      <div className={style.tab}>
        <div className={cx(index === 1 && style.activeBox)}>
          <p className={cx(index === 1 && style.activeFont)}>1.본인인증 </p>
        </div>
        <div className={cx(index === 2 && style.activeBox)}>
          <p className={cx(index === 2 && style.activeFont)}>2.지원정보</p>
        </div>
        <div className={cx(index === 3 && style.activeBox)}>
          <p className={cx(index === 3 && style.activeFont)}>3.최종제출</p>
        </div>
      </div>
    </div>
  );
}
