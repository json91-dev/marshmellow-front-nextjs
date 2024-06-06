'use client';
import React from 'react';
import OfficeNewbieSignupModal from '@/app/(main)/office/@modal/_components/OfficeNewbieSignupModal';
import AttendanceCheckModal from '@/app/(main)/office/@modal/_components/AttendanceCheckModal';

export default function MyPageModals() {
  return (
    <>
      <OfficeNewbieSignupModal />
      <AttendanceCheckModal />
    </>
  );
}
