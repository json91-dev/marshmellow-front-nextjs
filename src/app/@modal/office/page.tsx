'use client';
import React from 'react';
import OfficeNewbieSignupModal from '@/app/@modal/office/_components/OfficeNewbieSignupModal';
import AttendanceCheckModal from '@/app/@modal/office/_components/AttendanceCheckModal';

export default function MyPageModals() {
  return (
    <>
      <OfficeNewbieSignupModal />
      <AttendanceCheckModal />
    </>
  );
}
