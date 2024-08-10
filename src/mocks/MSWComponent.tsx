'use client';

import { useEffect, useState } from 'react';
export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswInit, setMswInit] = useState(false);

  useEffect(() => {
    // if (process.env.NODE_ENV === 'development') { // TODO: 차후에는 개발모드일때만 수행되도록 설정

    const init = async () => {
      const initMsw = await import('./index').then((res) => res.initMsw);
      await initMsw();
      setMswInit(true);
    };

    if (!mswInit) {
      init();
    }
  }, []);

  if (!mswInit) {
    return null;
  }

  return <>{children}</>;
};
