import ConfirmButton from '@/app/signup/_components/ConfirmButton';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function Confirm() {
  const router = useRouter();

  const onClickButton = useCallback(() => {
    router.push('/signup/submit-complete');
  }, []);

  return <ConfirmButton onClick={onClickButton} text={'최종 제출'} customStyle={{ width: '100%' }} />;
}
