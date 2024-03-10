import style from './info.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

export default function SignUpInfo() {
  return (
    <div className={style.container}>
      <InformationTab index={2} />

      <div className={style.subscription}>
        입사 지원서는 순서대로 기재 바랍니다. '최종제출' 버튼을 눌러야 입사 지원이 완료되오니 유의하시기 바랍니다.
      </div>

      {/*기본정보*/}
      <>
        <div className={style.sesctionText}>*기본정보</div>

        <div>
          <div>이미지 영역</div>
          <div>
            <div>지원서 사진등록</div>
            <div>(권장사이즈: 가로 160px X 세로 160px)</div>
          </div>
        </div>

        <div className={style.infoText}>이름</div>
        <input type="text" placeholder="아이디를 입력해주세요" />

        <div>닉네임</div>
        <input type="text" placeholder="특수문자 제외 2~8자" />
        <div>
          <div>입력영역</div>
          <div>중복 확인</div>
        </div>

        <div>성별</div>
        <div>토글 성별영역</div>

        <div>생년월일</div>
        <input type="date" placeholder="특수문자 제외 2~8자" />
      </>

      {/*기타*/}
      <>
        <div>기타</div>
        <div>
          <div>지원경로</div>
          <div>선택영역</div>
        </div>
        <div>
          <div>추천인 입력</div>
          <div>추천인 입력시, 마시멜로우 10개를 드려요</div>
        </div>
        <div>추천인 닉네임을 입력해주세요.</div>

        <div>다음 단계 버튼</div>
      </>
    </div>
  );
}
