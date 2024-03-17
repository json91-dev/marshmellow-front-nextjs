'use client';

import style from './identify.module.scss';
import { useIdentifyStore } from '@/store/identify';
import AuthFailModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthFailModal';
import AuthSuccessModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthSuccessModal';
import QuitModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/QuitModal';
import ExistPhoneModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/ExistPhoneModal';
import { useEffect } from 'react';

export default function Identify() {
  return (
    <>
      <AuthFailModal />
      <AuthSuccessModal />
      <ExistPhoneModal />
      <QuitModal />
    </>
  );
}
