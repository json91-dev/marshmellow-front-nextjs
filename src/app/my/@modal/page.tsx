'use client';
import React from 'react';
import RankingChartModal from '@/app/my/@modal/_components/RankingChartModal';
import NicknameChangeModal from '@/app/my/@modal/_components/NicknameChangeModal';

export default function MyPageModals() {
  return (
    <>
      <RankingChartModal />
      <NicknameChangeModal />
    </>
  );
}
