'use client';
import React from 'react';
import RankingChartModal from '@/app/@modal/my/_components/RankingChartModal';
import NicknameChangeModal from '@/app/@modal/my/_components/NicknameChangeModal';
import WorkTimeBottomSheet from '@/app/@modal/my/_components/WorkTimeBottomSheet';
import LogoutModal from '@/app/@modal/my/_components/LogoutModal';
import NicknameNotChangeByDateModal from '@/app/@modal/my/_components/NicknameNotChangeByDateModal';
import WorkTimeChangeModal from '@/app/@modal/my/_components/WorkTimeChangeModal';
import WorkTimeNotChangeByTimeModal from '@/app/@modal/my/_components/WorkTimeNotChangeByTimeModal';
import NicknameChangeConfirmModal from '@/app/@modal/my/_components/NicknameChangeConfirmModal';
import OfficeHourNotChangeByDateModal from '@/app/@modal/my/_components/WorkTimeNotChangeByDateModal';
import WorkTimeNotChangeByDateModal from '@/app/@modal/my/_components/WorkTimeNotChangeByDateModal';

export default function MyPageModals() {
  return (
    <>
      <RankingChartModal />
      <NicknameChangeModal />
      <NicknameChangeConfirmModal />
      <WorkTimeBottomSheet />
      <LogoutModal />
      <NicknameNotChangeByDateModal />
      <WorkTimeChangeModal />
      <WorkTimeNotChangeByTimeModal />
      <WorkTimeNotChangeByDateModal />
    </>
  );
}
