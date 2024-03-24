import style from './desk.module.scss';

export default function DeskPage() {
  return (
    <div className={style.container}>
      <div className={style.card}>
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

      <div className={style.ticket}>
        <div>
          <div>마시멜로우</div>
          <div>324개</div>
        </div>

        <div> vertical line</div>

        <div>
          <div>응모권</div>
          <div>324개</div>
        </div>
      </div>

      <div className={style.banner}></div>

      <div className={style.menu}>
        <div>사용가이드</div>
        <div>아이콘</div>
      </div>

      <div className={style.menu}>
        <div>이벤트</div>
        <div>아이콘</div>
      </div>

      <div className={style.menu}>
        <div>공지사항</div>
        <div>아이콘</div>
      </div>
    </div>
  );
}
