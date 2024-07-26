'use client';
import React from 'react';
import useModalStore from '@/store/modalStore';
import WithdrawConfimCompleteModal from '@/app/my/@modal/withdraw/confirm/_components/withdrawConfirmCompleteModal';
import WithdrawConfimModal from '@/app/my/@modal/withdraw/confirm/_components/withdrawConfirmModal';
export default function modal() {
  const { isShowWithdrawConfirmModal, showWithdrawConfirmModal } = useModalStore();

  return (
    <>
      <WithdrawConfimModal />
      <WithdrawConfimCompleteModal />
    </>
  );
}
