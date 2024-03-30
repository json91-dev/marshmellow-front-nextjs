import style from './my.module.scss';
import TopNavigation from '@/app/my/_components/TopNavigation';

export default function myPage() {
  return (
    <div className={style.container}>
      <TopNavigation />
      <div className={style.idCard}>
        <div>내 사원증</div>
        <div>내 사원증의 정보입니다.</div>
      </div>

      <div className={style.nickname}>
        <div>닉네임</div>
        <div>
          <div>말랑이</div>
          <div>icon</div>
        </div>
      </div>

      <div className={style.level}>
        <div>
          <div>직급</div>
          <div>icon</div>
        </div>
        <div>인턴</div>
      </div>

      <div className={style.time}>
        <div>근무시간</div>
        <div>
          <div>
            <div>08시 ~ 17시</div>
            <div>점심시간은 11시입니다.</div>
          </div>
          <div>icon</div>
        </div>
      </div>

      <div className={style.myInfo}>
        <div>
          <div>내정보</div>
          <div>내 정보가 변경되었다면 본인확인을 통해 정보를 수정할 수 있습니다.</div>
        </div>
        <div>icon</div>
      </div>

      <div className={style.info}>
        <div>이름</div>
        <div>김이름</div>
      </div>

      <div className={style.info}>
        <div>성별</div>
        <div>여자</div>
      </div>

      <div className={style.info}>
        <div>생년월일</div>
        <div>1991.03.11</div>
      </div>

      <div className={style.info}>
        <div>전화번호</div>
        <div>010-0000-0000</div>
      </div>

      <div className={style.link}>
        <div>배송지 관리</div>
        <div>icon</div>
      </div>

      <div className={style.link}>
        <div>로그아웃</div>
        <div></div>
      </div>

      <div className={style.link}>
        <div>탈퇴하기</div>
        <div></div>
      </div>
    </div>
  );
}
