'use client';

import { useEffect } from 'react';
let mswInit = false;
export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const init = async () => {
        const initMsw = await import('./index').then((res) => res.initMsw);
        await initMsw();
      };

      if (!mswInit) {
        init();
        mswInit = true;
      }
    }
  }, []);

  return <>{children}</>;
};
