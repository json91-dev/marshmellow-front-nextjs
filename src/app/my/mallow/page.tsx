import style from './marshmallow.module.scss'
import TopNavigation from "@/app/my/mallow/_components/TopNavigation";
import HorizontalLine from "@/app/my/_components/HorizontalLine";

export default function MarshmallowPage() {
  return <div className={style.myMarshMallowPage}>
    <TopNavigation/>
    <div className={style.title}>사용 가능 마시멜로우</div>
    <div className={style.currentMallow}>
      <div className={style.left}>
        <div>이미지</div>
        <div>324개</div>
      </div>
      <div className={style.right}>
        <div>당월 소멸 예정 마시멜로우 조회</div>
        <div>이미지</div>
      </div>
    </div>

    <HorizontalLine />

    <div className={style.filterAction}>
      <div>전체</div>
      <div>획득</div>
      <div>사용</div>
      <div>소멸</div>
    </div>

    <div className={style.banner}>적응형 배너</div>
    <div className={style.filterDate}>1개월 (드롭다운)</div>

    <div className={style.actionHistory}>
      <div className={style.actionDate}>2024.01.01</div>
      <div className={style.actionList}>
        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>
      </div>
    </div>

    <div className={style.banner}>적응형 배너</div>

    <div className={style.actionHistory}>
      <div className={style.actionDate}>2024.12.31</div>
      <div className={style.actionList}>
        <div className={style.item}>
          <div className={style.info}>
            <div>레크레이션</div>
            <div>뽑기 참여</div>
            <div>18:53 | 사용</div>
          </div>
          <div className={style.count}>
            -3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>근태</div>
            <div>출근 완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>업무</div>
            <div>점심시간 완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>

        <div className={style.item}>
          <div className={style.info}>
            <div>업무</div>
            <div>정시퇴근 완료</div>
            <div>18:53 | 획득</div>
          </div>
          <div className={style.count}>
            +3개
          </div>
        </div>
      </div>
    </div>

    <div className={style.oneYearInfo}>최근 1년 내역만 확인할 수 있습니다.</div>

    <div className={style.banner}>적응형 배너</div>
  </div>;
}
