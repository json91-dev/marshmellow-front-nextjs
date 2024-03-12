import style from './recomendSelect.module.scss';
import React from 'react';

export default function RecomendSelect() {
  return (
    <div className={style.container}>
      <input className={style.textInput} type="text" placeholder="추천인 닉네임을 입력해주세요." />
    </div>
  );
}
