'use client';
import React from 'react';
import LoginModal from '@/app/@modal/_components/LoginModal';
import AttendanceCheckModal from '@/app/@modal/office/_components/AttendanceCheckModal';

export default function MyPageModals() {
  return (
    <>
      <LoginModal />
      <AttendanceCheckModal />
    </>
  );
}
