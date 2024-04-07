'use client';
import React from 'react';
import RankingChartModal from '@/app/my/@modal/_components/RankingChartModal';
import NicknameChangeModal from '@/app/my/@modal/_components/NicknameChangeModal';
import WorkTimeBottomSheet from '@/app/my/@modal/_components/WorkTimeBottomSheet';

export default function MyPageModals() {
  return (
    <>
      <RankingChartModal />
      <NicknameChangeModal />
      <WorkTimeBottomSheet />
    </>
  );
}
