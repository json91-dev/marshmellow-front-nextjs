'use client';
import style from './modal.module.scss';

export default function QuitModal() {
  return (
    <div className={style.container}>
      <div>정말 나가실건가요?</div>
      <div>지원정보 작성을 중단하시면 입력된 정보들은 저장되지 않고 받은 마시멜로우가 회수됩니다.</div>
    </div>
  );
}
