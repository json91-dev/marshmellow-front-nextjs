import style from './my.module.scss';
import TopNavigation from '@/app/my/_components/TopNavigation';
import Image from 'next/image';
import React from 'react';

export default function myPage() {
  return (
    <div className={style.container}>
      <TopNavigation />
      <div className={style.myMain}>
        <div className={style.idCardInfo}>
          <div className={style.title}>내 사원증</div>
          <div className={style.description}>내 사원증의 정보입니다.</div>
        </div>

        <div className={style.nickname}>
          <div className={style.left}>닉네임</div>
          <div className={style.right}>
            <div>말랑이</div>
            <Image src="/images/icon_arrow_right.svg" alt="No Image" width={25} height={25} />
          </div>
        </div>

        <div className={style.level}>
          <div className={style.left}>
            <div>직급</div>
            <Image src="/images/icon_coachmark.svg" alt="No Image" width={16} height={16} />
          </div>
          <div className={style.right}>인턴</div>
        </div>

        <div className={style.workTime}>
          <div className={style.left}>근무시간</div>
          <div className={style.right}>
            <div className={style.workTimeDetail}>
              <div>08시 ~ 17시</div>
              <div>점심시간은 11시입니다.</div>
            </div>
            <Image src="/images/icon_arrow_right.svg" alt="No Image" width={25} height={25} />
          </div>
        </div>

        <div className={style.myEditInfo}>
          <div className={style.left}>
            <div>내정보</div>
            <div>내 정보가 변경되었다면 본인확인을 통해 정보를 수정할 수 있습니다.</div>
          </div>
          <div className={style.right}>
            <Image src="/images/icon_arrow_right.svg" alt="No Image" width={25} height={25} />
          </div>
        </div>

        <div className={style.profileInfo}>
          <div className={style.left}>이름</div>
          <div className={style.right}>김이름</div>
        </div>

        <div className={style.profileInfo}>
          <div className={style.left}>성별</div>
          <div className={style.right}>여자</div>
        </div>

        <div className={style.profileInfo}>
          <div className={style.left}>생년월일</div>
          <div className={style.right}>1991.03.11</div>
        </div>

        <div className={style.profileInfo}>
          <div className={style.left}>전화번호</div>
          <div className={style.right}>010-0000-0000</div>
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
    </div>
  );
}
