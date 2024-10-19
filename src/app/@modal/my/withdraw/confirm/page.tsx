import React from 'react';
import WithdrawConfimCompleteModal from '@/app/@modal/my/withdraw/confirm/_components/withdrawConfirmCompleteModal';
import WithdrawConfimModal from '@/app/@modal/my/withdraw/confirm/_components/withdrawConfirmModal';
export default function withdrawConfirmModals() {
  return (
    <>
      <WithdrawConfimModal />
      <WithdrawConfimCompleteModal />
    </>
  );
}
