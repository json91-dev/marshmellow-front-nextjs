import style from './nicknameSelect.module.scss';
import React from 'react';

export default function NicknameSelect() {
  return (
    <div className={style.container}>
      <div>
        <input className={style.textInput} type="text" placeholder="특수문자 제외 2~8자" />
      </div>
      <div>중복 확인</div>
    </div>
  );
}
