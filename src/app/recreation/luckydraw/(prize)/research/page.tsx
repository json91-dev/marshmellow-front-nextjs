import style from './research.module.scss';
import { dummyLuckyDrawResearchItems } from '@/constraints';
import React from 'react';

export default function LuckyDrawResearchPage() {
  return (
    <div className={style.luckyDrawResearchPage}>
      <p className={style.title}>행운의 뽑기 경품 투표</p>
      <div className={style.main}>
        <div className={style.info}>
          <p>{`{스타벅스 아메리카노}를\n추첨을 통해 총 N분께 드려요!`}</p>
          <p>
            경품 투표는 해당 1번째 뽑기판 종료시 종료되며 당첨자에게는 경품 투표 종료 후 14일 이내 개별적으로 연락드려요.
          </p>
        </div>

        <div className={style.question}>
          <p>다음 뽑기판에서 받고싶은 경품은 무엇인가요?</p>
        </div>

        <div className={style.selectInfo}>
          <p>1개 선택</p>
        </div>

        <div className={style.selectArea}>
          {dummyLuckyDrawResearchItems.map((item, index) => {
            return (
              <>
                <label className={style.radioWrapperLabel} key={item.id}>
                  {/*<rad></rad>/*/}
                  <input type="radio" name={'research'} value={2} />
                  <span className={style.radioInnerCircle}></span>
                  <p>{item.name}</p>
                </label>
                {index === dummyLuckyDrawResearchItems.length - 1 && (
                  <div className={style.textInputWrapper}>
                    <input type={'text'} placeholder={'ex) 호캉스 떠나고 싶어요.'} />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className={style.horizontalLine}></div>

      <button className={style.confirmButton}>제출하기</button>
      <button className={style.cancelButton}>다음에 하기</button>
    </div>
  );
}
