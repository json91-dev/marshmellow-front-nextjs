import style from './research.module.scss';
import { dummyLuckyDrawResearchItems } from '@/constraints';

export default function LuckyDrawResearchPage() {
  return (
    <div className={style.luckyDrawResearchPage}>
      <div>
        <p>행운의 뽑기 경품 투표</p>
        <div>
          <p>{`{스타벅스 아메리카노}를\n추첨을 통해 총 N분께 드려요!`}</p>
          <p>
            경품 투표는 해당 1번째 뽑기판 종료시 종료되며 당첨자에게는 경품 투표 종료 후 14일 이내 개별적으로 연락드려요.
          </p>
        </div>

        <div>
          <p>다음 뽑기판에서 받고싶은 경품은 무엇인가요?</p>
        </div>
        <p>1개 선택</p>
      </div>

      <div>
        {dummyLuckyDrawResearchItems.map((item, index) => {
          return (
            <div key={item.id}>
              <div></div>
              <p></p>
            </div>
          );
        })}
      </div>

      <div className={style.horizontalLine}></div>

      <button>제출하기</button>
      <button>다음에 하기</button>
    </div>
  );
}
