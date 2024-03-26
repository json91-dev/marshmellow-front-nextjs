import style from './nameCard.module.scss';

export default function NameCard() {
  return (
    <div className={style.container}>
      <div>
        <div>아이콘</div>
      </div>
      <div>
        <div>닉네임</div>
        <div>(아이콘) </div>
      </div>

      <div>
        <div>
          <div>입사일</div>
          <div>직급</div>
          <div>근무시간</div>
        </div>

        <div>
          <div>
            <div>2022년 00월 00일</div>
            <div>0년 0개월 0일 재직</div>
          </div>
          <div>인턴</div>
          <div>08:00 ~ 17:00 (점심시간 12:00)</div>
        </div>
      </div>

      <div>로고</div>
    </div>
  );
}
