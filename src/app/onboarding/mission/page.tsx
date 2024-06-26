'use client';

import TopNavigation from '@/app/_components/common/TopNavigation';
import Image from 'next/image';
import React from 'react';

export default function missionPage() {
  return (
    <div>
      <TopNavigation title={'두근두근 첫 적응 미션'} />
      <div>
        <p>현재 남은 참여 가능시간</p>
        <Image src="/images/onboarding.mission.bg.png" alt="No Image" width={24} height={24} />
        <p>0일 00시간 00분 00초</p>
      </div>
      <div>
        <p>{`만나서, 반가워요 :)\n마시멜로우의 첫 적응 미션!`}</p>
        <p>{`업무를 하나씩 해보면서 마시멜로우에 적응도 하고\n마시멜로우도 받고 일석이조!`}</p>
        <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
      </div>
      <div>
        <p>기간 내 모두 완료 시 마시멜로우 n개 지급</p>
        <p>0000. 00. 00 ~ 0000. 00. 00 (0시)</p>
      </div>

      <MissionIcons />

      <MissionCards />
    </div>
  );
}

function MissionIcons() {
  return (
    <div>
      <Image src="/images/onboarding.mission.mallow.1.svg" alt="No Image" width={24} height={24} />
      <Image src="/images/onboarding.mission.mallow.2.svg" alt="No Image" width={24} height={24} />
      <Image src="/images/onboarding.mission.mallow.3.svg" alt="No Image" width={24} height={24} />
      <Image src="/images/onboarding.mission.mallow.4.svg" alt="No Image" width={24} height={24} />
    </div>
  );
}

function MissionCards() {
  return (
    <div>
      <div>
        <div>
          <p>사용자가이드 읽고오기</p>
          <p>사용자 가이드 페이지 이동시 완료로 인정</p>
        </div>
        <div>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div>
        <div>
          <p>오늘의 업무 중 하나 완수하기</p>
          <p>업무 완료로 마시멜로우 획득 시 완료로 인정</p>
        </div>
        <div>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div>
        <div>
          <p>레크레이션에서 뽑기 1회 참여</p>
          <p>결과 상관없이 참여시 완료로 인정</p>
        </div>
        <div>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div></div>

      <div>
        <div>
          <p>하루동안 오늘의 업무 3번 모두 완수하기</p>
          <p>출근, 점심시간, 퇴근 업무 모두 완료 시 인정</p>
        </div>
        <div>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>
    </div>
  );
}

// function mission
