'use client';
import './confirmAndNext.module.scss';
import ConfirmButton from '@/app/(beforeLogin)/signup/_components/ConfirmButton';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
export default function ConfirmAndNext() {
  const router = useRouter();

  const onClickButton = useCallback(() => {}, []);

  return <ConfirmButton text={'다음 단계'} onClick={onClickButton} />;
}
