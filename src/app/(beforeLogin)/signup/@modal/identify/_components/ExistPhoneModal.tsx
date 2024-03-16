'use client';
import style from './modal.module.scss';

export default function ExistPhoneModal() {
  return (
    <div className={style.container}>
      <div>해당 번호로 입사한 이력이 있습니다.</div>
      <div>
        000으로 입사한 이력이 있습니다. <br />
        000으로 로그인해주세요.
      </div>
    </div>
  );
}
