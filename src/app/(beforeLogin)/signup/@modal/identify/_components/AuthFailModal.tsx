'use client';
import style from './modal.module.scss';
export default function AuthFailModal() {
  return (
    <div className={style.container}>
      <div>본인인증에 실패했어요.</div>
      <div>
        본인인증에 실패했어요 <br />
        다시 시도해주세요
      </div>
    </div>
  );
}
