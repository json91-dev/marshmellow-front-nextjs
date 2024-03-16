'use client';

import style from './modal.module.scss';
export default function AuthSuccessModal() {
  return (
    <div className={style.container}>
      <div>입사지원이 완료되었습니다.</div>
      <div>입사지원이 완료되었습니다. 지원정보를 작성해주시면 마시멜로우 10개를 드려요!</div>
    </div>
  );
}
