'use client';

import style from './my.module.scss';
import TopNavigation from '@/app/my/_components/TopNavigation';
import Image from 'next/image';
import React, { useEffect } from 'react';
import HorizontalLine from '@/app/my/_components/HorizontalLine';
import { useModalStore } from '@/store/modal';
import { useRouter } from 'next/navigation';

export default function myPage() {
  const { showRankingChartModal, showNicknameChangeModal, showWorkTimeBottomSheet, showLogoutModal } = useModalStore();
  const router = useRouter();

  return (
    <div className={style.myPage}>
      <TopNavigation />
      <div className={style.main}>
        <div className={style.idCardInfo}>
          <div className={style.title}>내 사원증</div>
          <div className={style.description}>내 사원증의 정보입니다.</div>
        </div>

        <div className={style.nickname}>
          <div className={style.left}>닉네임</div>
          <div className={style.right} onClick={() => showNicknameChangeModal(true)}>
            <div>말랑이</div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={25} height={25} />
          </div>
        </div>

        <div className={style.level}>
          <div className={style.left}>
            <div>직급</div>
            <Image
              onClick={() => showRankingChartModal(true)}
              src="/images/coachmark.svg"
              alt="No Image"
              width={18}
              height={18}
            />
          </div>
          <div className={style.right}>인턴</div>
        </div>

        <div className={style.workTime}>
          <div className={style.left}>근무시간</div>
          <div className={style.right} onClick={() => showWorkTimeBottomSheet(true)}>
            <div className={style.workTimeDetail}>
              <div>08시 ~ 17시</div>
              <div>점심시간은 11시입니다.</div>
            </div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={25} height={25} />
          </div>
        </div>

        <div className={style.myEditInfo}>
          <div className={style.left}>
            <div>내정보</div>
            <div>내 정보가 변경되었다면 본인확인을 통해 정보를 수정할 수 있습니다.</div>
          </div>
          <div className={style.right}>
            <Image src="/images/arrow.right.svg" alt="No Image" width={25} height={25} />
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

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />

          <div className={style.link} onClick={() => router.push('/my/address')}>
            <div>배송지 관리</div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={25} height={25} />
          </div>

          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />

          <div className={style.link} onClick={() => showLogoutModal(true)}>
            <div>로그아웃</div>
            <div></div>
          </div>

          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />

          <div className={style.link} onClick={() => router.push('/my/withdraw')}>
            <div>탈퇴하기</div>
            <div></div>
          </div>

          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />
        </div>
      </div>
    </div>
  );
}
