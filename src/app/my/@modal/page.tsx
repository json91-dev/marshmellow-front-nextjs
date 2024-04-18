'use client';
import React from 'react';
import RankingChartModal from '@/app/my/@modal/_components/RankingChartModal';
import NicknameChangeModal from '@/app/my/@modal/_components/NicknameChangeModal';
import WorkTimeBottomSheet from '@/app/my/@modal/_components/WorkTimeBottomSheet';
import LogoutModal from '@/app/my/@modal/_components/LogoutModal';
import NicknameNotChangeByDateModal from '@/app/my/@modal/_components/NicknameNotChangeByDateModal';
import WorkTimeChangeModal from '@/app/my/@modal/_components/WorkTimeChangeModal';
import WorkTimeNotChangeByTimeModal from '@/app/my/@modal/_components/WorkTimeNotChangeByTimeModal';
import WorkTimeNotChangeByDateModal from '@/app/my/@modal/_components/WorkTimeNotChangeByDateModal';

export default function MyPageModals() {
  return (
    <>
      <RankingChartModal />
      <NicknameChangeModal />
      <WorkTimeBottomSheet />
      <LogoutModal />
      <NicknameNotChangeByDateModal />
      <WorkTimeChangeModal />
      <WorkTimeNotChangeByTimeModal />
      <WorkTimeNotChangeByDateModal />
    </>
  );
}
