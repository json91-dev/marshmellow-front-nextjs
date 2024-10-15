import React from 'react';
import AttendanceEventBottomSheet from '@/app/@modal/event/attendance/_components/AttendanceEventBottomSheet';
import LoginModal from '@/app/@modal/_components/LoginModal';

export default function AttendEventPageModals() {
  return (
    <>
      <AttendanceEventBottomSheet />
      <LoginModal />
    </>
  );
}
