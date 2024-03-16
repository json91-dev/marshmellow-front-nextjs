'use client';

import Toast from '../_components/Toast';
import { useEffect } from 'react';
import { useToastStore } from '@/store/toast';

export default function Submit() {
  const { openToast, setMessage } = useToastStore();
  useEffect(() => {
    setMessage('테스트다 임마');
    openToast();
  }, []);

  return (
    <>
      <Toast />
    </>
  );
}
